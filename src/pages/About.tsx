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
                Sumra är en hemisda skapad med syfte att göra gratis fulltexter inom psykologi mer tillgängliga och begripliga.
                Utgångspunkten är att det kan vara svårt att ta sig tiden att sätta sig in i den senaste forskningen kontinuerligt. Sumra möjliggör
                att lära sig någonting nytt inom psykologi varje dag efter bara några minuters läsning.
            
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Hur går det till?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Varje dag hämtar sumra de senaste fulltexterna som finns gratis via PUBMED, sammanfattar
                dessa med hjälp av generativ AI-teknik och publicerar detta som tillgängliga artiklar här på hemsidan.
                Just nu är hemsidan under uppbyggnad och sökorden för insamlandet av artiklar kontinuerligt men ambitionen är
                att fokusera urvalet på följande områden:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground">
                <li>Kognitiv beteendeterapi (KBT)</li>
                <li>DBT, ACT</li>
        
                <li>Kliniska diagnoser vanliga vid terapeutiska behandling</li>
                <li>Studier av specifika terapeutiska interventioner</li>

            
                
                
            
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">För vem?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Sumra är för alla som är intresserade av psykologi och mental hälsa - 
                oavsett om du är terapeut, student, forskare eller bara allmänt nyfiken. 
                Vi skriver på ett sätt som gör komplex forskning lättillgänglig utan att 
                förlora den vetenskapliga rigorositeten.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Framtiden</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Detta är en betaversion av Sumra, och målet är att ständigt förbättra 
                plattformen. Med ditt stöd via Patreon kan vi utveckla fler funktioner. Målsättningarna är att med stöd kunna utveckla:
                <li>Uppgradera till mer avancerad AI-språkmodell för att förbättra textinnehåll och ytterligare
                  minska risk för felaktigheter i den AI-genererade texten.
                </li>
                <li>Öka antalet publiceringar</li>
                <li>Skapa upplästa forskningsartiklar som publiceras i podcast</li>
                <li>Utöka till fler ämnesområden </li>
                <li>Mänsklig faktagranskning av innehållet som kan säkerställa 100% korrekt återgiven information</li>

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
