export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: 'tech/html.png' },
      { name: 'CSS', logo: 'tech/css.png' },
      { name: 'JavaScript (ES6+)', logo: 'tech/javascript.png' },
      { name: 'React JS', logo: 'tech/reactjs.png' },
      { name: 'Tailwind CSS', logo: 'tech/tailwindcss.png' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: 'tech/nodejs.png' },
      { name: 'Express JS', logo: 'tech/express.png' },
      { name: 'Mongoose', logo: 'tech/mongoose.png' },
      {name: 'Cloudinary', logo: 'tech/cloudinary.png'}
    ],
  },
  {
    title:'Databases',
    skills:[
        {name :'MongoDB', logo:'tech/mongodb.png'},
        {name :'MySQL', logo:'tech/mysql.png'},
    ]
  },

  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: 'tech/c.png' },
      { name: 'C++', logo: 'tech/cpp.png' },
      { name: 'Python', logo: 'tech/python.png' },
      { name: 'JavaScript', logo: 'tech/javascript.png' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: 'tech/git.png' },
      { name: 'GitHub', logo: 'tech/github.png' },
      { name: 'Postman', logo: 'tech/postman.png' },
      { name: 'Vercel', logo: 'tech/vercel.png' },
      {name: 'Render', logo:'tech/render.png'}
    ],
  },
];

export const education = [
  {
    id: 0,
    img: 'eduLogo/technoLogo.png',
    school: "Techno Main Salt Lake",
    date: "2023 – 2027",
    grade: "CGPA: 7.6 / 10",
    desc: "Pursuing a B.Tech in Computer Science (Cybersecurity), focusing on software development, data structures, and core computer science fundamentals.",
    degree: "B.Tech – Computer Science (Cybersecurity)",
  },
  {
    id: 1,
    img: 'eduLogo/chaitanyaLogo.png',
    school: "Sri Chaitanya Junior College, Vijayawada",
    date: "2021 – 2023",
    grade: "Percentage: 96.7%",
    desc: "Completed Higher Secondary education in Science (PCM) with strong academic performance.",
    degree: "XII – PCM",
  },
];

 export const projects = [
    {
      id: 0,
      title: "Task Manager Web App",
      description:
        "Developed a full-stack task management application using the MERN stack to help users organize and track daily tasks. Implemented RESTful APIs, user authentication, and CRUD operations with MongoDB for persistent storage.",
      image: 'projectPage/todo.png',
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB","REST API"],
      github: "https://github.com/Shivam-272361/todo-app",
      webapp: "https://todo-app-lake-nu-40.vercel.app/",
    },
    {
      id: 1,
      title: "AI Resume Analyzer & Job Recommender",
      description:
        "Developed a resume analysis tool that parses PDF and DOCX files to extract content and compute an ATS score using custom logic. Integrated the Gemini API to recommend relevant job roles and identify missing skills based on resume content.",
      image: 'projectPage/AIresume.png',
      tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "REST API", "Gemini API"],
      github: "https://github.com/Shivam-272361/ai-Resume-analyzer",
      webapp: "https://ai-resume-analyzer-sigma-indol.vercel.app/",
    },
    
  ];  