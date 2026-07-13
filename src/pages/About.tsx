import { FaDownload } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { FaRocket } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#ffdd55] flex flex-col p-5">
      {/* About Section and Avatar */}
      <div className="flex flex-col lg:flex-row lg:h-screen lg:justify-around lg:items-center">
        <div className="px-5 lg:h-150 lg:w-100 flex flex-col">
          <h1 className="text-4xl font-bold mb-5 lg:text-6xl">About Me</h1>
          <p className="text-xl font-semibold my-2">
            I'm Nitin Sharma, a Full Stack Developer who loves building clean,
            efficient and scalable web applications.
          </p>
          <p className="text-xl font-semibold my-2">
            I specialize in the MERN stack and enjoy turning ideas into
            real-world projects.
          </p>
          <p className="text-xl font-semibold my-2">
            Apart from coding. I love learning new technologies and exploring
            design.
          </p>
          <a href="/Nitin_Sharma_CV.pdf" download className="">
            <button className="bg-black text-[#ffdd55] px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition w-full flex gap-2 justify-center items-center lg:mt-30 mt-2">
              Download CV <FaDownload className="text-[#ffdd55]" />
            </button>
          </a>
        </div>

        <div className="mt-4 flex flex-col justify-around">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="h-80 w-100 text-center lg:h-100"
          />
        </div>
      </div>
      {/* Skill Section */}
      <div className="bg-[#FDEFC1] mt-4 flex flex-col rounded-lg p-3">
        <h1 className="text-2xl font-bold">Skills</h1>
        <ul className="mt-2">
          <li className="text-lg font-semibold ">React</li>
          <li className="text-lg font-semibold ">Express</li>
          <li className="text-lg font-semibold ">Mongodb</li>
          <li className="text-lg font-semibold ">Docker</li>
          <li className="text-lg font-semibold ">Nodejs</li>
        </ul>
      </div>

{/* About Section 3 */}
      <div className="mt-4 bg-[#FDEFC1] flex flex-col rounded-lg p-3">
        <div className="flex justify-around py-3">
          <div className="flex flex-col">
            <FaCode className="self-center text-2xl" />
            <span className="text-2xl font-bold self-center">1+</span>
            <p className="text-lg font-semibold">Years of learning</p>
          </div>
          <div className="flex flex-col">
            <FaLaptopCode className="self-center text-2xl" />
            <span className="text-2xl font-bold self-center">5+</span>
            <p className="text-lg font-semibold">Projects Completed</p>
          </div>
        </div>

       <hr className="text-amber-600"  />

        <div className="flex justify-around py-3">
          <div className="flex flex-col">
            <PiCoffeeFill className="self-center text-2xl" />
            <span className="text-2xl font-bold self-center">1000+</span>
            <p className="text-lg font-semibold">Hours of Coding</p>
          </div>
          <div className="flex flex-col">
            <FaRocket className="self-center text-2xl" />
            <span className="text-2xl font-bold self-center">Always</span>
            <p className="text-lg font-semibold">Learning & Growing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
