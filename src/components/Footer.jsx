import { FaFacebook, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { NAV_ITEM } from "../damyData";
const Footer = () => {
    const now = Date.now()
    const year = new Date(now).getFullYear()
    return (
        <section className="">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2 ">
                    {NAV_ITEM.map((item, id) => (
                        <div key={id} className="px-5 py-2">
                            <a
                                href={item.link}
                                className="text-base leading-6 text-gray-500 hover:text-gray-900"
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </nav> */}
                <div className="flex justify-center mt-8 gap-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        {<FaFacebook className="w-6 h-6" />}
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Telegram</span>
                        {<FaTelegram className="w-6 h-6" />}
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Whatsapp</span>
                        {<FaWhatsapp className="w-6 h-6" />}
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        {<FaGithub className="w-6 h-6" />}
                    </a>

                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    كلية تقنية المعلومات-جامعة الزيتونة.  © {year}
                </p>
            </div>
        </section>
    );
};

export default Footer;
