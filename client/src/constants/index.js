// Site content, kept in one place and based on the CV.
// Keep punctuation plain: hyphens for ranges, no em dashes.

export const profile = {
  name: "Duong Ha",
  role: "Software Engineer & Researcher",
  summary:
    "I build full-stack products, cloud infrastructure and applied AI systems. Currently an M.Sc. student and Research Assistant at Aalto University.",
  location: "Finland",
  email: "thanhduonghd114@gmail.com",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/alexha11", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/duong-ha-55524a246", icon: "linkedin" },
  { label: "Codeforces", href: "https://codeforces.com/profile/alexha11", icon: "codeforces" },
];

export const navigation = [
  { title: "About", url: "#about" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Research", url: "#research" },
  { title: "Education", url: "#education" },
  { title: "Contact", url: "#contact" },
];

export const about = [
  "I'm from Vietnam and based in Finland, where I'm studying for an M.Sc. in Computer Science at Aalto University. I graduated with distinction from LUT University, and I'm now a Research Assistant at Aalto, building a multimodal AI pipeline that tags construction-site images with vision-language models for my Master's thesis.",
  "Competitive programming in high school gave me a strong foundation in algorithms and problem-solving. Since then I've worked as a full-stack engineer, building real-time order management and POS systems at Munchi and secure backend services at Triplan.",
  "I'm most interested in cloud systems, AI/ML and scalable software architecture.",
];

export const stats = [
  { value: 300, suffix: "+", label: "Coding problems solved" },
  { value: 4, label: "Years of experience" },
  { value: 4.5, decimals: 1, label: "M.Sc. GPA (out of 5)" },
];

export const skills = [
  { group: "Languages", items: ["C/C++", "Python", "TypeScript", "SQL"] },
  { group: "Frameworks", items: ["React", "React Native", "Node.js", "FastAPI", "HTML/CSS"] },
  { group: "Databases", items: ["PostgreSQL", "Supabase", "MongoDB", "BigQuery", "Firebase"] },
  { group: "Tools", items: ["Docker", "Git", "CI/CD", "Google Cloud", "Terraform", "Linux"] },
];

export const experience = [
  {
    role: "Research Assistant (Master's Thesis)",
    org: "Aalto University",
    period: "Jan 2026 - Present",
    points: [
      "Developed a multimodal AI pipeline for automatic tagging of construction-site images using Python and PyTorch.",
      "Evaluated zero-shot, few-shot and fine-tuned vision-language models, benchmarking tagging accuracy.",
    ],
    tags: ["Python", "PyTorch", "Vision-language models"],
  },
  {
    role: "Software Engineer Trainee",
    org: "Munchi",
    period: "Jan 2025 - Oct 2025",
    points: [
      "Developed an order manager system integrating the Wolt and Uber Eats APIs using Node.js and TypeScript, processing 2000+ orders daily.",
      "Built a POS and kiosk mobile app with React Native and Viva payment APIs, handling 1000+ daily transactions and reducing order time to under 5 seconds.",
      "Designed and maintained cloud infrastructure on Google Cloud Platform with Pub/Sub, Cloud Run, Document AI and Terraform.",
    ],
    tags: ["Node.js", "TypeScript", "React Native", "Google Cloud", "Terraform"],
  },
  {
    role: "Software Engineer Trainee",
    org: "Triplan",
    period: "Jan 2024 - May 2024",
    points: [
      "Developed secure access control backend services with Python, Docker and Nginx for distributed traffic management systems, reaching 90% test coverage with unit tests.",
      "Used Vue.js, JavaScript and Tailwind to improve UX, implementing 10+ user-focused features and fixing bugs.",
    ],
    tags: ["Python", "Docker", "Nginx", "Vue.js"],
  },
  {
    role: "Teaching Assistant",
    org: "Aalto University and LUT University",
    period: "Jan 2024 - Present",
    points: [
      "Teaching assistant for Software Architectures (M.Sc., 5 ECTS) at Aalto and Basics of Database Systems (B.Sc., 3 ECTS) at LUT.",
      "Grading assignments, projects and exams.",
    ],
    tags: ["Software architecture", "Databases"],
  },
];

export const projects = [
  {
    title: "Cognify",
    period: "Feb 2026 - Present",
    description: "A multi-tenant SaaS platform that generates AI-powered study questions and materials for students.",
    tags: ["TypeScript", "Supabase"],
    links: [{ label: "Source code", href: "https://github.com/alexha11/Cognify" }],
  },
  {
    title: "Junction Hackathon 2025",
    period: "Nov 2025",
    award: "2nd place, Challenge Partner",
    description: "A platform that optimizes wastewater pumping with multiple AI agents for forecasting and a digital-twin simulation.",
    tags: ["FastAPI", "React", "AI agents"],
    links: [{ label: "Source code", href: "https://github.com/alexha11/Junction-2025" }],
  },
  {
    title: "AI Image Generator",
    period: "Jul 2024 - Nov 2024",
    description: "A web platform that generates images from a prompt, deployed with GitHub Actions CI/CD on AWS EC2 with 80% test coverage.",
    tags: ["React", "Node.js", "MongoDB"],
    links: [
      { label: "Live demo", href: "https://ai-image-generator-1-1t4p.onrender.com/" },
      { label: "Source code", href: "https://github.com/alexha11/AI-Image-Generator" },
    ],
  },
];

export const research = [
  {
    title: "Crowdsourcing for Large-Scale Data Labelling",
    venue: "B.Sc. thesis, LUT University, 2025 (grade 5/5)",
    href: "https://lutpub.lut.fi/handle/10024/169142",
  },
  {
    title: "Enhancing LLM Inference with GraphRAG",
    venue: "GitHub",
    href: "https://github.com/alexha11/Enhancing-LLM-Inference-with-GraphRAG",
  },
  {
    title: "A KITTI Benchmark Study for 2D Object Detection in Autonomous Driving",
    venue: "GitHub",
    href: "https://github.com/alexha11/EEA-EV008-KITTI-2D-Object-Detection",
  },
];

export const education = [
  {
    school: "Aalto University",
    degree: "M.Sc. in Computer Science",
    period: "Aug 2025 - Jan 2027 (expected)",
    details: [
      "GPA 4.5 / 5",
      "Coursework: Scalable Systems, Cloud Software and Systems, Parallel Computing, Scalable Web Apps, Web Software Development",
    ],
  },
  {
    school: "Lappeenranta-Lahti University of Technology (LUT)",
    degree: "B.Sc. in Software and System Engineering",
    period: "Aug 2022 - May 2025",
    details: [
      "GPA 4.72 / 5, graduated with distinction",
      "Academic Excellence Scholarship (€3,000 in 2023 and 2024) and Tuition Fee Scholarship (€1,000 in 2022)",
    ],
  },
];

export const certifications = [
  {
    title: "Full Stack Open",
    issuer: "University of Helsinki",
    href: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/60e929280aa118ce34ec21a94f07ac0f",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    href: "https://www.deeplearning.ai/courses/deep-learning-specialization/",
  },
];
