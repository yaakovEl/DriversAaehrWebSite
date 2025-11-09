import "./Home.css";

export default function Home() {
  const whatsappNumber = "972527435717"; // 052-743-5717 בפורמט בינלאומי בלי 0
  const whatsappText = encodeURIComponent("שלום, אשמח להזמין נסיעה/משלוח.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main className="Home" dir="rtl">
      <div className="bg-gradient" aria-hidden="true" />

      <header className="hero container">
        <div className="brand">
          <span className="logo" aria-hidden="true">
            {/* אייקון מונית */}
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11h1a2 2 0 012 2v3a1 1 0 01-1 1h-1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1H3a1 1 0 01-1-1v-3a2 2 0 012-2h1zm3.4-4a1 1 0 00-.95.68L6.2 11h11.6l-1.25-3.32a1 1 0 00-.95-.68H8.4zM6.5 15.5A1.5 1.5 0 108 17a1.5 1.5 0 00-1.5-1.5zm11 0A1.5 1.5 0 1019 17a1.5 1.5 0 00-1.5-1.5z" />
            </svg>
          </span>

          {/* H1 וסאב־טקסט ממוקדי מילות מפתח */}
          <h1>דרייברים – משלוחים ונסיעות לכל הארץ 24/6</h1>
          <p className="subtitle">
            שירות מוניות ושליחויות אקספרס, כולל נסיעות לנתב״ג. הזמנה בוואטסאפ
           052-743-5717 חיוג.
          </p>
        </div>

        <div className="cta-group">
          <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            {/* אייקון וואטסאפ */}
            <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M19.11 17.26c-.3-.15-1.77-.87-2.05-.96-.28-.1-.48-.15-.68.15-.2.3-.78.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53-.18 0-.37-.01-.57-.01-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49 3 .29 3.6.19 4.25.14.65-.05 2.08-.85 2.38-1.67.3-.82.3-1.52.2-1.67-.1-.15-.27-.22-.57-.37zM16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.59 4.38 1.62 6.22L3 29l6.99-1.83a12.73 12.73 0 006.02 1.53c7.07 0 12.8-5.73 12.8-12.8 0-7.07-5.73-12.8-12.8-12.8zm0 23.1a10.26 10.26 0 01-5.23-1.44l-.38-.23-4.15 1.09 1.11-4.05-.25-.41a10.3 10.3 0 01-1.54-5.26c0-5.67 4.61-10.28 10.28-10.28 5.67 0 10.28 4.61 10.28 10.28 0 5.67-4.61 10.3-10.12 10.3z" />
            </svg>
            שלחו וואטסאפ
          </a>

          <a className="btn btn-call" href="tel:0527435717">
            {/* אייקון טלפון */}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.2 2.4 3.1 4.3 5.5 5.5l1.8-1.8c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3.1.4.7 0 1.3.6 1.3 1.3V20c0 .7-.6 1.3-1.3 1.3C9.9 21.3 2.7 14.1 2.7 4.3 2.7 3.6 3.3 3 4 3h3.1c.7 0 1.3.6 1.3 1.3 0 1 .1 2.1.4 3.1.1.4 0 .9-.3 1.2ל-1.9 2.2z" />
            </svg>
            התקשרו עכשיו
          </a>
        </div>

        <div className="contact-strip">
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">📞</span>
            <span>לשירות מהיר: <a href="tel:0527435717">052-743-5717</a></span>
          </div>
          <div className="contact-item">
            <span className="contact-icon" aria-hidden="true">💬</span>
            <span>וואטסאפ לבעל המונית: <a href={whatsappLink} target="_blank" rel="noreferrer">050-413-5930</a></span>
          </div>
        </div>
      </header>

      <section className="features container">
        <div className="feature-card">
          {/* אייקון מיקום */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
          </svg>
          <h3>נסיעות לכל הארץ</h3>
          <p>מנקודה לנקודה – עירוני ובין־עירוני.</p>
        </div>

        <div className="feature-card">
          {/* אייקון חבילה */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M21 8.5l-9-5-9 5 9 5 9-5zm-9 6.5l-9-5v10l9 5 9-5V10l-9 5z" />
          </svg>
          <h3>משלוחים מהירים</h3>
          <p>שליחויות מדלת לדלת, מעקב ועדכון לקוח.</p>
        </div>

        <div className="feature-card">
          {/* אייקון שקל */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M7 6h5a4 4 0 014 4v7h-2v-7a2 2 0 00-2-2H9v10H7V6zm10 12h-5a4 4 0 01-4-4V7h2v7a2 2 0 002 2h5v2z" />
          </svg>
          <h3>מחירים הוגנים</h3>
          <p>מודל שיתופי: כיסוי דלק והוצאות שוטפות – לא מעבר.</p>
        </div>

        <div className="feature-card">
          {/* אייקון שעון */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M12 1.8A10.2 10.2 0 112 12 10.2 10.2 0 0112 1.8zm.9 5.4h-1.8v5.1l4.4 2.6.9-1.5-3.5-2.1z" />
          </svg>
          <h3>זמינות וגמישות</h3>
          <p>מתאימים את עצמנו לצורך – בתיאום מראש.</p>
        </div>
      </section>

      <footer className="footer container">
        <p>יש לכם שאלה? כתבו לנו בוואטסאפ או התקשרו – נשמח לעזור.</p>
        <div className="cta-inline">
          <a className="link-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            וואטסאפ
          </a>
          <span className="dot" />
          <a className="link-call" href="tel:0527435717">חיוג</a>
        </div>
      </footer>
    </main>
  );
}
