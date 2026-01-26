import React, { useState, useEffect } from 'react';

function CuentaRegresiva() {
    const calculateTimeLeft = () => {
        // Actualizado al 14 de febrero de 2026
        // He puesto las 18:00 (6:00 PM) como hora tentativa del evento
        const targetDate = new Date('2026-02-14T18:00:00');
        const now = new Date();
        const difference = targetDate - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Helper para añadir el cero a la izquierda (ej: 09 en lugar de 9)
    const formatNumber = (num) => num.toString().padStart(2, '0');

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="relative">
                {/* Número con tipografía elegante y un poco de tracking */}
                <span className="text-4xl md:text-5xl font-light font-sans text-[#555] tracking-tighter">
                    {formatNumber(value)}
                </span>
            </div>
            {/* Etiqueta pequeña, espaciada y sutil */}
            <span className="text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-[#999] mt-2 uppercase">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex items-start justify-center gap-6 md:gap-10 py-4">
            <TimeUnit value={timeLeft.days} label="Días" />

            {/* Separadores visuales sutiles (pueden ser puntos o líneas) */}
            <div className="pt-2 text-[#ccc] font-light text-2xl hidden md:block">:</div>

            <TimeUnit value={timeLeft.hours} label="Hrs" />

            <div className="pt-2 text-[#ccc] font-light text-2xl hidden md:block">:</div>

            <TimeUnit value={timeLeft.minutes} label="Min" />

            <div className="pt-2 text-[#ccc] font-light text-2xl hidden md:block">:</div>

            <TimeUnit value={timeLeft.seconds} label="Seg" />
        </div>
    );
}

export default CuentaRegresiva;