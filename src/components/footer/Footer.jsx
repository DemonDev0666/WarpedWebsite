import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import "../footer/Footer.css"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer id='contact' className="relative z-[99] bg-Purple1 text-Gray2 border-t-[1px] border-t-Gray2">
        <nav className="flex items-center py-4">
         <a href='https://www.youtube.com/@WarpedStudiosMC'><FaYoutube className="text-5xl text-Red" /></a>
         <a href='https://twitter.com/WarpedStudiosMC'><FaXTwitter className='text-5xl text-black'/></a>
         <p>©️ 2024 All Rights Reserved,"Minecraft" is a trademark of Mojang AB. Warped Studios is not Affiliated in any way with "Minecraft" or Mojang AB</p>
        </nav>
    </footer>
  )
}

export default Footer