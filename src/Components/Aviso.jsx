import React from 'react'

function Aviso() {
    return (
        <div id="aviso" className='flex flex-col items-center justify-center w-full min-h-[100vh]'>

            <div className='w-3/5 max-[768px]:w-4/5 flex flex-col items-center justify-center h-full bg-slate-200/60 rounded-lg p-6'>

                <p className='text-3xl font-great-vibes font-bold max-[768px]:w-4/5 mb-3 text-center'>Código de Vestimenta</p>
                
                <p id='aviso_text' className='text-lg text-[#333] font-sans text-left max-[768px]:pl-2 max-[768px]:pr-2'>
                    Para asegurarnos de hacer distinción a la quinceañera,
                    les pedimos amablemente que eviten usar el color dorado y/o amarillo en sus atuendos.
                    <br></br>Agradecemos su comprensión y apoyo, ¡estamos seguros de que todos lucirán espectaculares!
                </p>

                <h1 className='text-2xl text-[#333] font-great-vibes font-bold pt-8 max-[768px]:text-center'>Padres de Karla Díaz</h1>

            </div>

        </div>
    )
}

export default Aviso