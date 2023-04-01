import React from 'react'

function Skills() {
  return (
    <div className='container mx-auto py-10 px-4'>
        <div className='headingstyle'>
            <h1>Skills</h1>
            <div className='bg-[#ff4d41] h-[2px] w-[30px] mt-6 trans-y-1'></div>
        </div>
        <div className='text-grey-600 mb-10 '>
            {/* <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Praesentium alias nemo cumque temporibus! Aliquam quaerat praesentium
                itaque modi aliquid fugit recusandae consequatur ex
                Nobis autem fugiat vitae quidem aliquid consequatur?
            </p> */}
         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-15'>
            <div>
                <p>HTML</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[100%]'></div>
                </div>
            </div>
            <div>
                <p>CSS</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[100%]'></div>
                </div>
            </div>
            <div>
                <p>JAVASCRIPT</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>
            <div>
                <p>BootStrap</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[80%]'></div>
                </div>
            </div>
            <div>
                <p>TYPESCRIPT</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[75%]'></div>
                </div>
            </div>
            <div>
                <p>NEXT.Js</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[75%]'></div>
                </div>
            </div>
            <div>
                <p>TailWind CSS</p>
                <div className='relative bg-gray-400 h-[4px] w-[280px] mt-4'>
                    <div className='bg-[#ff4d41] absolute h-[4px] w-[75%]'></div>
                </div>
            </div>
           
         </div>    
        </div>
    </div>
  )
}

export default Skills