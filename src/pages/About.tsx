import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Om projektet
          </h2>
          
          <Card className="shadow-medium mb-8">
            <CardContent className="prose prose-lg max-w-none pt-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">Vad är Sumra?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Sumra är en webbplats som har skapats med syftet att göra vetenskapliga artiklar inom psykologi mer tillgängliga och begripliga. För många kan det vara svårt att kontinuerligt avsätta tid för att sätta sig in i den senaste forskningen. Sumra möjliggör därför att ta del av ny kunskap inom psykologi varje dag genom endast några minuters läsning eller lyssning.
            
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Hur går det till?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
Varje dag hämtar Sumra de senaste vetenskapliga artiklarna i fulltext som är fritt tillgängliga via PubMed. Dessa sammanfattas med hjälp av generativ AI-teknik och publiceras som tillgängliga artiklar på webbplatsen. Samma innehåll sammanfattas även i podcastformat och publiceras på de plattformar där poddar finns tillgängliga.

I nuläget är Sumra kalibrerat för att samla in artiklar från vetenskapliga tidskrifter med inriktning mot psykologisk forskning. Samtidigt pågår ett kontinuerligt arbete med att finjustera både sökstrategier och de AI-promptar som används för att sammanfatta artiklarna, i syfte att skapa så relevant och kvalitativt innehåll som möjligt.

För närvarande fokuserar Sumra främst på innehåll inom följande områden:              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground">
                <li>Psykologisk behandling (KBT, ACT, DBT, CFT m.fl.)</li>
                <li>Kliniska diagnoser vanliga vid psykologisk behandling</li>
                <li>Studier av specifika terapeutiska interventioner</li>

            
                
                
            
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">För vem?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
              Sumra riktar sig till alla som är intresserade av psykologi och mental hälsa – oavsett om du är terapeut, student, forskare eller allmänt intresserad. Texterna och podcasten är utformade för att göra komplex forskning mer tillgänglig. Förhoppningen är att innehållet även kan fungera som en ingång till att läsa originalartiklar i sin helhet och bidra till en bredare kunskapsspridning.              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Framtiden</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Den nuvarande versionen av Sumra är en betaversion, och målet är att plattformen kontinuerligt ska utvecklas och förbättras.
                <br /> <br />              
              <h3 className="text-2xl font-bold text-foreground mb-4">Målsättningar</h3>
                
                <li>Uppgradera till mer avancerad AI-språkmodell för att förbättra textinnehåll och ytterligare
                  minska risken för felaktigheter i AI-genererat innehåll
                </li>
                <li>Öka antalet publiceringar av blogginlägg och podcastavsnitt</li>
            
                <li>Utöka till fler ämnesområden </li>
                <li>Införa mänsklig faktagranskning av innehållet för att säkerställa korrekt återgiven information</li>
                

              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
