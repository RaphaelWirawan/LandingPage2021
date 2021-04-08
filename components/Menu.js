import Link from 'next/link';
import React from 'react';

export default function Drawer() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const handleBurger = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
      <>
      <img onClick={handleBurger} className='h-5 fixed right-0 top-0 m-5' src='/hamburger.png'/>

        <div
          className={
            "bg-red-500 fixed left-0 top-0 w-full h-full " +
            (isMenuOpen ? "" : "hidden")
          }
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={
            "pointer-events-none text-black fixed left-0 top-0 w-full h-full " +
            (isMenuOpen ? "" : "hidden")
          }
        >
          <div className="bg-white m-32 pointer-events-auto">
            <h1 className="text-8xl font-bold">I'm a menu!</h1>
          </div>
        </div>
      </>
  )
}