import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <a
              href="https://www.patreon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-smooth group"
            >
              <Heart size={16} className="group-hover:fill-primary transition-smooth" />
              <span>Stöd mig på Patreon</span>
            </a>
          </div>
          <span className="hidden md:inline">•</span>
          <p className="text-center">
            Detta är en betaversion som kommer förbättras med ökat stöd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
