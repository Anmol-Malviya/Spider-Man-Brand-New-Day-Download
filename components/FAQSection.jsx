'use client';

export default function FAQSection({ faqs }) {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-desc">Search engine & voice answer optimized Q&A for legal movie discovery.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-card" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h3 className="faq-question" itemprop="name">
                <span style={{ color: 'var(--accent-red)' }}>❓</span> {faq.q}
              </h3>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p className="faq-answer" itemprop="text">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
