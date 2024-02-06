import HeroIMG from "../assets/HeroIMG.svg"
import '../index.css'

const Departe = () => {
    return (
        <div className='h-full flex lg:flex-row-reverse flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 '>
            {/* IMAGE CONTAINER */}
            <div className='h-1/2 lg:h-full lg:w-1/2 relative   flex justify-center items-center'>
                <img src={HeroIMG} alt="Logo Hero" className=' object-contain w-full h-full' />
            </div>

            {/* TEXT CONTAINER  */}
            <div className='h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center  px-4'>
                {/* TITLE  */}
                <h1 className='text-gradient text-4xl md:text-5xl font-bold'>كلية تقنية المعلومات </h1>
                {/* DESC  */}
                <p className='md:text-xl'> كلية تقنية المعلومات هي إحدى كليات جامعة الزيتونة، تأسست عام 2017. تقع
                    الكلية في مدينة ترهونة، وتضم قسمين رئيسييين هما :هندسة البرمجيات وعلوم
                    الحاسب</p>
                {/* BUTTONS  */}
                <div className=' w-full flex gap-4 '>
                    <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white '>الانتساب للكليه </button>
                    <button className='p-4 rounded-lg ring-1 ring-black '>تواصل معنا </button>
                </div>
            </div>
        </div>
    )
}

export default Departe