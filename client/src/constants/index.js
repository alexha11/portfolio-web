//import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { apphubThumbnail, AIImageGeneratorThumbnail } from "../assets";
import { openIcon } from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#main",
  },
  {
    id: 2,
    title: "Resume",
    url: "#resume",
  },
  {
    id: 3,
    title: "Projects",
    url: "#projects",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];


export const Projects = [  
  {
    id: 1,
    title: "App Hub",
    backgroundImg: "./src/assets/ProjectImg/card-1.svg",
    description: "This is a project description",
    technologies: ["Vue", "Python", "Nginx", "Docker"],
    thumbnail: apphubThumbnail,
    link: ""
  },
  {
    id: 2,
    title: "AI Image Generator",
    backgroundImg: "./src/assets/ProjectImg/card-2.svg",
    description: "This is a project description",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: AIImageGeneratorThumbnail,
    link: "https://github.com/alexha11/AI-Image-Generator"
  },
  {
    id: 3,
    title: "Blog App",
    backgroundImg: "./src/assets/ProjectImg/card-3.svg",
    description: "A blog application that allows users to create, read, update, and delete posts. Users can also like and comment on posts.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    thumbnail: '',
    link: "https://github.com/alexha11/FullStackUniversityOfHelsinki"
  },
  {
    id: 4,
    title: "REPS",
    backgroundImg: "./src/assets/ProjectImg/card-4.svg",
    description: "A renewable energy plant system which can collect, save, view, check and calculate data related to energy.",
    technologies: ["Scala"],
    thumbnail: '',
    link: "https://github.com/alexha11/REPS"
  },
  {
    id: 5,
    title: "Movie theater app",
    backgroundImg: "./src/assets/ProjectImg/card-5.svg",
    description: "a movie theater management system which can add, remove, and view movies, showtimes, seating information of movies.",
    technologies: ["Java", "OOP"],
    thumbnail: '',
    link: "https://github.com/alexha11/movie-theater-app"
  },
  {
    id: 6,
    title: "Project 6",
    backgroundImg: "./src/assets/ProjectImg/card-6.svg",
    description: "",
    technologies: ["Java", "OOP"],
    thumbnail: '',
    link: ""
  },
];