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
     <h1 className="text-gray-100 mb-7 font-medium">Made with &#127833; by Raphael</h1>
    </div>
  )
}
