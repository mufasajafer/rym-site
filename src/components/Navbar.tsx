'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Products', href: '#products' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isHomePage = pathname === '/';
  const isScrolled = scrolled || !isHomePage;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <a className="nav-logo" href="/" onClick={() => setMenuOpen(false)}>RYM</a>
          <label className="container hamburger-container" aria-label="Toggle menu">
            <input 
              type="checkbox" 
              checked={menuOpen} 
              onChange={() => setMenuOpen(!menuOpen)} 
            />
            <div className="checkmark">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="container nav-overlay-container">
          {links.map((l) => (
            <a 
              key={l.label} 
              href={l.href} 
              className="nav-overlay-link" 
              onClick={(e) => handleNav(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
