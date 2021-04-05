import MainPage from '../components/MainPage'
import About from '../components/About' 
import Drawer from '../components/Menu'
import React from 'react'

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [x, setX] = React.useState(0)

  const drawerSwitch = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <div className='bg-offBlack min-h-screen flex flex-col justify-center items-center'>
      <Drawer active={drawerOpen} drawerSwitch={drawerSwitch}/>
     <MainPage/>
     <About/>
    </div>
  )
}
