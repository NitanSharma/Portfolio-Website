import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#ffdd55] p-5 flex flex-col lg:flex-row lg:h-screen">
      <div className="lg:p-10 lg:w-1/2 gap">
        <h1 className="text-4xl font-bold mb-5 lg:text-6xl">Contact Me</h1> 
        <p className="text-xl font-semibold my-2 lg:text-4xl">Have a project in mind or want to connect? <br /> Feel free to reach out!</p>
        <div className="flex flex-col gap-2 my-4 lg:gap-4">
          <p className="text-lg lg:text-2xl flex items-center gap-2"><IoMdMail /> sharmanitan938@gmail.com</p>
          <p className="text-lg lg:text-2xl flex items-center gap-2"><IoCall />+91 7357911012</p>
          <p className="text-lg lg:text-2xl flex items-center gap-2"><FaLocationDot />Bhiwani Haryana India</p>
          <p className="text-lg lg:text-2xl flex items-center gap-2"><FaLinkedinIn />linkedin.com/in/nitin-sharma-cse</p>
          <p className="text-lg lg:text-2xl flex items-center gap-2"><FaGithub/>github.com/NitanSharma</p>
        </div>
      </div>
      <div className="bg-[#FDEFC1] rounded-2xl p-4 lg:w-1/2 lg:m-auto">
        <form action="" className="flex flex-col gap-7 py-2">
          <input type="text" placeholder="Your Name" className="px-4 py-3 font-semibold rounded-2xl border-amber-600" />
          <input type="text" placeholder="Your Email" className="px-4 py-3 font-semibold rounded-2xl border-amber-600" />
          <input type="text" placeholder="Subject" className="px-4 py-3 font-semibold rounded-2xl border-amber-600" />
          <input type="text" placeholder="Your Message" className="px-4 py-3 font-semibold rounded-2xl border-amber-600" />
          <button className="bg-black text-[#ffdd55] px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition w-full flex gap-2 justify-center items-center lg:mt-30 mt-1">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact