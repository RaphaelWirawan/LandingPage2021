import MainPage from '../components/MainPage'
import About from '../components/About' 
import Drawer from '../components/Menu'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-offBlack min-h-screen flex flex-col justify-center items-center'>
     <Drawer/>
     <MainPage/>
     <About/>
    </div>
  )
}
