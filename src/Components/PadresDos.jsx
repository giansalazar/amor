import React from 'react';

function PadresDos() {
    return (
        <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-white">
            
            {/* CAPA DE IMAGEN DE FONDO CON FILTRO CLARO */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                style={{ 
                    backgroundImage: "url('/mensaje.jpg')",
                    filter: "sepia(20%) brightness(1.1) opacity(0.25)" // Imagen muy clara y sutil
                }}
            ></div>

            {/* CONTENEDOR DE TEXTO EN BLANCO ELEGANTE */}
            <div className="z-10 w-[90%] max-w-2xl bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-lg border border-[#b6a89a]/20 shadow-xl flex flex-col items-center justify-center max-h-[85%] overflow-y-auto scrollbar-hide">
                
                <h2 className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase mb-6 text-[#6b635a] font-medium border-b border-[#b6a89a]/30 pb-2">
                    Gratitud
                </h2>

                <div className="flex-grow flex items-center">
                    {/* Texto en gris oscuro/carbón para máxima legibilidad sobre blanco */}
                    <p className="text-[6.5vw] md:text-[1.8rem] lg:text-[2rem] font-serif leading-tight md:leading-relaxed text-[#444] text-center italic font-light">
                        "Gracias por acompañarnos en este día tan especial. <br className='hidden md:block'/>
                        Su amor y apoyo significan el mundo para nosotros, <br className='hidden md:block'/>
                        y cada uno de ustedes ha dejado una huella <br className='hidden md:block'/>
                        invaluable en nuestras vidas."
                    </p>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <div className="flex items-center gap-4 md:gap-8 text-[#b6a89a]">
                        <span className="text-5xl md:text-7xl font-great-vibes">K</span>
                        <span className="h-8 md:h-12 w-[1px] bg-[#b6a89a]/40 rotate-[20deg]"></span>
                        <span className="text-5xl md:text-7xl font-great-vibes">L</span>
                    </div>
                    <p className="mt-4 text-[10px] md:text-[12px] font-sans tracking-[0.4em] uppercase text-[#888]">
                        Febrero 2026
                    </p>
                </div>
            </div>

            {/* Viñeta blanca para suavizar bordes */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(255,255,255,0.9)]"></div>
        </section>
    );
}

export default PadresDos;