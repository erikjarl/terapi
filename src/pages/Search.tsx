import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/types/article";
import articlesData from "@/data/articles.json";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Import and validate articles
  let articles: Article[] = [];
  try {
    articles = Array.isArray(articlesData) ? articlesData : [];
  } catch (e) {
    articles = [];
  }

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        (article.summary?.toLowerCase() || "").includes(query) ||
        article.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery, articles]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Sök artiklar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Hitta relevanta artiklar genom att söka på nyckelord
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Sök efter artiklar, ämnen eller nyckelord..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg shadow-medium"
            />
          </div>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {searchQuery.trim() && filteredArticles.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-lg text-muted-foreground">
                Inga artiklar matchade din sökning. Prova andra sökord.
              </p>
            </div>
          )}
          
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
