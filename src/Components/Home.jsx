import React from 'react';

function Home({ onStart }) {
    return (
        <section className='home relative h-screen w-full flex flex-col items-center bg-cover bg-center overflow-hidden'>
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenedor Principal: Centrado total para evitar pérdidas en los bordes */}
            <div className="z-10 flex flex-col h-full w-full justify-center items-center px-6 text-center">

                {/* Título Superior */}
                <div className="mb-12">
                    <h1 className='text-5xl md:text-7xl font-great-vibes text-white font-bold drop-shadow-lg'>
                        Nuestra Boda
                    </h1>
                </div>

                {/* Nombres y Fecha */}
                <div className="flex flex-col items-center">
                    <p className='text-5xl md:text-7xl font-light text-white mb-4 drop-shadow-md'>
                        Karla & Luis
                    </p>
                    <p className='text-xl md:text-2xl font-great-vibes text-white opacity-90'>
                        Sábado 14 de Febrero de 2026
                    </p>
                </div>

                {/* Botón de Acción: Con margen controlado */}
                <div className="mt-16">
                    <button
                        onClick={onStart}
                        className="animate-pulse px-10 py-3 bg-white/10 backdrop-blur-md border border-white/50 text-white rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm shadow-xl"
                    >
                        Abrir Invitación
                    </button>
                </div>
            </div>

            {/* Indicador de scroll sutil (opcional) */}
            <div className="absolute bottom-6 z-10 animate-bounce opacity-50">
                <div className="w-[1px] h-12 bg-white"></div>
            </div>
        </section>
    );
}

export default Home;