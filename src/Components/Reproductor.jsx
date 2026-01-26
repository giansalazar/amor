import React, { useRef, useEffect } from 'react';

function Reproductor() {
   
    return (
        <div style={{display: 'none'}} className="reproductor">
            <audio autoPlay>
                <source src="/reik.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
            </audio>

        </div>
    );
}

export default Reproductor;


