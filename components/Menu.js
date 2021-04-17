import Link from 'next/link';
import React from 'react';

export default function Drawer() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const handleBurger = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
      <>
      <img onClick={handleBurger} className='h-5 fixed right-0 top-0 m-5 z-10' src='/hamburger.png'/>
        <div
          className={
            "bg-black opacity-90 fixed left-0 top-0 w-full h-full items z-10 " +
            (isMenuOpen ? "" : "hidden")
          }
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={
            "pointer-events-none text-black fixed left-0 top-0 w-full h-full flex flex-column justify-center items-center z-10 " +
            (isMenuOpen ? "" : "hidden")
          }
        >
          <div className="pointer-events-auto h-4/5 w-1/2 flex flex-col mt-10">
            <div className="flex flex-col justify-center items-center mb-8 h-3/4 flex-1">
                <h1 className="menu-h1">Home</h1>
                <h1 className="menu-h1">About</h1>
                <h1 className="menu-h1">Blog</h1>
                <h1 className="menu-h1">Contact</h1>
            </div>
            <div className="flex flex-row justify-center items-center">
                <img className="w-8 mr-10" src="/insta.svg" alt="instagram"/>
                <img className="w-8 mr-10" src="/linkedin.svg" alt="linkedin"/>
                <img className="w-8" src="/git.svg" alt="git"/>
            </div>
          </div>
        </div>
      </>
  )
}