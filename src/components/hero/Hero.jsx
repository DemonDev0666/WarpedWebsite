import React from 'react'
import heroImg from "../../assets/hero1.png"

const Hero = () => {
  return (
    <div className='h-[650px] md:h-[500px] bg-gradient-to-r from-Cyan2 to-Purple2 pt-20'>
        <section className='container flex flex-col items-center justify-between'>
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-Gray2">
         <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
            <h1 className="text-4xl">We make Addons, Maps, SkinPacks, and more for Minecraft Bedrock</h1>
            <p className="text-ellipsis">“There is no doubt that creativity is the most important human resource of all. Without creativity, there would be no progress, and we would be forever repeating the same patterns”- Edward de Bono (1992)</p>
          <div className="space-x-4">
            <button className='btn-primary'>About The Team</button>
            <button className='btn-outline'>Coming Soon? 👀</button>
          </div>
         </div>
         <div className='mx-auto max-w-xs p-4 '>
            <img src={heroImg} alt="Banner Image" className='' />
         </div>
         </div>
        </section>
    </div>
  )
}

export default Hero