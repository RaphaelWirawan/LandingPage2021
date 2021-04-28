import Button from '../components/Button';
import Icons from '../components/Icons';
import ScrollAnimation from 'react-animate-on-scroll'

export default function About() {
  return (
    
    <div className='min-h-screen flex flex-col justify-center items-center sm:w-96 md:w-1/2 lg:w-1/2 xl:w-1/3 pb-28 mt-24'>
    <ScrollAnimation animateIn='fadeIn offset duration' animateOut='fadeOut duration'>
      <h1 className="text-gray-50 font-inter font-normal text-xl text-center leading-7 px-3">I'm Raphael but you can call me Ravi.</h1>
      </ScrollAnimation>
      <h1 className="text-gray-50 font-inter font-normal text-xl text-center leading-7 mt-2 px-3">I love making and learning things, especially those that can change people's lives.</h1>
        <Button>About Me &rarr;</Button>
        <Icons/>
      <h1 className="text-gray-50 font-inter font-semibold text-xl text-center leading-7 mt-10 px-3">So how can I help you?</h1>
      <h1 className="text-gray-400 font-inter font-normal text-lg text-center leading-7 mt-4 px-3">I'm currently a web developer using ReactJS as my main tool, though I want to learn lots more than that. I can help in other positions as well, as I'm experienced in other areas such as video editing.</h1>
      <Button>Contact Me</Button>
      
    </div>
  )
}
