import React from 'react'
import Image from 'next/image'
import {AiOutlineGift} from 'react-icons/ai'
import {FiBookOpen} from 'react-icons/fi'
import {TbPacman} from 'react-icons/tb'
import {IoLocationOutline} from 'react-icons/io5'

function Aboutmain() {
  return (
    <div>
        <section className='container mx-auto py-10 px-4'>
        <div className='headingstyle'>
            <h1>About Me</h1>
            <div className='bg-[#ff4d41] h-[2px] w-[30px] mt-6 trans-y-1'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
            <div>
                <Image className='w-[350px] ml-10' src="/3.jpg"  alt='main' width="680" height="40"></Image>
            </div>
            <div className='mr-15'>
                <div className='flex items-center justify-between w-[300px]'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-4 items-center font-medium'>
                            <AiOutlineGift className='text-[#ff4d41] text-[22px]'></AiOutlineGift>
                            Birthday
                            <div className='flex flex-col gap-6 text-grey-600'>:</div>
                            <div className='gap-6 text-grey-600'>08.02.2001</div>
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <FiBookOpen className='text-[#ff4d41] text-[22px]'></FiBookOpen>
                            Study
                            <div className='flex flex-col gap-6 text-grey-600'>:</div>
                            <div className='gap-6 text-grey-600'>Software Engineering</div>

                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <TbPacman className='text-[#ff4d41] text-[22px]'></TbPacman>
                            Interest
                            <div className='flex flex-col gap-6 text-grey-600'>:</div>
                            <div className='gap-6 text-grey-600'>Programming</div>
                        </div>
                        <div className='flex gap-4 items-center font-medium'>
                            <IoLocationOutline className='text-[#ff4d41] text-[22px]'></IoLocationOutline>
                            Location
                            <div className='flex flex-col gap-6 text-grey-600'>:</div>
                            <div className='gap-6 text-grey-600'>Dict. Chakwal</div>
                        </div>
                    </div>
                   
                </div>
                <div className='max-w-[800px]'>
                        <h2 className='font-bold mt-16 mb-6'> I am Azka Rehman!</h2>
                        <p className='text-grey-600'>
                        I am a skilled and passionate developer who is always exploring 
                        new technologies and pushing boundaries. I approach every project 
                        with an open mind and a willingness to learn, and I am committed 
                        to delivering innovative solutions that enhance the 
                        user experience. 
                        </p>
                    </div>
            </div>
        </div>

        </section>
    </div>
  )
}

export default Aboutmain