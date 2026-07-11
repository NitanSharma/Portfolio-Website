import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#ffdd55] h-screen p-5 flex flex-col">
      <div className="">
        <h1 className="text-4xl font-bold mb-5">Contact Me</h1>
        <p className="text-lg font-semibold my-2">Have a project in mind or want to connect? <br /> Feel free to reach out!</p>
        <div className="flex flex-col gap-2 my-4">
          <p className="text-lg flex items-center gap-2"><IoMdMail /> sharmanitan938@gmail.com</p>
          <p className="text-lg flex items-center gap-2"><IoCall />+91 7357911012</p>
          <p className="text-lg flex items-center gap-2"><FaLocationDot />Bhiwani Haryana India</p>
          <p className="text-lg flex items-center gap-2"><FaLinkedinIn />linkedin.com/in/nitin-sharma-cse</p>
          <p className="text-lg flex items-center gap-2"><FaGithub/>github.com/NitanSharma</p>
        </div>
      </div>
      <div className="bg-[#FDEFC1]">
        <form action="" className="flex flex-col gap-5 py-2">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Your Message" />
          <button>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact