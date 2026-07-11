

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "SS Solar",
      img: "sssolar.png",
      tech: ["Node.js", "MongoDB", "EJS", "JavaScript"],
      url: "https://www.sssolar.in/",
    },
    {
      id: 2,
      name: "URL Shortener",
      img: "urlshotner.png",
      tech: ["React", "Express", "Nodejs", "MongoDB"],
      url: "https://url-shortner-de1q.vercel.app/",
    },
    {
      id: 3,
      name: "Ticket Management System",
      img: "TicketManagement.png",
      tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
      url: "https://quick-ticket-phi.vercel.app/",
    },
    {
      id: 4,
      name: "Chat Ai Bot",
      img: "ChatBotAi.png",
      tech: ["Node.js", "Stream Chat", "NeonDB"],
      url: "https://chat-ai-ui-nine.vercel.app/",
    },
  ];

  return (
    <div className="bg-[#ffdd55] flex flex-col gap-2">
      <div className="p-5 flex flex-col gap-4">
        <h1 className="text-4xl font-bold mb-5">My Project</h1>
        <p className="text-lg font-semibold my-2">
          Here are some of the projet <br />
          I've work on.
        </p>
        <a href="https://github.com/NitanSharma">
          <button className="bg-black text-[#ffdd55] font-semibold px-6 py-4 rounded-full">
            View on Github
          </button>
        </a>
      </div>

      {projects.map((project) => (
        <a href={project.url}>
          <div key={project.id} className="bg-[#FDEFC1] rounded-2xl m-4">
            <img src={project.img} alt="projectimage" className="rounded-2xl" />
            <h2 className="text-2xl font-bold mt-3 px-2">{project.name}</h2>
            <div className="flex gap-5 flex-wrap p-3">
              {project.tech.map((i) => (
                <p key={project.id} className="bg-[#eccd68] p-1 rounded-2xl font-semibold">
                  {i}
                </p>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Project;
