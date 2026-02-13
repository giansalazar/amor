import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
  const [likes, setLikes] = useState({});
  const [showHeart, setShowHeart] = useState({ visible: false, id: null });

  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const lastTap = useRef(0);
  const baseUrl = import.meta.env.BASE_URL;

  const totalImages = 38;
  const images = Array.from({ length: totalImages }, (_, i) => `${i + 1}.jpeg`);
  const storiesCount = 6;

  const [showLikesModal, setShowLikesModal] = useState(false);

  const famousPeople = [
    "Harry Styles", "Taylor Swift", "Zendaya", "Tom Holland", "Selena Gomez",
    "Justin Bieber", "Dua Lipa", "Drake", "Rihanna", "Bad Bunny",
    "Rosalía", "The Weeknd", "Billie Eilish", "Ariana Grande", "Bruno Mars",
    "Beyoncé", "Lady Gaga", "Shakira", "Katy Perry", "Shawn Mendes",
    "Camila Cabello", "Chris Hemsworth", "Scarlett Johansson", "Robert Downey Jr.", "Zac Efron",
    "Emma Watson", "Millie Bobby Brown", "Noah Schnapp", "Finn Wolfhard", "Sadie Sink",
    "Henry Cavill", "Gal Gadot", "Margot Robbie", "Ryan Reynolds", "Blake Lively",
    "Anya Taylor-Joy", "Timothée Chalamet", "Florence Pugh", "Harry Kane", "Lionel Messi",
    "Cristiano Ronaldo", "Neymar Jr", "Lewis Hamilton", "Max Verstappen", "LeBron James",
    "Stephen Curry", "Kylian Mbappé", "Karol G", "Peso Pluma", "Tu novio que te ama ❤️"
  ];
  const loveQuotes = [
    "Donde todo comenzó... el inicio de mi felicidad. ❤️",
    "Tu sonrisa es, y siempre será, mi lugar favorito en el mundo.",
    "Gracias por elegirme cada día para caminar a tu lado.",
    "Cada segundo contigo es un tesoro que guardo en el alma.",
    "Eres la respuesta a todas mis oraciones, mi amor.",
    "No es solo una foto, es el recuerdo de un momento perfecto.",
    "Contigo, el amor es la aventura más hermosa de todas.",
    "Mi corazón late más fuerte desde que pronunciaste mi nombre.",
    "Eres esa luz que ilumina incluso mis días más grises.",
    "Te amo más de lo que las palabras pueden llegar a explicar.",
    "A tu lado, el mundo se ve mucho más brillante.",
    "Eres el sueño del que nunca quiero despertar.",
    "Gracias por enseñarme lo que realmente significa amar.",
    "Cada detalle tuyo me enamora como la primera vez.",
    "Mi lugar favorito es dentro de uno de tus abrazos.",
    "Eres mi paz, mi hogar y mi mayor orgullo.",
    "Nuestra historia es mi libro favorito.",
    "Prometo cuidarte y amarte en cada etapa de nuestra vida.",
    "Eres la casualidad más bonita que me ha pasado.",
    "Tus besos son el motor que me impulsa a ser mejor.",
    "No te cambio por nada, porque tú lo eres todo para mí.",
    "Un año de conocernos y siento que te amo de toda la vida. ❤️",
    "Eres la melodía que siempre quiero escuchar.",
    "Gracias por ser mi cómplice en cada locura.",
    "Tu amor es el regalo más grande que he recibido.",
    "Cada día a tu lado es una nueva oportunidad para ser feliz.",
    "Eres mi presente y quiero que seas todo mi futuro.",
    "Mirarte y saber que tengo mucha suerte de tenerte.",
    "Eres mi mejor amiga y el amor de mi vida.",
    "Nada es igual si no estás tú para compartirlo conmigo.",
    "Tu felicidad es mi mayor prioridad siempre.",
    "Eres la pieza que le faltaba a mi rompecabezas.",
    "Amo la forma en la que me miras cuando crees que no me doy cuenta.",
    "Eres más de lo que alguna vez llegué a imaginar.",
    "Por mil años más creando recuerdos así de bonitos.",
    "Tu amor me hace sentir que puedo lograrlo todo.",
    "Eres mi rayito de sol en medio de la tormenta.",
    "Te amo hoy, mañana y para toda la eternidad. Feliz 14 de febrero."
  ];

  useEffect(() => {
    if (activeStory !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        nextStory();
      }, 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [activeStory]);

  const startExperience = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Error de audio:", e));
    }
  };

  const toggleLike = (index) => {
    setLikes(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDoubleTap = (index) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap.current < DOUBLE_PRESS_DELAY) {
      if (!likes[index]) toggleLike(index);
      setShowHeart({ visible: true, id: index });
      setTimeout(() => setShowHeart({ visible: false, id: null }), 1000);
    }
    lastTap.current = now;
  };

  const nextStory = () => {
    if (activeStory < storiesCount - 1) {
      setActiveStory(prev => prev + 1);
    } else {
      setActiveStory(null);
    }
  };

  const prevStory = () => {
    if (activeStory > 0) {
      setActiveStory(prev => prev - 1);
    } else {
      setActiveStory(null);
    }
  };

  return (
    <div className="app-container dark">
      <audio ref={audioRef} src={`${baseUrl}musica.mp3`} loop />

      {!started ? (
        <div className="login-screen">
          <div className="fb-logo">f</div>
          {/* Imagen login.jpeg agregada aquí */}
          <div className="login-photo-container">
            <img src={`${baseUrl}images/login.jpeg`} alt="Login" className="login-photo" />
          </div>
          <button className="fb-login-btn" onClick={startExperience}>
            Continuar como Amor de mi vida
          </button>
        </div>
      ) : (
        <div className="fb-layout">
          <header className="fb-header">
            <span className="fb-text-logo">facebook</span>
            <div className="header-icons">
              <div className="icon-circle">🔍</div>
              <div className="icon-circle">💬</div>
            </div>
          </header>

          <main className="fb-feed">
            <section className="status-container">
              <div className="status-top">
                <div className="user-avatar-small">❤️</div>
                <div className="status-input">¿Qué estás pensando, Amor?</div>
              </div>
            </section>

            <section className="stories-bar">
              {images.slice(0, storiesCount).map((img, i) => (
                <div key={i} className="story-card" onClick={() => setActiveStory(i)}>
                  <img src={`${baseUrl}images/${img}`} alt="Story" className="story-bg" />
                  <div className="story-avatar">❤️</div>
                  <p>{i === 0 ? "Tu historia" : `Momento ${i + 1}`}</p>
                </div>
              ))}
            </section>

            {activeStory !== null && (
              <div className="story-modal">
                <div className="story-content">
                  <div className="stories-progress-container">
                    {Array.from({ length: storiesCount }).map((_, i) => (
                      <div key={i} className="progress-track">
                        <div className={`progress-fill ${i === activeStory ? 'active' : ''} ${i < activeStory ? 'finished' : ''}`}></div>
                      </div>
                    ))}
                  </div>
                  <button className="close-story" onClick={() => setActiveStory(null)}>✕</button>
                  <div className="story-navigation">
                    <div className="nav-side left" onClick={(e) => { e.stopPropagation(); prevStory(); }}></div>
                    <img src={`${baseUrl}images/${images[activeStory]}`} className="story-full-img" alt="Historia" />
                    <div className="nav-side right" onClick={(e) => { e.stopPropagation(); nextStory(); }}></div>
                  </div>
                  <div className="story-footer-input">
                    <input type="text" placeholder="Enviar mensaje..." readOnly />
                    <span className="heart-reaction">❤️</span>
                  </div>
                </div>
              </div>
            )}

            <div className="feed-posts">
              {images.map((imgName, index) => (
                <article key={index} className="fb-post">
                  <div className="post-header">
                    <div className="post-avatar">❤️</div>
                    <div className="post-meta">
                      <p className="user-name">Nosotros</p>
                      <p className="post-date">Hace un momento • 🌎</p>
                    </div>
                  </div>

                  <div className="post-caption">
                    {loveQuotes[index]}
                  </div>

                  <div className="post-img-container" onClick={() => handleDoubleTap(index)}>
                    <img src={`${baseUrl}images/${imgName}`} alt="Post" className="post-img" />
                    {showHeart.visible && showHeart.id === index && (
                      <div className="floating-heart">❤️</div>
                    )}
                  </div>

                  <div className="post-footer">
                    <div className="reactions" onClick={() => setShowLikesModal(true)} style={{ cursor: 'pointer' }}>
                      <span className="reaction-icons">👍❤️</span>
                      {likes[index] ? "Tú y 1M más" : "1M de personas"}
                    </div>

                    <div className="post-actions">
                      <div className={`action-item ${likes[index] ? 'active-like' : ''}`} onClick={() => toggleLike(index)}>
                        <span className="action-icon">{likes[index] ? '❤️' : '👍'}</span>
                        <span>Me gusta</span>
                      </div>
                      <div className="action-item">
                        <span className="action-icon">💬</span>
                        <span>Comentar</span>
                      </div>
                      <div className="action-item">
                        <span className="action-icon">⤴️</span>
                        <span>Compartir</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {showLikesModal && (
              <div className="likes-modal-overlay" onClick={() => setShowLikesModal(false)}>
                <div className="likes-modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="likes-modal-header">
                    <h3>Personas a las que les gusta</h3>
                    <button className="close-likes" onClick={() => setShowLikesModal(false)}>✕</button>
                  </div>
                  <div className="likes-list">
                    {famousPeople.map((name, i) => (
                      <div key={i} className="like-row">
                        <div className="like-avatar">{name === "Harry Styles" ? "🤴" : "✨"}</div>
                        <span className="like-name">{name}</span>
                        <button className="follow-btn-fake">{name.includes("novio") ? "Casados" : "Seguir"}</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}

export default App;