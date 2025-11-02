import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, ExternalLink } from "lucide-react";

const Podcast = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-primary rounded-full mb-4">
              <Headphones size={48} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Sumra Podcast
            </h2>
          </div>
          
          <Card className="shadow-medium">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Vill du hellre lyssna på artiklar än att läsa dem? Flera våra artikelsammanfattningar 
                kommer inom kort finns tillgängliga som podcastavsnitt på Spotify. Perfekt för dig som vill ta 
                del av den senaste forskningen under promenaden, på gymmet eller på väg till jobbet.
              </p>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Varför lyssna?</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Samma högkvalitativa innehåll som på hemsidan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Nya avsnitt publiceras dagligen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Perfekt längd för kortare lyssningsstunder (5-10 minuter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Hög kvalitativ inläsning med tydligt fokus på innehållet</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="gap-2"
                  onClick={() => window.open("https://open.spotify.com", "_blank")}
                >
                  <span>Lyssna på Spotify</span>
                  <ExternalLink size={20} />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Podcasten kommer finnas också på Apple Podcasts och andra podcastplattformar
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Podcast;
