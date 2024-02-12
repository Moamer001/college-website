import OurTargetIMG from "../assets/OurTarget.svg"


const OurTarget = () => {
    return (
        <section className='md:px-12 p-4 max-w-screen-2xl w-auto h-auto' id="OurTarget" >
            <div className='bg-gradient-to-t from-gray-300 via-blue-200 to-blue-100 rounded-xl rounded-bl-[80px] md:p-9 px-4 py-9  '>
                <div className='flex flex-col md:flex-row-reverse  justify-between items-center gap-10'>
                    <div>
                        <img src={OurTargetIMG} alt="OurTargetIMG" className="w-52 md:w-[300px]" />
                    </div>
                    <div className='md:w-3/5 '>
                        <div className="text-gradient">
                            <h2 className="md:text-4xl text-3xl font-bold mb-6 leading-relaxed"> أهدافنا </h2>
                        </div>
                        <ul className="text-[#a1a0a0] text-base md:text-2xl mb-8 list-disc pr-6">
                            <p className="pb-3">التميز في التعليم والبحث العلمي وخدمة المجتمع

                                من خلال:

                            </p>
                            <li className=" ">برامج تعليمية متميزة تواكب أحدث التطورات العالمية.
                            </li>
                            <li>خريجون يتمتعون بالمهارات والمعارف اللازمة لقيادة مسيرة التطور التكنولوجي.
                            </li>
                            <li>دعم البحث العلمي وتشجيع الابتكار.
                            </li>
                            <li>خدمات استشارية وتدريبية للمؤسسات المختلفة.
                            </li>
                            <li>فعاليات علمية وثقافية لتعزيز الوعي بأهمية تقنية المعلومات.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTarget