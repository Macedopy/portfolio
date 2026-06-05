export default function ContactCTA() {
  return (
    <section id="client" className="section-spacing">
      <style jsx>{`
        .contact-cta-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 64px;
          align-items: center;
          margin-bottom: 100px;
        }
        .cta-banner {
          background: linear-gradient(90deg, rgba(14, 14, 14, 0.9) 0%, rgba(14, 14, 14, 0.9) 100%);
          padding: 60px;
          borderRadius: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .cta-content {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 992px) {
          .cta-banner {
            flex-direction: column;
            gap: 40px;
            text-align: center;
            padding: 40px;
          }
          .cta-content {
            flex-direction: column;
            gap: 20px;
          }
        }
        @media (max-width: 768px) {
          .contact-cta-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .testimonial-box {
            height: 300px !important;
          }
          .badge {
            width: 100px !important;
            height: 100px !important;
            font-size: 10px !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="contact-cta-grid">
          <div className="testimonial-box" style={{ position: 'relative', height: '440px' }}>
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: '#17171A', 
              borderRadius: '20px' 
            }}>
              {/* Image placeholder */}
            </div>
            {/* Circular Text Badge Placeholder */}
            <div className="badge" style={{ 
              position: 'absolute', 
              bottom: '-20px', 
              right: '-20px', 
              width: '134px', 
              height: '134px', 
              background: 'white', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'black',
              fontSize: '12px',
              fontWeight: 700,
              textAlign: 'center'
            }}>
              SKILLED DESIGN
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px' }}>
              “Service is good and I recommend”
            </h3>
            <p style={{ color: 'var(--secondary)', lineHeight: '1.6', marginBottom: '32px' }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam 
              consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est 
              sit aliqua dolor do amet sint. Velit officia consequat duis enim velit 
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div style={{ width: '160px', height: '60px', background: '#333', borderRadius: '8px' }}>
              {/* User Image/Info */}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" style={{ borderRadius: '20px' }}>
          <div className="cta-content">
            <div style={{ fontSize: '64px' }}>✈️</div>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Have any project idea?</h2>
              <p style={{ color: 'var(--secondary)' }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
          </div>
          <button className="btn-primary" style={{ padding: '16px 32px' }}>Contact Now</button>
        </div>
      </div>
    </section>
  );
}
