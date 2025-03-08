export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    icon: "fa-solid fa-user",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    icon: "fa-solid fa-briefcase",
  },

  {
    id: 5,
    title: "Cv/Resume",
    path: "/cv",
    icon: "fa-solid fa-file",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    icon: "fa-solid fa-envelope",
  },
];

export const skills = {
  frontEnd: [
    { name: "HTML", image: "assets/skills/html-5.png" },
    { name: "CSS", image: "assets/skills/css3.png" },
    { name: "Javascript", image: "assets/skills/javascript.png" },
    { name: "React", image: "assets/skills/react-native.png" },
    { name: "Tailwind", image: "assets/skills/tailwindcss.png" },
    { name: "Bootstrap", image: "assets/skills/bootstrap.png" },
    { name: "jQuery", image: "assets/skills/jquery.png" },
    { name: "AJAX", image: "assets/skills/ajax.png" },
  ],
  backEnd: [
    { name: "laravel", image: "assets/skills/laravel.png" },
    { name: "Python", image: "assets/skills/python.png" },
    { name: "PHP", image: "assets/skills/php.png" },
    { name: "Strapi", image: "assets/skills/strapi.png" },
  ],
  databases: [
    { name: "MongoDB", image: "assets/skills/mongodb.png" },
    { name: "PostgreSQL", image: "assets/skills/postgreesql.png" },
    { name: "MySQL", image: "assets/skills/mysql.png" },
  ],
  tools: [
    { name: "Git", image: "assets/skills/git.png" },
    { name: "Jira", image: "assets/skills/jira.png" },
    { name: "GitLab", image: "assets/skills/gitlab.png" },
    { name: "GitHub", image: "assets/skills/github.png" },
    { name: "Figma", image: "assets/skills/figma.png" },
  ],
};
export const jobs = [" Front-end ", " Back-end ", " Full-stack "];

export const contacts = [
  {
    id: 1,
    name: "email",
    image: "assets/contact/gmail.png",
    link: "mailto:saadiaelachguir@gmail.com",
  },
  {
    id: 2,
    name: "linkedin",
    image: "assets/contact/linkedin.png",
    link: "https://www.linkedin.com/in/saadia-el-achguir-6b38772b2/",
  },
  {
    id: 4,
    name: "Whatsapp",
    image: "assets/contact/whatsapp.png",
    link: "https://wa.me/+212762386899",
  },
  {
    id: 3,
    name: "github",
    image: "assets/contact/github.png",
    link: "https://github.com/SaadiaEl08",
  },
];

export const languages = [
  {
    id: 1,
    code: "en",
    name: "English",
  },
  {
    id: 2,
    code: "ar",
    name: "العربية",
  },
  {
    id: 3,
    code: "fr",
    name: "French",
  },
];

export const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    image: "assets/contact/github.png",
    link: "https://uptodo-saadia-el-achguir.vercel.app",
    github: "https://uptodo-saadia-el-achguir.vercel.app",
    technologies: [
      skills.frontEnd.find((skill) => skill.name.toLowerCase() === "react"),
      skills.backEnd.find((skill) => skill.name.toLowerCase() === "strapi"),
      skills.databases.find((skill) => skill.name.toLowerCase() === "mysql"),
    ],
    note: "Only the front end is deployed on vercel and you can see the app an try the functionalities from it ,the backend works on localhost but you still can see the code on github",
  },
  {
    id: 2,
    title: "UpToDo",
    description: "this website is a to do list app to manage your tasks and your time ,you can add a task, delete it, mark it as done or undone, and you can also filter the tasks by their status or by their name also it provides a calendar to see the tasks by date ,in addition to that you can see the tasks by their priority and you can also use a timer to manage your time and see the time you spent on each task all that inside one app  ",
    image: "assets/contact/github.png",
    link: "https://uptodo-saadia-el-achguir.vercel.app",
    github: "https://github.com/SaadiaEl08/to-do-list",
    technologies: [
      skills.frontEnd.find((skill) => skill.name.toLowerCase() === "react"),
      skills.backEnd.find((skill) => skill.name.toLowerCase() === "strapi"),
      skills.databases.find((skill) => skill.name.toLowerCase() === "mysql"),
    ],
    note: "Only the front end is deployed on vercel and you can see the app an try the functionalities from it ,the backend works on localhost but you still can see the code on github",
  },
];
