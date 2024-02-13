import HeroIMG from "../assets/HeroIMG.svg"
import { motion } from "framer-motion"
import '../index.css'

const textVariants = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
}

const Hero = () => {
    return (
        <div className='h-screen flex lg:flex-row-reverse flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ' id="main">
            {/* IMAGE CONTAINER */}
            <div className='h-1/2 lg:h-full lg:w-1/2 relative   flex justify-center items-center'>
                <img src={HeroIMG} alt="Logo Hero" className=' object-contain w-full h-full' />
            </div>

            {/* TEXT CONTAINER  */}
            <motion.div className='h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center  px-4' variants={textVariants} initial="initial" animate="animate">
                {/* TITLE  */}
                <motion.h1 className='text-gradient text-4xl md:text-5xl font-bold' variants={textVariants}>كلية تقنية المعلومات
                </motion.h1>
                {/* DESC  */}
                <motion.p className='md:text-xl' variants={textVariants}> كلية تقنية المعلومات هي إحدى كليات جامعة الزيتونة، تأسست عام 2017. تقع
                    الكلية في مدينة ترهونة، وتضم قسمين رئيسييين هما :هندسة البرمجيات وعلوم
                    الحاسب</motion.p>
                {/* BUTTONS  */}
                <motion.div className=' w-full flex gap-4 ' variants={textVariants}>
                    <motion.button className='p-4 rounded-lg ring-1 ring-black bg-black text-white ' variants={textVariants}>الانتساب للكليه </motion.button>
                    <motion.button className='p-4 rounded-lg ring-1 ring-black ' variants={textVariants}>تواصل معنا </motion.button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero