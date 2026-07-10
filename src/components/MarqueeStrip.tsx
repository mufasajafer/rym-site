const items = [
  'Aviator', 'Retro', 'Old Money', 'Cyberpunk',
  'Dior-Inspired', 'Cartier-Inspired', 'Chrome', 'Slim Frame',
  'Aviator', 'Retro', 'Old Money', 'Cyberpunk',
  'Dior-Inspired', 'Cartier-Inspired', 'Chrome', 'Slim Frame',
];

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
