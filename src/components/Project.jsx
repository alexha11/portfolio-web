const Project = () => {
  const Projects = [  
    {
      title: "Project 1",
      image: "project1.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
    {
      title: "Project 2",
      image: "project2.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
    {
      title: "Project 3",
      image: "project3.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
    {
      title: "Project 4",
      image: "project4.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
    {
      title: "Project 5",
      image: "project5.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
    {
      title: "Project 6",
      image: "project6.jpg",
      description: "This is a project description",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: ""
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2> 
      <div>
        {Projects.map((project, index) => {
          return (
            <div key={index} className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="w-full md:w-1/2">
                <img src={`./src/assets/${project.image}`} alt={project.title} className="w-full h-64 object-cover rounded-md" />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-2xl text-white">{project.title}</h3>
                <p className="text-white mt-4">{project.description}</p>
                <div className="flex mt-4">
                  {project.technologies.map((technology, index) => {
                    return (
                      <span key={index} className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500  bg-clip-text text-xl tracking-tight text-transparent py-1 rounded-md mr-2">{technology}</span>
                    );
                  })}
                </div>
                <div className="mt-6">
                  <a href={project.link} className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 text-white px-4 py-2 rounded-md mt-20">View Project</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
} 

export default Project;