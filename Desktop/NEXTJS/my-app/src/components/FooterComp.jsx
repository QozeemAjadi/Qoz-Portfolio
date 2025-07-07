import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./common/icon"

const FooterComp = () => {
  return (
    <footer className='w-ful h-[182px] flex items-center justify-center'>
       <div className='flex flex-col w-[210px] gap-4 items-center'>
        <div className=' flex items-center justify-between w-full'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
         <small className=''>Copyright 2025 All rights reserved</small>
       </div>
    </footer>
  )
}

export default FooterComp
