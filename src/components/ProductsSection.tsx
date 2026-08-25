import Link from 'next/link';
import { products } from '@/lib/products';

export default function ProductsSection() {
  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-header-row">
            <div>
              <span className="eyebrow">This Week&apos;s Drop</span>
              <h2 className="section-title">Featured Frames</h2>
            </div>
            <Link href="/collection" className="section-link">
              View All Collection
            </Link>
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
    </section>
  );
}
