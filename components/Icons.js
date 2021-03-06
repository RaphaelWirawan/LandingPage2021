export default function Icons() {
    return (
        <div className="flex flex-col justify-between items-center w-4/5 h-52 mt-16 container">
         <div style={{filter:"invert(95%)"}} className="flex flex-row justify-around items-center w-full">
            <img className="w-10" src="/js.svg" alt="html"/>
            <img className="w-10" src="/python.svg" alt="html"/>
            <img className="w-10 transform rotate-90" src="/react.svg" alt="html"/>
            <img className="w-10" src="/next.svg" alt="html"/>
         </div>
         <div style={{filter:"invert(95%)"}} className="flex flex-row justify-around items-center w-full container">
            <img className="w-10" src="/premier.svg" alt="html"/>
            <img className="w-10" src="/photoshop.svg" alt="html"/>
            <img className="w-10" src="/lightroom.svg" alt="html"/>
            <img className="w-10" src="/davinci.svg" alt="html"/>
         </div>
         <h1 className="text-base text-gray-500 font-inter font-medium text-center">i've worked with these tools.</h1>
        </div>
    )
}
