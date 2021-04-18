import Button from '../components/Button';
import Icons from '../components/Icons';

export default function About() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center sm:w-96 lg:w-1/2'>
      <h1 className="text-gray-50 font-inter font-normal text-xl text-center leading-7 px-3">I'm Raphael but you can call me Ravi.</h1>
      <h1 className="text-gray-50 font-inter font-normal text-xl text-center leading-7 mt-2 px-3">I love making and learning things, especially those that can change people's lives.</h1>
        <Button/>
        <Icons/>
    </div>
  )
}
