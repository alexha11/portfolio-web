//import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { apphubThumbnail, AIImageGeneratorThumbnail, BlogAppThubnail, MoodleGradeThubmnail } from "../assets";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "../assets";
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
    backgroundImg: Card1,
    description: "A platform for both admin and user to manage and use applications.",
    technologies: ["Vue", "Flask", "Nginx", "Docker"],
    thumbnail: apphubThumbnail,
    link: ""
  },
  {
    id: 2,
    title: "AI Image Generator",
    backgroundImg: Card2,
    description: "A MERN app allows users to create image based on their props and share them to the community.",
    technologies: ["MERN Stack", "API", "Cloudinary"],
    thumbnail: AIImageGeneratorThumbnail,
    link: "https://github.com/alexha11/AI-Image-Generator",
    livedemo: "https://ai-image-generator-1-1t4p.onrender.com"
  },
  {
    id: 3,
    title: "Blog App",
    backgroundImg: Card3,
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
    backgroundImg:  Card4,
    description: "Provide a better user interface for Moodle - a website used to manage courses and grades.",
    technologies: ["Dart", "Flutter"],
    thumbnail: MoodleGradeThubmnail,
    link: "https://github.com/alexha11/moodle-grades",
    livedemo: 'https://9000-idx-moodle-grades-1723156681522.cluster-rcyheetymngt4qx5fpswua3ry4.cloudworkstations.dev/?monospaceUid=547121'
  },
  {
    id: 5,
    title: "Discount Management Application",
    backgroundImg:  Card5,
    description: "A management application provides users with the best discounts online and in the set area.",
    technologies: ["Java", 'PostgreSQL', 'Relational Database'],
    thumbnail: '',
    livedemo: "https://youtu.be/ViPWL4dRlJ8",
    link: "https://github.com/alexha11/discount-management-app",
  },
  {
    id: 6,
    title: "Comming soon...",
    backgroundImg: Card6,
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

export const About = [
  {
    title: "Name",
    content: "Duong Ha"
  },
  {
    title: "Email",
    content: "duong.ha@student.lut.fi"
  },
  {
    title: "Age",
    content: "20"
  },
  {
    title: "Phone",
    content: "(+358) 415 705 441"
  },
  {
    title: "Address",
    content: "Finland"
  },
  {
    title: "Nationality",
    content: "Vietnamese"
  },
  {
    title: "Language",
    content: "Vietnamese, English"
  },
  {
    title: "Hobby", 
    content: "Football (FC Flamingo), Gym"
  }

]

export const technologies = {
  programmingLanguages: [
    {
      name: "JavaScript",
      icon: "https://img.shields.io/badge/JavaScript-666666?style=for-the-badge&logo=JavaScript"
    },
    {
      name: "C++",
      icon: "https://img.shields.io/badge/C++-666666?style=for-the-badge&logo=C%2B%2B"

    },
    {
      name: "TypeScript",
      icon: "https://img.shields.io/badge/TypeScript-666666?style=for-the-badge&logo=TypeScript"
    },
    {
      name: "Python",
      icon: "https://img.shields.io/badge/Python-666666?style=for-the-badge&logo=Python"
    },
    {
      name: "Java",
      icon: "https://img.shields.io/badge/Java-666666?style=for-the-badge&logo=Java"
    },
    {
      name: "Dart",
      icon: "https://img.shields.io/badge/Dart-666666?style=for-the-badge&logo=Dart"
    },
  ],
  frontEnd: [
    {
      category: "Frameworks / Libraries",
      frameworks: [
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-666666?style=for-the-badge&logo=React"
        },
        {
          name: "Vue",
          icon: "https://img.shields.io/badge/Vue-666666?style=for-the-badge&logo=Vue.js"
        },
        {
          name: "Flutter",
          icon: "https://img.shields.io/badge/Flutter-666666?style=for-the-badge&logo=Flutter"
        },
        {
          name: "Java Swing",
          icon: "https://img.shields.io/badge/Java Swing-666666?style=for-the-badge&logo=Java"
        }
        
      ]
    },
  ],
  backEnd: [
    {
      category: "Frameworks / Libraries",
      frameworks: [
        {
          name: "Node.js",
          icon: "https://img.shields.io/badge/Node.js-666666?style=for-the-badge&logo=Node.js"
        },
        {
          name: "Express",
          icon: "https://img.shields.io/badge/Express-666666?style=for-the-badge&logo=Express"
        },
        {
          name: "Flask",
          icon: "https://img.shields.io/badge/Flask-666666?style=for-the-badge&logo=Flask"
        }
      ]
    },
    {
      category: "Databases",
      Databases: [
        {
          name: "PostgreSQL",
          icon: "https://img.shields.io/badge/PostgreSQL-666666?style=for-the-badge&logo=PostgreSQL"
        },
        {
          name: "MongoDB",
          icon: "https://img.shields.io/badge/MongoDB-666666?style=for-the-badge&logo=MongoDB"
        },
      ],
    },
    {
      category: "Others",
      Others: [
        {
          name: "Nginx",
          icon: "https://img.shields.io/badge/Nginx-666666?style=for-the-badge&logo=Nginx"
        },
        {
          name: "Docker",
          icon: "https://img.shields.io/badge/Docker-666666?style=for-the-badge&logo=Docker"
        },
        {
          name: "REST API",
          icon: "https://img.shields.io/badge/REST API-666666?style=for-the-badge&logo=REST API"
        },
        {
          name: "Cypress",
          icon: "https://img.shields.io/badge/Cypress-666666?style=for-the-badge&logo=Cypress"
        },
        {
          name: "AWS",
          icon: "https://img.shields.io/badge/AWS-666666?style=for-the-badge&logo=Amazon AWS"
        },
        {
          name: "Jira",
          icon: "https://img.shields.io/badge/Jira-666666?style=for-the-badge&logo=Jira"
        }
      ],
    }
  ],
};

