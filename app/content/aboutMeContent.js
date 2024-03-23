import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import StorageIcon from '@mui/icons-material/Storage';
import ErrorIcon from '@mui/icons-material/Error';
import BugReportIcon from '@mui/icons-material/BugReport';
// import Html5 from "../assest/Technology/Html5";
// import Html5 from "../assest/Technology/Html5.jpg";
// import Html5 from "../assest/Technology/"
import CSS5 from "../assest/Technology/CSS5.jpg";
import NestJs from "../assest/Technology/NestJs.png"
import CSS from "../assest/Technology/CSS.png";
// import React from "../assest/Technology/React.jpg";
import ReactJs from "../assest/Technology/ReactJs.jpg";
import Node from "../assest/Technology/Node.png";
import Jira from "../assest/Technology/Jira.jpg";
// import TailWind from "../assest/Technology/TailWindCss.png";
import GraphQl from "../assest/Technology/GraphQl.png";
import MySql from "../assest/Technology/MySql.png";
import TypeOrm from "../assest/Technology/TypeOrm.png";
import NextJs from "../assest/Technology/Next.jpg";
import GitHub from "../assest/Technology/GitHub.png";
import Git from "../assest/Technology/Git.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WatchIcon from '@mui/icons-material/Watch';
const aboutMePageContent = {
    skillSet: ['Frontend Developer(React-Js)','Backend Developer(Node-js, GraphQl,TypeORM etc)','AWS(EC2,S3 and many more)'],
    aboutMe: "As a seasoned software developer,I have a stong background on HTML(Hyper Text Markup Language),CSS(Cascading Style sheets) and JS(Java-Script), I also possess extensive expertise in React.js and Node.js, complemented by advanced proficiency in Next.js, Tailwind CSS, TypeORM, and GraphQL, alongside a solid foundation in DevOps tools including AWS and Google Cloud Platform."
}
const aboutMeLayout =[{
    icon: LaptopChromebookIcon,
    about: "Web Design",
    content:"As a web design developer, I blend creativity with technical expertise to build visually stunning and highly functional websites that exceed client expectations and deliver exceptional user experiences.Combining my passion for design with coding proficiency, I specialize in crafting elegant and responsive web solutions that seamlessly integrate aesthetics with optimal performance, ensuring your online presence stands out in today's competitive digital landscape."

},
{
    icon: StorageIcon,
    about: "Backend",
    content:"Specializing in backend development with expertise in Node.js, GraphQL, and ORM frameworks, I design and implement data-driven applications, ensuring seamless communication between clients and servers while adhering to best practices for performance and reliability.Combining my expertise in backend development with proficiency in Node.js, GraphQL, and ORM frameworks, I architect robust and scalable server-side solutions, enabling seamless data management and efficient communication between clients and servers."

},
{
    icon:ErrorIcon,
    about: "Problem Solving",
    content: "In my role as a full-stack developer, I tackle intricate problems at both the frontend and backend layers, utilizing my analytical skills and comprehensive understanding of technology stacks to architect robust and scalable solutions that meet the unique needs of users and businesses alike."

},
{
    icon:BugReportIcon,
    about: "Testing and Debugging",
    content: "Employing Jest as my go-to testing framework, I rigorously validate code integrity and functionality, crafting thorough unit tests that bolster software quality and foster confidence in every development iteration."

}

]
const SliderImages = [
  {
    imageUrl: CSS5,
    title:"HTML5",
    description: 'Standard markup language for creating web pages and web applications.',
    link:"https://www.w3schools.com/html/"
  },
  {
    imageUrl: CSS5,
    title:"CSS",
    description: 'Style sheet language used for describing the presentation of a document written in HTML.',
    link:"https://www.w3schools.com/css/"
  },
  {
    imageUrl: ReactJs,
    title:"React-json",
    description: 'JavaScript library for building user interfaces, particularly for single-page applications.',
    link:"https://react.dev/learn"
  },
  {
    imageUrl: NestJs,
    title:"Next-Js",
    description: 'A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.',
    link:"https://nextjs.org/docs/"
  },
  {
    imageUrl: Node,
    title:"Node-Js",
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side scripting.',
    link:"https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"
  },
  {
    imageUrl: GraphQl,
    title:"Graph-Ql",
    description: 'Query language for APIs and a runtime for executing those queries with existing data.',
    link:"https://graphql.org/learn/"
  },
  {
    imageUrl: MySql,
    title:"My-Sql",
    description: 'Open-source relational database management system based on SQL.',
    link:"https://dev.mysql.com/doc/"
  },
  {
    imageUrl: TypeOrm,
    title:"TypeORM",
    description: 'Object-Relational Mapping (ORM) library for TypeScript and JavaScript.',
    link:"https://typeorm.io/"
  },
  {
    imageUrl: GitHub,
    title:"GitHub",
    description: 'A platform for hosting and sharing code using Git version control system.',
    link:"https://docs.github.com/en"
  },
  {
    imageUrl: Git,
    title:"Git",
    description: 'Distributed version control system for tracking changes in source code during software development.',
    link:"https://git-scm.com/doc"
  },
  {
    imageUrl: Jira,
    title:"Jira",
    description: 'Issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
    link:"https://confluence.atlassian.com/jira"
  },
  {
    imageUrl: CSS5,
    title:"TailWind Css",
    description: 'Utility-first CSS framework for creating custom designs without having to leave your HTML.',
    link:"https://tailwindcss.com/docs/installation"
  }
];

  const FunFactsAboutMe = [{
    header:"Happy Clients",
    icon:FavoriteBorderIcon,
    content:"A happy client is a shining beacon of satisfaction, illuminating the path to success."
  },
  {
    header:"Awards Won 4",
    icon:EmojiEventsIcon,
    content:"Awards are the golden echoes of dedication, shining reminders of the relentless pursuit of excellence."
  },
  {
    header:"Working Hours",
    icon:WatchIcon,
    content:"Working hours are the building blocks of success, each hour a brick in the foundation of achievement."
  },
  {
    header:"Nerdy Nuggets",
    icon:LaptopChromebookIcon,
    content:"Nerdy Nuggets are the tiny sparks of delight that illuminate the developer's world with wit and wisdom."
  }]

export default {aboutMePageContent,aboutMeLayout,SliderImages,FunFactsAboutMe}