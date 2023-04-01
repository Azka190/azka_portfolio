import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TypeWriter from 'typewriter-effect'
import Aboutmain from './components/Aboutmain'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import Contactme from './components/Contactme'
import Footer from './components/Footer'
import Header from './components/Header'

function Aboutme() {
  return (
    <div>
      <Header />
      <div className='flex justify-center items-center'>
        <Image className='float-right p-10 mt-8 mr-6 m-7 rounded-full' src="/3.jpg"  alt='main' width="580" height="40"></Image>
        <div className='container mx-auto px-4'>
          <div className='max-w-[450px] text-white flex flex-col flex-center gap-40px'>
            <div>
              <h1 className='text-5xl'>I am Azka Rehman</h1>
              <h4 className='text-2xl mt-3'>
                <TypeWriter
                options={{
                  strings:[
                  "Frontend Developer",
                  "UI/UX Designer"
                  ],
                  changeDelay :3,
                  changeDeleteSpeed :2,
                  autoStart: true,
                  loop: true
                }} />
              </h4>
              <div className='bg-[#ff4d41] h-[2px] w-[49px] mt-3'></div>
              <div>
                <h4 className='p-1 text-2xl'>
                  This is my very first step toword my goal!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutmain />
      <WhatIDo />
      <Skills />
      <Contactme />
      <Footer />
  </div>
        )
}

export default Aboutme