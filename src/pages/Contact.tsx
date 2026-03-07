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
                    <img src="public/favicon.ico" alt="" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">Mejl</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Mejl
                  </p>
                  
                  <div className="prose prose-lg mb-6">
                    <p className="text-foreground leading-relaxed">
                      Har du frågor, förslag eller vill du bidra till Sumra? Skicka ett mejl! 
                      
                
                    </p>
                  </div>

                  <div className="space-y-3">
                
                    
                    
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
