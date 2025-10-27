import { useState } from "react";
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareUrl = `${window.location.origin}/article/${article.id}`;
  
  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(article.title_sv ?? article.title);
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Länk kopierad!");
      setShowShareMenu(false);
      return;
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
    setShowShareMenu(false);
  };

  return (
    <Card className="overflow-hidden hover:shadow-medium transition-smooth animate-fade-in group">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-smooth">
            {article.title_sv ?? article.title}
          </CardTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowShareMenu(!showShareMenu)}
              className="shrink-0"
            >
              <Share2 size={20} />
            </Button>
            
            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-medium p-2 space-y-1 z-10 animate-fade-in">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2"
                  onClick={() => handleShare("facebook")}
                >
                  <Facebook size={16} />
                  Facebook
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2"
                  onClick={() => handleShare("twitter")}
                >
                  <Twitter size={16} />
                  Twitter
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2"
                  onClick={() => handleShare("linkedin")}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start gap-2"
                  onClick={() => handleShare("copy")}
                >
                  <LinkIcon size={16} />
                  Kopiera länk
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          {article.createdAt && (
            <>
              <time>{new Date(article.createdAt).toLocaleDateString("sv-SE")}</time>
              <span>•</span>
            </>
          )}
          <div className="flex gap-2 flex-wrap">
            {article.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-muted rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {article.summary && (
            <>
              <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                {isExpanded ? article.summary : article.summary.slice(0, 200) + (article.summary.length > 200 ? "..." : "")}
              </p>
              
              {article.summary.length > 200 && (
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="w-full md:w-auto transition-smooth"
                >
                  {isExpanded ? "Visa mindre" : "Läs mer"}
                </Button>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
