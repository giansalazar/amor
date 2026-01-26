import React from 'react';

function UbicacionCelebracion() {
    // Patrón de encaje floral nupcial (Textura del vestido)
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
        backgroundSize: '40px 40px',
        opacity: '0.5'
    };

    return (
        <section className="relative w-full h-full flex items-center justify-center bg-[#fdfbf9] overflow-hidden p-4 md:p-6">
            
            {/* CAPA DE TEXTURA DE VESTIDO (Encaje) */}
            <div className="absolute inset-0 pointer-events-none" style={lacePattern}></div>

            {/* CONTENEDOR TIPO TARJETA */}
            <div className="z-10 w-full max-w-4xl max-h-[92%] overflow-y-auto scrollbar-hide bg-white/80 backdrop-blur-md p-6 md:p-14 border border-[#b6a89a]/20 shadow-2xl flex flex-col items-center outline outline-1 outline-[#b6a89a]/30 outline-offset-[-12px] md:outline-offset-[-20px]">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-start">
                    
                    {/* BLOQUE: VESTIMENTA */}
                    <div className="flex flex-col items-center text-center space-y-4 md:border-r md:border-[#b6a89a]/20 md:pr-10">
                        <h2 className="text-3xl md:text-4xl font-great-vibes text-[#4a4a4a]">Código de Vestimenta</h2>
                        
                        <div className="relative py-2">
                            <img className="w-24 md:w-28 opacity-90" src="./codigo.png" alt="Icono Vestimenta" />
                            {/* Indicador Verde Esmeralda */}
                            <div className="absolute bottom-2 right-0 w-6 h-6 rounded-full bg-[#046307] border-2 border-white shadow-md"></div>
                        </div>

                        <p className="text-sm md:text-base font-serif italic text-[#555] leading-relaxed px-2">
                            "Para distinguir a nuestras damas de honor, les pedimos amablemente evitar el <span className="text-[#046307] font-bold">Verde Esmeralda</span> en sus atuendos."
                        </p>
                    </div>

                    {/* BLOQUE: ASISTENCIA */}
                    <div className="flex flex-col items-center text-center space-y-4 md:pl-10">
                        <h2 className="text-3xl md:text-4xl font-great-vibes text-[#4a4a4a]">Asistencia</h2>
                        
                        <p className="text-sm md:text-base font-serif italic text-[#555] leading-relaxed py-2">
                            Tu compañía hará este momento especial. Agradeceríamos confirmar para planear cada detalle con amor.
                        </p>

                        <a 
                            className="inline-flex items-center gap-3 border border-[#555] text-[#555] hover:bg-[#555] hover:text-white transition-all duration-500 font-sans text-[10px] tracking-[0.3em] uppercase px-12 py-4 rounded-sm shadow-sm"
                            href="https://wa.me/+524871137531?text=Hola%20Karla%20y%20Luis%20me%20encantaría%20ser%20parte%20de%20un%20día%20tan%20especial..." 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                            </svg>
                            Confirmar
                        </a>
                    </div>
                </div>

                {/* CIERRE: TE ESPERAMOS */}
                <div className="mt-12 md:mt-16 pt-8 border-t border-[#b6a89a]/20 w-full text-center">
                    <p className="text-4xl md:text-6xl font-great-vibes text-[#b6a89a] drop-shadow-sm">
                        ¡Te Esperamos!
                    </p>
                    <p className="mt-2 text-[10px] font-sans tracking-[0.5em] text-[#888] uppercase">
                        Karla & Luis
                    </p>
                </div>

            </div>
        </section>
    );
}

export default UbicacionCelebracion;