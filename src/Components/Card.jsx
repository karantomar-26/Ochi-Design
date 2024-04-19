import React from 'react'

const Card=(props)=> {
    
  return (
    <div className='h-[50vw] mx-2.5 -mb-[100px]'>
      <div className=' w-full  h-full'>
        <ul><li>{props.title}</li></ul>
        <div className=' h-[74%] rounded-xl - overflow-hidden object-fill'>
            <img className= "w-full h-full bg-cover" src={props.link} alt="" />
        </div>
      </div>
    </div>    
  )
}

export default Card