import React from 'react'
import Border from './Border'
import Card from './Card'


const Featured = () =>{
 
    const cardstitle = [
        {
            title:"FYDE",
            Url:"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
        },
        {
            title:"VISE",
            Url:"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
        },
        {
            title:"TRAWA",
            Url:"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
        },
        {
            title:"PREMIUM BLEND",
            Url:"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
        },
    ]; 

    const cards = cardstitle.map((item, index) => <Card title={item.title} link={item.Url} key={index} />);

  return (

    <div className='w-full h-full '>
        <h1 className='px-[4.7vw] py-[7vw] text-[3.5vw] -mb-[5vw] font-["Neue_Montreal"]'>Featured Projects</h1>
        <Border/>
        <div className='flex justify-center'>
            <div className='mx-3 mt-12 w-[90vw] grid sm:grid-cols-2 sm:grid-rows-2'>
            {cards}
            </div>
        </div>
    </div>
  )
}

export default Featured