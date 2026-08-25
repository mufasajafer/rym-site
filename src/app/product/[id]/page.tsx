import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import Navbar from '@/components/Navbar';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const whatsappText = `Hi RYM!\n\nI'm interested in ordering the ${product.name}.`;

  return (
    <>
      <Navbar />
      <main className="pdp-main">
        <div className="container">
          <div className="pdp-grid">
            {/* Gallery Left Side */}
            <div className="pdp-gallery">
              {product.images.map((img, i) => (
                <div key={i} className="pdp-img-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`${product.name} - view ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
            
            {/* Info Right Side */}
            <div className="pdp-info">
              <div className="pdp-info-sticky">
                <span className="eyebrow">{product.category}</span>
                <h1 className="pdp-title">{product.name}</h1>
                <p className="pdp-price">{product.price}</p>
                
                <div className="pdp-desc">
                  <p>{product.description}</p>
                </div>
                
                <a 
                  href={`https://wa.me/918431717975?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary pdp-btn"
                >
                  Order via WhatsApp
                </a>
                
                <p className="pdp-disclaimer">
                  Stock is extremely limited. Orders are processed first come, first serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}
