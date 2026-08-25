'use client';
import { FormEvent, useState } from 'react';

const info = [
  { key: 'Order Window', val: 'Saturday & Sunday' },
  { key: 'Restock Day', val: 'Every Friday' },
  { key: 'Stock Type', val: 'New & Imported' },
  { key: 'How to Order', val: 'WhatsApp or Instagram DM' },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi RYM!\n\nName: ${name}\n\nMessage:\n${message}`;
    window.open(
      `https://wa.me/918431717975?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Reach Us</span>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="contact-grid">
          {/* Left: Form */}
          <div className="contact-left">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="contact-label" htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  className="contact-input"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="contact-label" htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  className="contact-textarea"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Which frame are you interested in?"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Right: Info */}
          <div className="contact-right">
            <p className="contact-info-title">Quick Info</p>
            <ul className="contact-info-list">
              {info.map((item) => (
                <li key={item.key} className="contact-info-item">
                  <p className="contact-info-key">{item.key}</p>
                  <p className="contact-info-val">{item.val}</p>
                </li>
              ))}
            </ul>

            <div className="contact-social-row">
              <a
                className="btn btn-outline-dark"
                href="https://wa.me/918431717975"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="btn btn-outline-dark"
                href="https://www.instagram.com/rym.shades/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
