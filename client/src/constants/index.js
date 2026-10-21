//import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  apphubThumbnail,
  AIImageGeneratorThumbnail,
  BlogAppThubnail,
  MoodleGradeThubmnail,
  DiscountAppThubmnail,
} from "../assets";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "../assets";

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
    title: "Junction Hackathon 2025",
    backgroundImg: Card1,
    description:
      "Won 2nd place in Challenge Partner. Built an end-to-end platform optimizing wastewater pumping using three AI agents for forecasting, a FastAPI backend, React dashboard, and digital-twin simulation tools.",
    technologies: ["FastAPI", "React", "AI Agents"],
    thumbnail: apphubThumbnail,
    livedemo: "",
    link: "https://github.com/alexha11/Junction-2025",
  },
  {
    id: 2,
    title: "AI Image Generator",
    backgroundImg: Card2,
    description:
      "A web platform that generates images from user's prompt. Deployed with CI/CD pipelines using GitHub Actions on AWS EC2 with 80% test coverage.",
    technologies: ["React", "Node.js", "MongoDB"],
    thumbnail: AIImageGeneratorThumbnail,
    livedemo: "https://ai-image-generator-1-1t4p.onrender.com/",
    link: "https://github.com/alexha11/AI-Image-Generator",
  },
  {
    id: 3,
    title: "GraphRAG LLM Enhancement",
    backgroundImg: Card3,
    description:
      "A LLM enhanced with GraphRAG for dynamic few-shot learning, self-refining, and caching, achieving 2000× faster inference.",
    technologies: ["Python", "GraphRAG", "LLM"],
    thumbnail: BlogAppThubnail,
    link: "https://github.com/alexha11/Enhancing-LLM-Inference-with-GraphRAG",
    livedemo: "",
  },
  {
    id: 4,
    title: "Blog App",
    backgroundImg: Card4,
    description:
      "A blog application that allows users to create, read, update, and delete posts. Users can also like and comment on posts.",
    technologies: ["MERN Stack", "Cypress", "Jest"],
    thumbnail: MoodleGradeThubmnail,
    link: "https://github.com/alexha11/FullStackUniversityOfHelsinki/tree/master/part5/blog-list",
    livedemo: "https://blog-app-kiqx.onrender.com",
    username: "Guest_Login_For_Demo",
    password: "48eqlFbt1gVF7xOOkaA9cYoy2",
  },
  {
    id: 5,
    title: "Discount Management Application",
    backgroundImg: Card5,
    description:
      "A management application provides users with the best discounts online and in the set area.",
    technologies: ["Java", "PostgreSQL", "Relational Database"],
    thumbnail: DiscountAppThubmnail,
    livedemo: "https://youtu.be/ViPWL4dRlJ8",
    link: "https://github.com/alexha11/discount-management-app",
  },
  {
    id: 6,
    title: "Open to Collaborate!",
    backgroundImg: Card6,
    description:
      "I am open to the possibility of collaborating on new projects. Please feel free to contact me and let's create something truly remarkable!",
    technologies: [""],
    thumbnail: "",
    link: "",
  },
];

export const stats = [
  {
    num: 300,
    text: "Coding problems solved",
  },
  {
    num: 4,
    text: "Years of experience",
  },
  {
    num: 4,
    smallNumber: 67,
    text: "GPA (M.Sc.)",
  },
];

export const About = [
  {
    title: "Name",
    content: "Duong Ha",
  },
  {
    title: "Email",
    content: "thanhduonghd114@gmail.com",
  },
  {
    title: "Age",
    content: "22",
  },
  {
    title: "Phone",
    content: "(+358) 415 705 441",
  },
  {
    title: "Address",
    content: "Finland",
  },
  {
    title: "Nationality",
    content: "Vietnamese",
  },
  {
    title: "Language",
    content: "Vietnamese, English",
  },
  {
    title: "Hobby",
    content: "Football, Gym, Coding",
  },
];

export const technologies = {
  programmingLanguages: [
    {
      name: "C/C++",
      icon: "https://img.shields.io/badge/C%2FC%2B%2B-666666?style=for-the-badge&logo=C%2B%2B",
    },
    {
      name: "Python",
      icon: "https://img.shields.io/badge/Python-666666?style=for-the-badge&logo=Python",
    },
    {
      name: "TypeScript",
      icon: "https://img.shields.io/badge/TypeScript-666666?style=for-the-badge&logo=TypeScript",
    },
    {
      name: "JavaScript",
      icon: "https://img.shields.io/badge/JavaScript-666666?style=for-the-badge&logo=JavaScript",
    },
    {
      name: "SQL",
      icon: "https://img.shields.io/badge/SQL-666666?style=for-the-badge&logo=MySQL",
    },
  ],
  frontEnd: [
    {
      category: "Frameworks / Libraries",
      frameworks: [
        {
          name: "React",
          icon: "https://img.shields.io/badge/React-666666?style=for-the-badge&logo=React",
        },
        {
          name: "React Native",
          icon: "https://img.shields.io/badge/React Native-666666?style=for-the-badge&logo=React",
        },
        {
          name: "Vue",
          icon: "https://img.shields.io/badge/Vue-666666?style=for-the-badge&logo=Vue.js",
        },
      ],
    },
  ],
  backEnd: [
    {
      category: "Frameworks / Libraries",
      frameworks: [
        {
          name: "Node.js",
          icon: "https://img.shields.io/badge/Node.js-666666?style=for-the-badge&logo=Node.js",
        },
        {
          name: "FastAPI",
          icon: "https://img.shields.io/badge/FastAPI-666666?style=for-the-badge&logo=FastAPI",
        },
        {
          name: "PyTorch",
          icon: "https://img.shields.io/badge/PyTorch-666666?style=for-the-badge&logo=PyTorch",
        },
      ],
    },
    {
      category: "Databases",
      Databases: [
        {
          name: "PostgreSQL",
          icon: "https://img.shields.io/badge/PostgreSQL-666666?style=for-the-badge&logo=PostgreSQL",
        },
        {
          name: "MongoDB",
          icon: "https://img.shields.io/badge/MongoDB-666666?style=for-the-badge&logo=MongoDB",
        },
        {
          name: "Supabase",
          icon: "https://img.shields.io/badge/Supabase-666666?style=for-the-badge&logo=Supabase",
        },
        {
          name: "BigQuery",
          icon: "https://img.shields.io/badge/BigQuery-666666?style=for-the-badge&logo=Google-Cloud",
        },
      ],
    },
    {
      category: "Tools & Cloud",
      Others: [
        {
          name: "Docker",
          icon: "https://img.shields.io/badge/Docker-666666?style=for-the-badge&logo=Docker",
        },
        {
          name: "GCP",
          icon: "https://img.shields.io/badge/GCP-666666?style=for-the-badge&logo=Google-Cloud",
        },
        {
          name: "Terraform",
          icon: "https://img.shields.io/badge/Terraform-666666?style=for-the-badge&logo=Terraform",
        },
        {
          name: "CI/CD",
          icon: "https://img.shields.io/badge/CI%2FCD-666666?style=for-the-badge&logo=GitHub-Actions",
        },
        {
          name: "AWS",
          icon: "https://img.shields.io/badge/AWS-666666?style=for-the-badge&logo=Amazon AWS",
        },
        {
          name: "Redis",
          icon: "https://img.shields.io/badge/Redis-666666?style=for-the-badge&logo=Redis",
        },
      ],
    },
  ],
};
