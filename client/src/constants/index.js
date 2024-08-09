//import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { apphubThumbnail, AIImageGeneratorThumbnail, BlogAppThubnail, MoodleGradeThubmnail } from "../assets";
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
    description: "A platform for both admin and user to manage and use applications.",
    technologies: ["Vue", "Flask", "Nginx", "Docker"],
    thumbnail: apphubThumbnail,
    link: ""
  },
  {
    id: 2,
    title: "AI Image Generator",
    backgroundImg: "./src/assets/ProjectImg/card-2.svg",
    description: "A MERN app allows users to create image based on their props and share them to the community.",
    technologies: ["MERN Stack", "API", "Cloudinary"],
    thumbnail: AIImageGeneratorThumbnail,
    link: "https://github.com/alexha11/AI-Image-Generator",
    livedemo: "https://ai-image-generator-1-1t4p.onrender.com"
  },
  {
    id: 3,
    title: "Blog App",
    backgroundImg: "./src/assets/ProjectImg/card-3.svg",
    description: "A blog application that allows users to create, read, update, and delete posts. Users can also like and comment on posts.",
    technologies: ["MERN Stack", "Cypress", "Jest"],
    thumbnail: BlogAppThubnail,
    link: "https://github.com/alexha11/FullStackUniversityOfHelsinki/tree/master/part5/blog-list",
    livedemo: "https://blog-app-kiqx.onrender.com",
    username: 'Guest_Login_For_Demo',
    password: '48eqlFbt1gVF7xOOkaA9cYoy2'
  },
  {
    id: 4,
    title: "Moodle Grade",
    backgroundImg: "./src/assets/ProjectImg/card-6.svg",
    description: "Provide a better user interface for Moodle - a website used to manage courses and grades.",
    technologies: ["Dart", "Flutter"],
    thumbnail: MoodleGradeThubmnail,
    link: "https://github.com/alexha11/moodle-grades",
    livedemo: 'https://9000-idx-moodle-grades-1723156681522.cluster-rcyheetymngt4qx5fpswua3ry4.cloudworkstations.dev/?monospaceUid=547121'
  },
  {
    id: 5,
    title: "Discount Management Application",
    backgroundImg: "./src/assets/ProjectImg/card-5.svg",
    description: "A management application provides users with the best discounts online and in the set area.",
    technologies: ["Java", 'PostgreSQL', 'Relational Database'],
    thumbnail: '',
    livedemo: "https://youtu.be/ViPWL4dRlJ8",
    link: "https://github.com/alexha11/discount-management-app",
  },
  {
    id: 6,
    title: "Comming soon...",
    backgroundImg: "./src/assets/ProjectImg/card-4.svg",
    description: "I am open to the possibility of collaborating on new projects. Please feel free to contact me and lets create something truly remarkable!",
    technologies: [""],
    thumbnail: '',
    link: ""
  },
];

export const stats = [
  {
    num: 400,
    text: "Coding problems solved"
  },
  {
    num: 6,
    text: "Projects completed"
  },
  {
    num: 4,
    smallNumber: 8,
    text: "GPA"
  },
]