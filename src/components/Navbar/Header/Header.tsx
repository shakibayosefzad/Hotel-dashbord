import React from 'react'
import Searchbox from "../Header/Searchbox/Searchbox"
import LangugeToggle from './LangugeToggle/LangugeToggle'
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'

function Header() {
  return (
    <div className='w-8/10 p-4 bg-white shadow-md'>
      <div className='flex justify-between'>

      <Searchbox />
      <div className='flex items-center'>
        <DarkModeToggle/>
      <LangugeToggle/>
      <ProfileAvatar src="/path-to-image.jpg" size="w-16 h-16" />
      </div>
      </div>
    </div>
  )
}

export default Header