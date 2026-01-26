import React from 'react'

function Ceremonia() {
    return (
        <>

            <div id="ceremonia" className='flex flex-row max-[768px]:flex-col items-center justify-center max-[768px]:justify-start w-full min-h-[100vh]'>

                <div className='flex flex-col max-[768px]:pt-16 items-center max-[768px]:justify-start justify-center max-[768px]:w-full w-1/2 h-full'>

                    <p className='text-2xl max-[768px]:mb-4 font-dancing-script font-bold text-center w-4/5 mb-4'>""Con la bendición Dios, de mis padres y el amor de mi familia, hoy celebro con gratitud este momento tan especial. "</p>

                    <p className='text-2xl max-[768px]:text-xl font-dancing-script text-center mt-2'>Iraís Rodríguez Hernández</p>
                    <p className='text-2xl max-[768px]:text-xl font-dancing-script text-center mb-4'>Arnulfo Moreno García</p>

                    <p className='text-2xl max-[768px]:text-xl font-dancing-script text-center'>María de Jésus Sánchez Medrano</p>
                    <p className='text-2xl max-[768px]:text-xl font-dancing-script text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ribbon-health inline-block" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 21s9.286 -9.841 9.286 -13.841a3.864 3.864 0 0 0 -1.182 -3.008a4.13 4.13 0 0 0 -3.104 -1.144a4.13 4.13 0 0 0 -3.104 1.143a3.864 3.864 0 0 0 -1.182 3.01c0 4 9.286 13.84 9.286 13.84"></path>
                        </svg> Rogelio Núñez Ogata</p>

                    <p className='text-2xl max-[768px]:w-4/5 font-dancing-script font-light text-center pt-8'>Katia y Rogelio</p>

                    <p className='text-2xl max-[768px]:w-4/5 font-dancing-script font-light text-center pt-2'>Tenemos el honor de invitarles a celebrar nuestro matrimonio</p>

                    <img className='w-[250px] max-[768px]:w-[230px] rounded-lg pb-4 max-[768px]:pt-4' src="/anillo.jpg" alt="Iglesia de Santa Elena, Rioverde, S.L.P." />


                </div>



            </div>

        </>
    )
}

export default Ceremonia