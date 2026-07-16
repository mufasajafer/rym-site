'use client';

export default function HeroSection() {
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background video — cinematic sunglasses footage from Pexels CDN */}
      <video
        className="hero-video"
        src="/14883770_3840_2160_30fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23111'/%3E%3C/svg%3E"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-title">
          Curated Frames.<br />Dropping Weekly.
        </h1>

        <div className="hero-cta">
          <a
            className="btn btn-outline-white"
            href="#products"
            onClick={(e) => handleScroll(e, '#products')}
          >
            Explore The Drop
          </a>
        </div>
      </div>
    </section>
  );
}
