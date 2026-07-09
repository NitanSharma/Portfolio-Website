

const Home = () => {
  return (
    <div className="min-h-screen bg-[#ffdd55]">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-20 gap-10 md:gap-16">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hello,
            <br />
            I'm <span className="text-black">Nitin Sharma</span>
          </h1>
          <p className="text-xl sm:text-2xl font-semibold mb-8">
            Building modern, scalable web applications with the MERN Stack
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <button className="bg-black text-[#ffdd55] px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition w-full sm:w-auto">
              Hire me
            </button>
            <a
              href="/Nitin_Sharma_CV.pdf"
              download
              className="w-full sm:w-auto"
            >
              <button className="bg-black text-[#ffdd55] px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-800 transition w-full">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center gap-8 w-full max-w-md mx-auto">
          {/* Profile Card */}
          <div className="bg-[#1abc9c] rounded-3xl p-6 sm:p-8 w-full max-w-sm aspect-square flex items-center justify-center border-8 border-black shadow-lg">
            <div className="text-center w-full h-full flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="Profile"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 sm:flex-col">
            <a
              href="https://github.com/NitanSharma"
              className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-lg hover:bg-gray-200 transition"
            >
              <img
                src="/github.jpg"
                alt="GitHub"
                className="w-9 h-9 object-contain"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-sharma-cse/"
              className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-lg hover:bg-gray-200 transition"
            >
              <img
                src="/linkedin.webp"
                alt="LinkedIn"
                className="w-9 h-9 object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
