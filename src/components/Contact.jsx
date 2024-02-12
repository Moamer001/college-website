import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm("service_09r73wx", "template_9h3buzl", formRef.current, {
        publicKey: "V-nQGkFr1D8p_ENFy",
      })
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className=" md:px-12 p-4 h-screen max-w-[1366px] flex flex-col md:flex-row  sm:items-center justify-center md:gap-12 gap-3"
      variants={variants}
      initial="initial"
      whileInView="animate"
      id="contactUs"
    >
      <motion.div
        className="flex-1 flex flex-col md:gap-5 gap-2 items-start justify-center "
        variants={variants}
      >
        <div className="text-gradient mb-2">
          <motion.h1 variants={variants} className="sm:text-6xl text-3xl ">
            تواصل معنا
          </motion.h1>
        </div>

        <motion.div variants={variants}>
          <h2 className="font-bold">البريد الالكنروني</h2>
          <span className="font-light">it@gmail.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="font-bold">العنوان</h2>
          <span className="font-light">ترهونة, ليبيا</span>
        </motion.div>
        <motion.div variants={variants}>
          <h2 className="font-bold">هاتف</h2>
          <span className="font-light">+218 92xxxxxxx</span>
        </motion.div>
      </motion.div>
      <div className="flex-1 sm:w-full ">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-[80%]  mx-auto"
        >
          <input
            className=" w-full p-2 sm:p-5 bg-transparent border-[1px] border-solid border-white text-[#a1a0a0] rounded-md focus:outline-none"
            type="text"
            required
            placeholder="الاسم الثلاثي"
            name="name"
          />
          <input
            className="p-2 sm:p-5 bg-transparent border-[1px] border-solid border-white text-[#a1a0a0] rounded-md focus:outline-none"
            type="email"
            required
            placeholder="البريد الالكتروني"
            name="email"
          />
          <textarea
            className="p-2 sm:p-5 bg-transparent border-[1px] border-solid border-white text-[#a1a0a0] rounded-md focus:outline-none"
            rows={8}
            placeholder="الرسالة"
            name="message"
          />

          <button className="p-2 sm:p-5 rounded-none bg-orange-300 cursor-pointer font-bold">
            إرسال
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              شكرا لتواصلك معنا
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              الرجاء ملاء جميع الحقول بشكل صحيح
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
