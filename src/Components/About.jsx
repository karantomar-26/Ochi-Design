import React from 'react'

function About() {
    
  return (
    <div className='w-full font-["Neue_Montreal"] h-screen rounded-t-[1.5vw]  bg-[#CDEA68]'>
        <div className='text-[#212121] text-[3.5vw] tracking-[0.3] pb-[4.5vw] leading-none pt-[6.5vw] px-[3.2vw]'>
            <h1>Ochi is a strategic partner for fast-grow­ing tech <br/> businesses that need to 
            <span className='animate-shadow' style={{boxShadow: '0 2px 0 #212121'}}> raise funds</span >,
            <span style={{boxShadow: '0 2px 0 #212121'}}> sell prod­ucts</span >,<br/> 
            <span style={{boxShadow: '0 2px 0 #212121'}}> ex­plain com­plex ideas</span>, and 
            <span style={{boxShadow: '0 2px 0 #212121'}}> hire great peo­ple</span>.</h1>
        </div>
        <div className='border-b-[0.1vw] border-black opacity-20'></div>
        <div className='flex items-center justify-between text-[1.15vw]'>
          <div className='ml-[3.8vw] -mt-[13.5vw]'><h1>What you can expect:</h1></div>
          <div className='collective-2 flex'>
          <div className='mr-[35vw]' >
            <p className='-mr-[5vw] mt-3 relative'>
            We create tailored presentations to help <br /> you persuade your colleagues, clients, or <br />investors. Whether it’s live or digital,<br /> delivered for one or a hundred people.
            <br />
            <br />
            We believe the mix of strategy and <br />design (with a bit of coffee) is what <br />makes your message clear, convincing,<br /> and captivating.
            </p>
          </div>
          <div className='mr-[12.5vw] -ml-[15.5vw] mt-[6vw] '>
            <p>
              S:
              <br/>
              <br />
              {['Instagram','Behance','Facebook','LinkedIn'].map((item, index)=>(
                <span style={{boxShadow: '0 2px 0 #212121'}} >{item}<br/></span>
              ))}
            </p>
          </div>
          </div>
        </div>
        <div className='border-b-[0.1vw] mt-[7vw] border-black opacity-20'></div>
        
    </div>
  )
}

export default About