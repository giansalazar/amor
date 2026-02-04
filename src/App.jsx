import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // 1. Cargamos todas las fotos .jpeg de la carpeta src/fotos
    const imageModules = import.meta.glob('./fotos/*.jpeg', { eager: true });
    const imagePaths = Object.values(imageModules).map((mod) => mod.default);
    setImages(imagePaths);

    // 2. Cargamos el video específicamente
    const videoModules = import.meta.glob('./fotos/video.mp4', { eager: true });
    const videoPath = Object.values(videoModules)[0]?.default;
    setVideoUrl(videoPath);
  }, []);

  return (
    <div className="anniversary-container">
      {/* Corazones flotantes de fondo */}
      <div className="floating-hearts" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="heart">❤</div>
        ))}
      </div>

      <header className="hero-section">
        <h1 className="title">¡Feliz Primer Año, Mi Amor! ❤️</h1>
        <p className="subtitle">365 días de pura felicidad a tu lado</p>
      </header>

      <section className="love-letter">
        <div className="letter-card">
          <h2>Para mi niña hermosa,</h2>
          <p>
            No puedo creer que ya haya pasado un año desde que empezamos esta aventura. 
            Cada día contigo es mejor que el anterior, y estas fotos son solo una pequeña 
            muestra de todos los momentos mágicos que hemos compartido.
          </p>
          <p>
            Gracias por elegirme cada día. Eres el amor de mi vida y mi lugar seguro. 
            ¡Por muchos años más juntos!
          </p>
          <p className="signature">Te amo con todo mi corazón, <br/> Gian</p>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">Nuestra Historia en Fotos</h2>
        <div className="photo-grid">
          {images.map((src, index) => (
            <div key={index} className="photo-card">
              <img 
                src={src} 
                alt={`Momento ${index + 1}`} 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="video-section">
        <h2 className="section-title">Un Mensaje Especial</h2>
        <div className="video-wrapper">
          {videoUrl && (
            <video 
              src={videoUrl} 
              controls 
              playsInline 
              webkit-playsinline="true"
              preload="metadata"
              className="full-screen-video"
            >
              Tu iPhone no soporta este video.
            </video>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>Hecho con amor para ti 🌹 3 de Febrero, 2026</p>
      </footer>
    </div>
  );
}

export default App;