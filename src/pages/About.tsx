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
              <h3 className="text-2xl font-bold text-foreground mb-4">Vår mission</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Psysum grundades med målet att göra vetenskaplig forskning inom psykologi och 
                kognitiv beteendeterapi mer tillgänglig för alla. Vi tror på evidensbaserad kunskap 
                och vill bygga en bro mellan akademisk forskning och allmänheten.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Vad vi gör</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Varje dag publicerar vi sammanfattningar av vetenskapliga artiklar som har 
                granskats och valts ut för deras relevans och kvalitet. Vårt team läser igenom 
                hundratals forskningsartiklar för att hitta de mest intressanta och användbara 
                fynden inom områden som:
              </p>
              
              <ul className="list-disc list-inside space-y-2 mb-6 text-lg text-foreground">
                <li>Kognitiv beteendeterapi (KBT)</li>
                <li>Ångest och depression</li>
                <li>Mindfulness och meditation</li>
                <li>Neuropsykologi</li>
                <li>Emotionell reglering</li>
                <li>Stresshantering</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">För vem?</h3>
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Psysum är för alla som är intresserade av psykologi och mental hälsa - 
                oavsett om du är terapeut, student, forskare eller bara allmänt nyfiken. 
                Vi skriver på ett sätt som gör komplex forskning lättillgänglig utan att 
                förlora den vetenskapliga rigorositeten.
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-4">Framtiden</h3>
              <p className="text-lg leading-relaxed text-foreground">
                Detta är en betaversion av Psysum, och vi arbetar ständigt på att förbättra 
                plattformen. Med ditt stöd via Patreon kan vi utveckla fler funktioner, 
                publicera mer innehåll och fortsätta vårt uppdrag att göra psykologisk 
                vetenskap tillgänglig för alla.
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
