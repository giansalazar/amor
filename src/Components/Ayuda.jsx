import React from 'react'

function Ayuda() {

    const handleClick = () =>{
        navigator.clipboard.writeText("4152 3138 6438 3943")
        alert('Has copiado el número de tarjeta con éxito')
    }
    return (
        <div id="ayuda" className='flex flex-col items-center justify-center w-full min-h-[100vh]'>

            <div className='w-2/5 max-[768px]:w-4/5 flex flex-col items-center justify-center h-full bg-slate-200/60 rounded-lg p-6'>

                <p className='text-2xl font-dancing-script text-[#333] font-light md:pl-20 md:pr-20 mb-3 text-center max-[768px]:pl-4 max-[768px]:pr-4'>
                    El mejor regalo que nos puedes dar es tu presencia, <strong>pero si deseas regalarnos algo puedes hacerlo de la siguiente manera.</strong>
                </p>

                <p className='font-dancing-script text-2xl text-white'>Mesa de Regalos</p>
                <p className='font-dancing-script text-xl text-white'>Evento 12345678</p>
                <a href='https://liverpool.com.mx' target='_blank' className='font-serif text-sm underline w-3/5 mt-2'><img src="/liverpool-logo.svg" alt="mesa de regalos Liverpool" /></a>

                <h1 className='text-xl text-[#333] font-great-vibes font-bold pt-8 max-[768px]:text-center'>Daniela & Miguel</h1>

            </div>

        </div>
    )
}

export default Ayuda