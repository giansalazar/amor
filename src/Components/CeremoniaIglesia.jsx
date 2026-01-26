import React from 'react';

function CeremoniaIglesia() {
    // Patrón sutil para dar textura de papel premium
    const textureStyle = {
        backgroundColor: '#fdfbf9',
        backgroundImage: `radial-gradient(#d1ccc0 0.5px, transparent 0.5px)`,
        backgroundSize: '16px 16px',
        opacity: '0.3'
    };

    return (
        <section className="relative w-full h-full flex items-center justify-center bg-[#fdfbf9] overflow-hidden p-4">
            {/* Textura de fondo */}
            <div className="absolute inset-0 pointer-events-none" style={textureStyle}></div>

            {/* Contenedor Principal con marco de costura */}
            <div className="z-10 w-full max-w-4xl bg-white/70 backdrop-blur-sm p-8 md:p-16 border border-[#b6a89a]/20 shadow-2xl flex flex-col items-center outline outline-1 outline-[#b6a89a]/30 outline-offset-[-15px] md:outline-offset-[-25px]">
                
                <h2 className="text-sm md:text-lg font-sans tracking-[0.5em] uppercase mb-12 text-[#6b635a] font-medium border-b border-[#b6a89a]/30 pb-2">
                    Ubicaciones
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 w-full relative">
                    {/* Divisor central para escritorio */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#b6a89a]/30"></div>

                    {/* CEREMONIA */}
                    <div className="flex flex-col items-center text-center px-4">
                        <img className="w-12 md:w-16 mb-6 opacity-70" src="/anillos.png" alt="Icono Anillos" />
                        <h3 className="text-3xl md:text-4xl font-great-vibes text-[#4a4a4a] mb-2">Ceremonia Religiosa</h3>
                        <p className="font-sans text-[11px] tracking-[0.2em] text-[#b6a89a] uppercase mb-4">6:00 PM</p>
                        <p className="text-lg md:text-xl font-serif italic text-[#555] mb-6 leading-relaxed">
                            Parroquia de Santa Catarina <br /> de Alejandría
                        </p>
                        <a 
                            className="inline-block border border-[#555] text-[#555] hover:bg-[#555] hover:text-white transition-colors duration-300 font-sans text-[10px] tracking-[0.3em] uppercase px-8 py-3 rounded-sm"
                            href="https://maps.app.goo.gl/YourMapLink1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Ver Mapa
                        </a>
                    </div>

                    {/* RECEPCIÓN */}
                    <div className="flex flex-col items-center text-center px-4">
                        <img className="w-12 md:w-16 mb-6 opacity-70" src="/celebracion.png" alt="Icono Celebración" />
                        <h3 className="text-3xl md:text-4xl font-great-vibes text-[#4a4a4a] mb-2">Recepción</h3>
                        <p className="font-sans text-[11px] tracking-[0.2em] text-[#b6a89a] uppercase mb-4">7:00 PM</p>
                        <p className="text-lg md:text-xl font-serif italic text-[#555] mb-6 leading-relaxed">
                            Finca <br /> "El Palmar"
                        </p>
                        <a 
                            className="inline-block border border-[#555] text-[#555] hover:bg-[#555] hover:text-white transition-colors duration-300 font-sans text-[10px] tracking-[0.3em] uppercase px-8 py-3 rounded-sm"
                            href="https://maps.app.goo.gl/YourMapLink2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Ver Mapa
                        </a>
                    </div>
                </div>

                {/* Separador decorativo inferior */}
                <div className="mt-16 flex items-center gap-3 opacity-30">
                    <div className="w-10 h-[1px] bg-[#b6a89a]"></div>
                    <div className="w-1.5 h-1.5 rotate-45 border border-[#b6a89a]"></div>
                    <div className="w-10 h-[1px] bg-[#b6a89a]"></div>
                </div>
            </div>
        </section>
    );
}

export default CeremoniaIglesia;