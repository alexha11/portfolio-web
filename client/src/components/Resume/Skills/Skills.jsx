import MultiCarousel from "./Carousel";

const technologies = {
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



const Skills = () => {
  return (
    <div className="overflow-y-scroll max-h-[32rem]">
      <h2 className="h4">Programming Languages</h2>
      <MultiCarousel techList={technologies.programmingLanguages}/>
      <h2 className="h4 mt-5">Front End</h2>
      <MultiCarousel techList={technologies.frontEnd[0].frameworks} title={technologies.frontEnd[0].category}/>

      <h2 className="h4 mt-5">Back End</h2>
      <MultiCarousel techList={technologies.backEnd[0].frameworks} title={technologies.backEnd[0].category}/>
      <MultiCarousel techList={technologies.backEnd[1].Databases} title={technologies.backEnd[1].category}/>
      <MultiCarousel techList={technologies.backEnd[2].Others} title={technologies.backEnd[2].category}/>
    </div>
  )

}

export default Skills;