import React from 'react';

function Ayuda() {
    const handleClick = () => {
        navigator.clipboard.writeText("4152 3138 6438 3943");
        // Cambiamos el alert por algo más sutil si lo deseas, 
        // pero por ahora mantenemos la lógica funcional.
        alert('Has copiado el número de tarjeta con éxito');
    }

    return (
        <section className="relative w-full h-full flex items-center justify-center bg-transparent overflow-hidden p-4">
            
            {/* Contenedor Principal: Estilo Tarjeta Premium */}
            <div className="z-10 w-full max-w-2xl bg-white/70 backdrop-blur-sm p-8 md:p-16 border border-[#b6a89a]/20 shadow-2xl flex flex-col items-center outline outline-1 outline-[#b6a89a]/30 outline-offset-[-15px] md:outline-offset-[-25px]">
                
                <h2 className="text-sm md:text-lg font-sans tracking-[0.5em] uppercase mb-10 text-[#6b635a] font-medium border-b border-[#b6a89a]/30 pb-2">
                    Mesa de Regalos
                </h2>

                {/* Mensaje de agradecimiento en Serif para mayor calidez */}
                <p className="text-2xl md:text-3xl font-serif italic text-[#555] font-light text-center leading-relaxed mb-10 px-4">
                    "El mejor regalo que nos puedes dar es tu presencia, pero si deseas tener un detalle con nosotros, puedes hacerlo de la siguiente manera."
                </p>

                {/* Sección Liverpool */}
                <div className="flex flex-col items-center mb-10">
                    <h3 className="text-3xl font-great-vibes text-[#4a4a4a] mb-1">Liverpool</h3>
                    <p className="font-sans text-[11px] tracking-[0.3em] text-[#b6a89a] uppercase mb-6">Evento: 51675013</p>
                    
                    <a 
                        href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51675013' 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="inline-block border border-[#555] text-[#555] hover:bg-[#555] hover:text-white transition-colors duration-300 font-sans text-[10px] tracking-[0.3em] uppercase px-8 py-3 rounded-sm mb-4"
                    >
                        Ver Mesa de Regalos
                    </a>
                </div>

                {/* Opcional: Separador visual */}
                <div className="w-16 h-[1px] bg-[#b6a89a]/30 mb-10"></div>

                {/* Sección Transferencia / Tarjeta */}
                <div className="flex flex-col items-center">
                    <p className="font-sans text-[10px] tracking-[0.2em] text-[#888] uppercase mb-4 text-center">
                        Si prefieres realizar una transferencia:
                    </p>
                    <button 
                        onClick={handleClick}
                        className="group flex flex-col items-center gap-2 focus:outline-none"
                    >
                        <span className="text-xl font-sans tracking-widest text-[#555] group-hover:text-[#b6a89a] transition-colors">
                            4152 3138 6438 3943
                        </span>
                        <span className="text-[9px] font-sans tracking-[0.1em] text-[#b6a89a] uppercase opacity-70">
                            Clic para copiar número de tarjeta
                        </span>
                    </button>
                </div>

                {/* Detalle decorativo final */}
                <div className="mt-12 flex items-center gap-2 opacity-30">
                    <div className="w-8 h-[1px] bg-[#b6a89a]"></div>
                    <div className="w-1 h-1 rounded-full bg-[#b6a89a]"></div>
                    <div className="w-8 h-[1px] bg-[#b6a89a]"></div>
                </div>
            </div>
        </section>
    );
}

export default Ayuda;