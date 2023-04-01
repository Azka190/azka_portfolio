import React from 'react'

function Contactme() {
  return (
    <div className='container mx-auto py-10 px-4'>
         <div className='headingstyle'>
            <h1>Contact Me</h1>
            <div className='bg-[#ff4d41] h-[2px] w-[30px] mt-6 trans-y-1'></div>
        </div>
        <form className='flex flex-col gap-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <input type='text' placeholder='Name' className='inputstyle' required></input>
            <input type='email' placeholder='email' className='inputstyle' required></input>
            </div>

            <input type='text' placeholder='Subject' className='inputstyle' required></input>
            <textarea type='text'  placeholder='Message' rows={6} className='inputstyle' required></textarea>
            <div>
                <button className='border border-[#ff4d41] px-1 py-2 mb-4 text-[#ff4d41] rounded-[4px] items-center
                hover:bg-[#ff4d41] hover:text-white transition duration-200 ' type='submit'> SEND MESSAGE</button>
            </div>
        </form>
    </div>
  )
}

export default Contactme