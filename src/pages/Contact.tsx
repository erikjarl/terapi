import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-soft">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            Kontakt
          </h2>
          
          <Card className="shadow-medium">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-strong">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQE67MuDgrsavQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707568506872?e=1764806400&v=beta&t=H8jL9YebnUrTz2uJm97Q-8wAbi6g_Vft4nUutM-t_Iw" alt="Erik Jarl" className="w-48 h-48 bg-gradient-primary rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-strong" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Erik Jarl</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Grundare
                  </p>
                  
                  <div className="prose prose-lg mb-6">
                    <p className="text-foreground leading-relaxed">
                      Har du frågor, förslag eller vill du bidra till Sumra? Jag hör gärna från dig! 
                      
                
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full md:w-auto gap-2 justify-center"
                      onClick={() => window.location.href = "mailto:erik.jarl@hotmail.com"}
                    >
                      <Mail size={20} />
                      Mejla mig!
                    </Button>
                    
                    <Button
                      variant="outline"
                      className="w-full md:w-auto gap-2 justify-center"
                      onClick={() => window.open("https://www.linkedin.com/in/erik-jarl-a81475121/", "_blank")}
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </Button>
                  </div>

                  
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

export default Contact;
