import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-black text-white rounded-b-[40px] px-6 py-4 flex justify-around items-center">
            <div className="flex items-center">
              <div className="bg-[#ffdd55] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
                NI3
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-5 text-base sm:text-lg font-semibold invisible lg:visible">
              <a href="/" className="hover:text-[#ffdd55] transition">
                Home
              </a>
              <a href="/about" className="hover:text-[#ffdd55] transition">
                About
              </a>
              <a href="/project" className="hover:text-[#ffdd55] transition">
                Projects
              </a>
              <a href="/contact" className="hover:text-[#ffdd55] transition">
                Contact us
              </a>
            </nav>
    
            <GiHamburgerMenu className="text-3xl text-white hover:text-[#ffdd55] lg:invisible" />
    
          </header>
  )
}

export default Header