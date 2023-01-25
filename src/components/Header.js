import React from 'react'
import { Logo } from './icons/logo'

export default function Header() {
  return (
    <div className='w-full h-[67px] flex justify-between items-center px-[61px]'>
        <Logo />
        <div className='font-poppins font-semibold text-xl text-dark-1 capitalize flex items-center gap-20'>
            <select name="" id="" className='capitalize outline-none'>
                <option value="">language</option>
                <option value="english">english</option>
                <option value="portuguese">portuguese</option>
            </select>
            <button className='capitalize'>sign up</button>
        </div>
    </div>
  )
}
