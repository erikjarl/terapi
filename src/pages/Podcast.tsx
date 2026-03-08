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
                För dem som föredrar att lyssna istället för att läsa finns artikelsammanfattningar tillgängliga som podcastavsnitt på Spotify. Podcasten är utformad som en dialog mellan två AI-värdar som diskuterar och återger innehållet i artiklarna. Formatet lämpar sig för lyssning under promenader, träning eller andra aktiviteter där läsning inte är möjligt. För närvarande används Gemini text-to-speech, vilket kan resultera i felaktiga uttal på svenska. Målsättningen är att förbättra ljudkvaliteten genom att införa en mer avancerad talsyntes.
              </p>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Information</h3>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Avsnitt publiceras dagligen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Formatet är 5–10 minuter, avsett för korta lyssningspass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Podcasten är en dialog mellan två AI-värdar som diskuterar och återger artiklarna</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <div className="flex justify-center mt-6">
                    <a href="https://open.spotify.com/show/0Or2QYF5wB33IYGKXS2I4z"><img
  src={`${import.meta.env.BASE_URL}spotify-podcast-badge-blk-grn-330x80.png`}
  alt="Länk till Spotify"
  className="w-[175px] h-[45px] border"
/>
</a>
                
          
                  </div>
                <div className="flex justify-center mt-2">
                
                    <a
                      href="https://www.podbean.com/pw/pbblog-8ahi5-149a84f"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://pbcdn1.podbean.com/fs1/site/images/badges/w600_1.png"
                        alt="app download"
                        className="w-[175px] h-[60px] border-none"
                      />
                    </a>
                  </div>


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
