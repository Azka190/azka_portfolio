'use client'
import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

function header() {
  const [navbar,setnavbar] = useState(false)
  return (
    <div>
             <nav className="hidden md:flex items-center justify-end flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image className="h-10 w-10 rounded-full" src="/1.png"  width={12} height={13} alt="Your Logo"></Image>
          <span className="font-semibold text-xl tracking-tight ml-2">Azka Rehman</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow flex justify-end">
          <Link href="/components/Aboutmain" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            About me
          </Link>
          <Link href="/components/WhatIDo"  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
           What I Do
          </Link>
          <Link href="/components/Skills" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
            Skill
          </Link>
          <Link href="/components/Contactme" className="block mt-4 ml-3 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Contact Me
          </Link>
        </div>
        <div>
          <Link href="/components/Contact">
          <button className="rounded rounded-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4">
            More info
          </button>
          </Link>
        </div>
      </div>
      </nav>
      <div className='flex md:hidden justify-around'>
          <h1>Azka Rehman</h1>
          <button onClick={()=>setnavbar(!navbar)}><GiHamburgerMenu/></button>
      </div>
      {navbar && (<div className='md:hidden flex flex-col text-white w-full bg-red-500 h-30 text-center'>
        <Link href="/components/Aboutmain" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            About me
          </Link>
          <Link href="/components/WhatIDo"  className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
           What I Do
          </Link>
          <Link href="/components/Skills" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-14">
            Skill
          </Link>
          <Link href="/components/Contactme" className="block mt-4 ml-3 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
            Contact Me
          </Link>
      </div>)}
    </div>
  )
}

export default header