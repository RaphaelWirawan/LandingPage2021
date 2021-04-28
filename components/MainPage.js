
export default function MainPage() {
    return (
        <>
    <div className='flex flex-col justify-center items-center w-3/4 h-screen'>
        <div className="flex flex-col justify-center items-center flex-1 h-3/4 -mb-16">
         <p className='text-white font-roboto font-normal text-xl opacity-40 mb-3'>hi there, i'm</p> 
         <h1 className="text-whiteWhite font-roboto font-extrabold text-8xl tracking-widest">RAVI</h1>
         <p className='text-white font-roboto font-normal text-xl opacity-40 mt-4'>and i'm a hobbyist developer</p>
        </div>
         <svg class="animate-bounce w-7 text-gray-500 pb-10" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
         </svg>
    </div>
    </>
    )
}
