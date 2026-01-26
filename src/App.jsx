import { useRef, useState } from 'react';
import Home from './Components/Home';
import Mensaje from './Components/Mensaje';
import CeremoniaIglesia from './Components/CeremoniaIglesia';
import UbicacionCeremonia from './Components/UbicacionCeremonia';
import UbicacionCelebracion from './Components/UbicacionCelebracion';
import Reproductor from './Components/Reproductor';
import Padres from './Components/Padres';
import PadresDos from './Components/PadresDos';
import Ayuda from './Components/Mesa';

function App() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const audioRef = useRef(null);

    const handlePlayAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsOverlayVisible(false))
                .catch(err => console.error('Error al reproducir:', err));
        }
    };

    return (
        <main className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-white">
            <audio ref={audioRef} loop>
                <source src="/reik.mp3" type="audio/mpeg" />
            </audio>

            {/* SECCIÓN 1: HOME */}
            <section className="snap-start w-full h-screen">
                <Home onStart={handlePlayAudio} />
            </section>

            {/* SECCIÓN 2: CUENTA REGRESIVA */}
            <section className="snap-start w-full h-screen">
                <UbicacionCeremonia />
            </section>

            {/* SECCIÓN 3: MENSAJE */}
            <section className="snap-start w-full h-screen">
                <Mensaje />
            </section>

            {/* SECCIÓN 4: PADRES DOS */}
            <section className="snap-start w-full h-screen">
                <PadresDos />
            </section>

            {/* SECCIÓN 5: CEREMONIA */}
            <section className="snap-start w-full h-screen">
                <CeremoniaIglesia />
            </section>

            {/* SECCIÓN 6: MESA / AYUDA */}
            <section className="snap-start w-full h-screen">
                <Ayuda />
            </section>

            {/* SECCIÓN 7: CELEBRACIÓN */}
            <section className="snap-start w-full h-screen">
                <UbicacionCelebracion />
            </section>

        

            {/* El reproductor suele ser fixed, así que no necesita sección propia */}
            <Reproductor />
        </main>
    );
}

export default App;