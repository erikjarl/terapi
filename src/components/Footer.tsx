import { useEffect, useState } from "react";

const Footer = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // hide when scrolling down, show when scrolling up
      if (currentY > lastScrollY && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-card/95 border-t border-border backdrop-blur-sm transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <p className="italic text-center">
            Kom ihåg att innehållet i artiklarna är AI-genererat och kan innehålla felaktigheter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
