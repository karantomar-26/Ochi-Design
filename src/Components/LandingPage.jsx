import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function LandingPage() {
  return (
    <div className='w-full h-screen overflow-hidden landing-page-container'>
        <div className="textstructure px-16  mt-[22vh] text-[9vw]">
            {["We create","Eye Opening","Presentations"].map((item,index)=> {
                return <div className='masker '>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index===1 && (<div className='w-[8.5vw] h-[5.5vw]  rounded-md mr-3  relative -top-[0.5vw]'></div>)}
                        <h1 className='pt-[1.5vw] -mb-[1.8vw] uppercase flex items-center font-extralight  text-[9vw] leading-[.75] tracking-normal font-["Founders_Grotesk_X_Semibold"]'>{item}</h1>
                    </div>
                </div>
            })}
        </div>
        <div className='border-t-[1px] font-["Neue_Montreal"] border-slate-400 text-[1.1vw] mt-[7vw] flex justify-between items-center px-14 py-4 tracking-wide'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=> (
                <div className='additionalinfo'>
                    <a key={item} className={(index===1 ? 'ml-52' : '')}>{item}</a>
                </div>
            ))}
            <div className='start flex items-center'>
                <a className='border-2 border-slate-600 rounded-full text-[1vw] uppercase tracking-tight px-3 py-1'>Start the Projects</a>
                <div className='w-[2.1vw] ml-1 h-[2.1vw] border-2  border-slate-600 rounded-full'>
                 <GoArrowUpRight className='fill current fill current w-[1.5vw] pl-[2.7px] pt-[4.5px] h-[1.5vw]'/>
                </div>
            </div>
        </div>
    </div>
)}

export default LandingPage