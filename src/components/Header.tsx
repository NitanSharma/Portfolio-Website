import React from 'react'

const Header = () => {
  return (
    <header className="bg-black text-white rounded-b-[40px] px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <div className="bg-[#ffdd55] text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl">
            NI3
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 text-base sm:text-lg font-semibold">
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
      </header>
  )
}

export default Header