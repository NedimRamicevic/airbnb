"use client"
import  Container  from '../Container'
import Logo from './Logo'
import Search from './Search'
import React from 'react'
import UserMenu from './UserMenu'

function Navbar() {
  return (
    <div className=' w-full shadow fixed z-10 bg-white'>
        <div className=' py-4 border-b-2'>
            <Container>
                <div className='
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                '>
                    <Logo />
                    <Search/>
                    <UserMenu/>
                </div>
            </Container>
        </div>
        </div>
  )
}

export default Navbar