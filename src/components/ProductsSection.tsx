// Pexels free-license image IDs for sunglasses
const products = [
  {
    id: 1,
    name: 'Chrome Aviator',
    category: 'Men',
    price: '₹1,299',
    tag: 'New Drop',
    img: 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
  },
  {
    id: 2,
    name: 'Retro Square',
    category: 'Unisex',
    price: '₹1,099',
    tag: '4 Left',
    img: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
  },
  {
    id: 3,
    name: 'Old Money Oval',
    category: 'Women',
    price: '₹1,499',
    tag: 'Best Seller',
    img: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
  },
  {
    id: 4,
    name: 'Cartier Slim',
    category: 'Men',
    price: '₹1,799',
    tag: '2 Left',
    img: 'https://images.pexels.com/photos/3622608/pexels-photo-3622608.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
  },
];

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
            <a
              href="https://wa.me/919999999999?text=Hi%20RYM!%20I%27d%20like%20to%20see%20all%20available%20frames."
              target="_blank"
              rel="noopener noreferrer"
              className="section-link"
            >
              Shop All via WhatsApp
            </a>
          </div>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <article className="product-card" key={p.id}>
              <a
                href={`https://wa.me/919999999999?text=Hi%20RYM!%20I%27m%20interested%20in%20the%20${encodeURIComponent(p.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${p.name} via WhatsApp`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="product-card-img"
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                />
                <div className="product-card-body">
                  <h3 className="product-card-name">{p.name}</h3>
                  <p className="product-card-price">{p.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
