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
        src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23111'/%3E%3C/svg%3E"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <span className="eyebrow">New Drop — Weekly Release</span>
        <h1 className="hero-title">
          See The World<br />Differently.
        </h1>
        <p className="hero-sub">
          Curated and imported sunglasses. Limited quantities, weekly drops — 
          ordered through WhatsApp, delivered with intention.
        </p>
        <div className="hero-cta">
          <a
            className="btn btn-primary"
            href="#products"
            onClick={(e) => handleScroll(e, '#products')}
          >
            Shop Now
          </a>
          <a
            className="btn btn-outline-white"
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
