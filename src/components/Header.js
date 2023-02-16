import React from 'react'
import { Logo } from './icons/logo';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-[61px]'>
        <Logo />
        <div className='font-poppins font-semibold text-xl text-dark-1 capitalize flex items-center gap-20'>
            <select name="" id="" className='capitalize outline-none'>
                <option value="">language</option>
                <option value="english">english</option>
                <option value="portuguese">portuguese</option>
            </select>
            <Link className='capitalize' to="/create-account">sign up</Link>
        </div>
    </div>
  )
}
