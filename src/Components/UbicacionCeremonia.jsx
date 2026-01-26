import React from 'react';
import CuentaRegresiva from './CuentaRegresiva';

function UbicacionCeremonia() {
    // Patrón de encaje floral complejo hecho con CSS puro
    const lacePattern = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            radial-gradient(circle at 50% 50%, #f4f1ee 2px, transparent 0),
            radial-gradient(circle at 0 0, #f4f1ee 2px, transparent 0),
            radial-gradient(circle at 100% 100%, #f4f1ee 2px, transparent 0),
            radial-gradient(circle at 100% 0, #f4f1ee 2px, transparent 0),
            radial-gradient(circle at 0 100%, #f4f1ee 2px, transparent 0),
            linear-gradient(45deg, transparent 45%, #f4f1ee 45%, #f4f1ee 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, #f4f1ee 45%, #f4f1ee 55%, transparent 55%)
        `,
        backgroundSize: '40px 40px', // Tamaño del tejido
        opacity: '0.6'
    };

    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center bg-[#fdfbf9] overflow-hidden relative">
            
            {/* CAPA DE TEXTURA DE ENCAJE (Generada por CSS) */}
            <div className="absolute inset-0 pointer-events-none" style={lacePattern}></div>

            {/* CONTENEDOR LADO IZQUIERDO: FECHA */}
            {/* Agregamos un borde sutil que parece costura o relieve */}
            <div className="z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 text-[#5a5a5a]">
                <div className="bg-[#fdfbf9]/80 backdrop-blur-sm p-10 rounded-sm shadow-2xl border border-white/50 flex flex-col items-center max-w-xs outline outline-1 outline-[#b6a89a]/20 outline-offset-[-15px]">
                    
                    <h2 className="text-4xl md:text-6xl font-great-vibes font-bold mb-4 text-center">
                        Agenda esta Fecha
                    </h2>

                    <img className="w-32 md:w-48 opacity-40 mb-6" src="./fon.png" alt="decoración" />

                    <div className="border-y border-[#b6a89a]/40 py-6 w-full text-center">
                        <p className="text-lg md:text-2xl font-sans tracking-[0.3em] uppercase opacity-80">
                            Sábado
                        </p>
                        <p className="text-4xl font-bold font-sans my-2 text-[#4a4a4a]">14 FEBRERO</p>
                        <p className="text-md md:text-lg font-sans tracking-[0.4em]">2026</p>
                    </div>

                    <img className="w-32 md:w-48 opacity-40 mt-6 rotate-180" src="./fon.png" alt="decoración" />
                </div>
            </div>

            {/* CONTENEDOR LADO DERECHO: CONTADOR */}
            <div className="z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-center p-10 bg-white/40 backdrop-blur-[2px]">
                <div className="bg-[#fdfbf9]/80 p-12 shadow-2xl border border-white/50 flex flex-col items-center outline outline-1 outline-[#b6a89a]/20 outline-offset-[-15px]">
                    <p className="text-4xl md:text-6xl text-[#5a5a5a] font-great-vibes font-light mb-12 text-center">
                        Solo Faltan
                    </p>

                    <div className="transform scale-110 md:scale-150 transition-transform">
                        <CuentaRegresiva />
                    </div>

                    <div className="mt-16 opacity-20">
                        <img className="w-24 md:w-40" src="./fon.png" alt="separador" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UbicacionCeremonia;