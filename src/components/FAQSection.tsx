'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'When does new stock drop?',
    a: 'New frames are restocked every Friday. Each drop is a curated edit — new and imported, not preloved.',
  },
  {
    q: 'When can I place an order?',
    a: 'Orders are open on weekends only — Saturday and Sunday. Limited quantities, first come first serve.',
  },
  {
    q: 'How do I order?',
    a: 'Through our WhatsApp channel or Instagram DM. We keep it personal and fast — no checkout clutter.',
  },

];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Need to Know</span>
          <h2 className="section-title">FAQ</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button
                className="faq-trigger"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                id={`faq-btn-${i}`}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
              >
                <p className="faq-answer-inner">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
