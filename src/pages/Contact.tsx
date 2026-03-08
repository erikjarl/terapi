import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mojkqozq");

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
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-primary rounded-full flex items-center justify-center text-white shadow-strong overflow-hidden">
                    <img
                      src="/favicon.ico"
                      alt="Sumra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 w-full text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-foreground">
                    Mejl
                  </h3>

                  <p className="text-lg text-muted-foreground mb-6">
                    Har du frågor, förslag eller vill du bidra till Sumra?
                  </p>

                  <div className="prose prose-lg mb-6 max-w-none">
                    <p className="text-foreground leading-relaxed">
                      Skicka gärna ett meddelande via formuläret nedan.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-muted-foreground justify-center md:justify-start">
                    <Mail size={18} />
                    <span>Kontaktformulär</span>
                  </div>

                  {state.succeeded ? (
                    <div className="rounded-lg border bg-background p-4 text-foreground">
                      Tack! Ditt meddelande har skickats.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className="text-sm font-medium">
                          E-post
                        </label>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="din@email.se"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <label htmlFor="message" className="text-sm font-medium">
                          Meddelande
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Skriv ditt meddelande här..."
                          required
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <Button type="submit" disabled={state.submitting}>
                        {state.submitting ? "Skickar..." : "Skicka"}
                      </Button>
                    </form>
                  )}
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