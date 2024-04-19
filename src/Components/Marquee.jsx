import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  

  return (
    <div className='w-full h-[65%] py-8 overflow-hidden rounded-t-[1.5vw] bg-[#004D43]'>
        <div className='my-[80px] border-t-2 border-slate-400 '>
            <div className='mar-text font-["Founders_Grotesk_X_Semibold"] h-[18vw] border-b-2  border-slate-400 text-[27vw] uppercase text-white flex whitespace-nowrap leading-none mt-[1vw]'>
                <motion.h1 initial={{ x: 0}}
              animate={{ x: "-100%"}}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className='pr-8'>we are ochi </motion.h1>
              <motion.h1 initial={{ x: 0}}
              animate={{ x: "-100%"}}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className='pr-8'>we are ochi </motion.h1>
                <motion.h1 animate={{ x: "-100%"}}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>we are ochi </motion.h1></div>
        </div>
    </div>
  )
}

export default Marquee