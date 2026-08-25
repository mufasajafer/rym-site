import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function CollectionPage() {
  return (
    <>
      <Navbar />
      
      <main style={{ paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: 'var(--section-py)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <span className="eyebrow">All Styles</span>
              <h1 className="section-title">The Collection</h1>
            </div>
          </div>

          <div className="product-grid">
            {products.map((p) => (
              <article className="product-card" key={p.id}>
                <Link href={`/product/${p.id}`} aria-label={`View ${p.name}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="product-card-img"
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                  />
                  <div className="product-card-body">
                    <h3 className="product-card-name">{p.name}</h3>
                    <p className="product-card-price">{p.price}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
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
