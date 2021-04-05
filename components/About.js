import LeftLP from './LeftLP';

export default function About() {
  return (
    <div className='min-h-screen flex justify-center items-center h-screen '>
     <div className='flex flex-row justify-around items-center w-3/4 h-5/6'>
      <LeftLP/>
      <img style={{ filter: "grayscale(45%)" }} className="h-3/4 shadow-md" src="/ravi1.jpg"/>
     </div>
    </div>
  )
}
