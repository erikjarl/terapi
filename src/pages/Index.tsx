import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import type { Article } from "@/types/article";
import articlesData from "@/data/articles.json";

const Index = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  // Import and validate articles
  let articles: Article[] = [];
  try {
    articles = Array.isArray(articlesData) ? articlesData : [];
  } catch (e) {
    articles = [];
  }

  // Sort by newest first
  const sortedArticles = [...articles].sort((a, b) =>
    (b.createdAt || "").localeCompare(a.createdAt || "")
  );

  const visibleArticles = sortedArticles.slice(0, visibleCount);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Vetenskapliga artiklar inom psykologi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dagliga sammanfattningar av forskningsartiklar med inriktning mot tillämparhet inom terapeutisk behandling
          </p>
        </div>
        
        {visibleArticles.length === 0 ? (
          <p className="text-muted-foreground text-center mt-8">
            Inga artiklar ännu.
          </p>
        ) : (
          <>
            <div className="space-y-8 max-w-4xl mx-auto">
              {visibleArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
            
            {visibleCount < sortedArticles.length && (
              <div className="flex justify-center mt-8">
                <Button
                onClick={() => setVisibleCount((c) => c + 10)}
                variant="outline"
                 className="hover-scale hover:bg-gray-100 hover:text-gray-900"
                  >
                  Visa fler artiklar
                  </Button>

              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
