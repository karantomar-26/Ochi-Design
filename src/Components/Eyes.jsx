import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove',(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let delX= mouseX-window.innerWidth/2;
            let delY= mouseY-window.innerHeight/2;

            let angle = Math.atan2(delY,delX)*(180/Math.PI);
            setRotate(angle-180);
            
        })
    })

    return (
        <div className='main relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
                <div className='eyes-cover flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <div className='retina h-[14vw] flex justify-center items-center w-[14vw] rounded-full bg-white'>
                        <div className='iris relative h-3/5  w-3/5 rounded-full  bg-black'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line rotate-12
                             absolute w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5'>
                                <div className='white-drop w-5 h-5 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='retina h-[14vw] flex  justify-center items-center w-[14vw] rounded-full bg-white'>
                        <div className='iris relative h-3/5  w-3/5 rounded-full  bg-black'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className='line absolute w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-5'> 
                            <div className='white-drop w-5 h-5 rounded-full bg-white'></div></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Eyes