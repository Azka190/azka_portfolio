import React from 'react'
import {RiLightbulbFlashLine} from 'react-icons/ri'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
function WhatIDo() {
  return (
    <div className='container mx-auto py-10 px-4'>
         <div className='headingstyle'>
            <h1>Course</h1>
            <div className='bg-[#ff4d41] h-[2px] w-[30px] mt-6 trans-y-1'></div>
        </div>
        
        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
            
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <AiFillHtml5 className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 1(HTML)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div> Basic intoduction
                   <br />
                   <div className='text-2xl'>Day2:</div> Heading, Paragraphs,<br />
                    style, formatting<br />
                    <div className='text-2xl'>Day3:</div> Colors, Comments, Link<br />
                    <div className='text-2xl'>Day4:</div> Table,list, Forms<br />
                </pre>
            </div>
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <DiCss3 className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 2(CSS)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div>Basic intoduction<br />
                   <div className='text-2xl'>Day2:</div>Classes/ids, Colors <br />
                    <div className='text-2xl'>Day3:</div> Background, Border <br />
                    <div className='text-2xl'>Day4:</div> Assigment<br />
                </pre>  
            </div>
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <DiCss3 className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 3(CSS)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div>Margin, Padding Height, Width
                   <br />
                   <div className='text-2xl'>Day2:</div> Text, Fonts, Icons,Links<br />
                    <div className='text-2xl'>Day3:</div> List,Table,Image<br />
                    <div className='text-2xl'>Day4:</div> Assigment <br />
                </pre>            </div>
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <DiJavascript className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 4(Javascript)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div> Basic intoduction
                   <br />
                   <div className='text-2xl'>Day2:</div>Output, functions <br />
                    <div className='text-2xl'>Day3:</div> Variable, Operator, Datatypes<br />
                    <div className='text-2xl'>Day4:</div> Methods(Number,String),Array<br />
                </pre>            </div>
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <DiJavascript className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 5(Javascript)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div> Statments
                   <br />
                   <div className='text-2xl'>Day2:</div> Loops<br />
                    style, formatting<br />
                    <div className='text-2xl'>Day3:</div>CallBack Functions, Promises<br />
                    <div className='text-2xl'>Day4:</div> Assigment<br />
                </pre>            </div>
            <div className='shadow-lg w-full  gap-4 px-8 py-10 bg-[#ff4d41] text-white'>
                <TbBrandNextjs className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 6(Next.js)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div>Installation
                   <br />
                   <div className='text-2xl'>Day2:</div> Routing<br />
                    <div className='text-2xl'>Day3:</div> Optimazing<br />
                    <div className='text-2xl'>Day4:</div> Start Tailwind<br />
                </pre>            </div>
            <div className='shadow-lg  gap-4 px-8 py-10 bg-[#ff4d41] text-white w-full '>
                <SiTailwindcss className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 7(Tailwind)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div> Start Project 
                   <br />
                   <div className='text-2xl'>Day2:</div>Box<br />
                    <div className='text-2xl'>Day3:</div>Flex<br />
                    <div className='text-2xl'>Day4:</div>Grid<br />
                </pre>      
            </div>
            <div className='shadow-lg  gap-4 px-8 py-10 bg-[#ff4d41] text-white w-full '>
                <RiLightbulbFlashLine className="text-[28px]" />
                <h2 className='font-medium text-[20px]'>
                   Week 8(Projects)
                </h2>
                <pre>
                    <div className='text-2xl'>Day1:</div>NavBar
                   <br />
                   <div className='text-2xl'>Day2:</div>Footer<br />
                    <div className='text-2xl'>Day3:</div>Main Page<br />
                    <div className='text-2xl'>Day4:</div>Complete Project<br />
                </pre>            </div>
        </div>
        
    </div>
  )
}

export default WhatIDo