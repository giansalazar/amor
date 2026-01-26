import React from 'react';

function Mensaje() {
    // Patrón geométrico de líneas finas (Estilo seda bordada)
    const geometricPattern = {
        backgroundColor: '#ffffff',
        backgroundImage: `
            linear-gradient(30deg, #f4f1ee 12%, transparent 12.5%, transparent 87%, #f4f1ee 87.5%, #f4f1ee),
            linear-gradient(150deg, #f4f1ee 12%, transparent 12.5%, transparent 87%, #f4f1ee 87.5%, #f4f1ee),
            linear-gradient(30deg, #f4f1ee 12%, transparent 12.5%, transparent 87%, #f4f1ee 87.5%, #f4f1ee),
            linear-gradient(150deg, #f4f1ee 12%, transparent 12.5%, transparent 87%, #f4f1ee 87.5%, #f4f1ee),
            linear-gradient(60deg, #f4f1ee 25%, transparent 25.5%, transparent 75%, #f4f1ee 75.5%, #f4f1ee),
            linear-gradient(60deg, #f4f1ee 25%, transparent 25.5%, transparent 75%, #f4f1ee 75.5%, #f4f1ee)
        `,
        backgroundSize: '40px 70px',
        backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px',
        opacity: '0.5'
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-[#fdfbf9] overflow-hidden">
            {/* Capa de fondo con patrón geométrico */}
            <div className="absolute inset-0 pointer-events-none" style={geometricPattern}></div>

            {/* Contenedor tipo Pergamino Moderno */}
            <div className="z-10 w-[85%] max-w-4xl bg-white/90 backdrop-blur-sm p-10 md:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.05)] border-x border-[#b6a89a]/20 flex flex-col items-center text-[#555]">
                
                {/* Título con línea decorativa lateral */}
                <div className="flex items-center gap-4 mb-16">
                    <div className="hidden md:block h-[1px] w-12 bg-[#b6a89a]/40"></div>
                    <h2 className="text-4xl md:text-5xl font-great-vibes text-center text-[#4a4a4a]">
                        Con la bendición de nuestros padres
                    </h2>
                    <div className="hidden md:block h-[1px] w-12 bg-[#b6a89a]/40"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full relative">
                    {/* Divisor vertical sutil para escritorio */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#b6a89a]/20 to-transparent"></div>

                    {/* Sección Novia */}
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-[#b6a89a] font-semibold">
                            Padres de Karla
                        </span>
                        <div className="text-2xl md:text-3xl font-great-vibes leading-loose text-center">
                            María Pérez Rosas <br />
                            José Alfredo López Rocha
                        </div>
                    </div>

                    {/* Sección Novio */}
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-[#b6a89a] font-semibold">
                            Padres de Luis
                        </span>
                        <div className="text-2xl md:text-3xl font-great-vibes leading-loose text-center">
                            Rosa Isela Jasso Castillo <br />
                            Luis Ernesto Castro Ríos
                        </div>
                    </div>
                </div>

                {/* Separador final minimalista */}
                <div className="mt-20 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#b6a89a]/40"></div>
                    <div className="w-16 h-[1px] bg-[#b6a89a]/20"></div>
                    <div className="w-1 h-1 rounded-full bg-[#b6a89a]/40"></div>
                </div>
            </div>
        </div>
    );
}

export default Mensaje;