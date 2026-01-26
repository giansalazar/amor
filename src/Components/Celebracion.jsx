import React from 'react'

function Celebracion() {
    return (
        <>

            <div id="celebracion" className='flex flex-row max-[768px]:flex-col items-center justify-center max-[768px]:justify-start w-full min-h-[40vh]'>

                <div className='flex flex-col max-[768px]:pt-12 items-center max-[768px]:justify-start justify-center max-[768px]:w-full w-1/2 h-full'>

                    <img className='w-[3rem] max-[768px]:w-[4rem] rounded-lg pb-4 max-[768px]:pb-4' src="/regalos.png" alt="Iglesia de Santa Elena, Rioverde, S.L.P." />

                    <p className='text-4xl text-[#3818a1] font-great-vibes font-bold max-[768px]:w-4/5 pb-4 pt-4 text-center'>Regalos</p>
                    <p className='text-3xl text-[#3818a1] font-great-vibes max-[768px]:w-4/5 mb-3 text-center pt-2'>
                        En caso de desear obsequiarme algo, y no estar seguro de que elegir, puedes darme la oportunidad de elegir mi regalo.
                    </p>

                </div>

            </div>

        </>
    )
}

export default Celebracion