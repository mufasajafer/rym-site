import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MarqueeStrip from '@/components/MarqueeStrip';
import ProductsSection from '@/components/ProductsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <MarqueeStrip />
        <ProductsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <span className="footer-logo">RYM</span>
            <p className="footer-copy">
              © {new Date().getFullYear()} RYM — Weekly drops, imported frames.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a
                href="https://www.instagram.com/rym.shades/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}
              >
                Instagram
              </a>
              <a
                href="https://wa.me/918431717975"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
