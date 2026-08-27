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
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isHomePage = pathname === '/';
  const isScrolled = scrolled || !isHomePage;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="nav-logo" href="/">RYM</a>
        
        <div className="nav-links">
          {links.map((l) => (
            <a 
              key={l.label} 
              href={l.href} 
              className="nav-link" 
              onClick={(e) => handleNav(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
