import React from 'react'

function MensajeDos() {
    return (
        <>

            <div id="mensaje" className='flex flex-col items-center justify-center w-full h-[40vh]'>

                <div className='w-3/5 max-[768px]:w-4/5 flex flex-col items-center justify-start h-full max-[768px]:pt-2'>

                    <h1 className='text-3xl text-[#3818a1] font-great-vibes font-bold max-[768px]:text-center mb-2'>Mis Padrinos</h1>

                    <p className='text-xl max-[768px]:text-[22px] text-[#3818a1] font-great-vibes font-light md:pl-32 md:pr-32 text-center max-[768px]:p-2'>
                        Iram de Jesús Escalante Verde <br />
                        César Quirino Rangel Arriaga
                    </p>

                    <h1 className='text-4xl text-[#3818a1] font-great-vibes max-[768px]:text-center pt-10 pb-8'>Dejo un mundo atrás y entro a uno nuevo</h1>



                </div>

            </div>

        </>
    )
}

export default MensajeDos