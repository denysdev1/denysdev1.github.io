import { TDeveloperInfo } from "../types/TDevelopersInfo";
import AvatarImage from "../assets/developer/avatar.png";
import ProjectSrc1 from "../assets/developer/projects/1.png";
import ProjectSrc2 from "../assets/developer/projects/2.png";
import ProjectSrc3 from "../assets/developer/projects/3.png";

export const developerInfo: TDeveloperInfo = {
  username: "denysdev1",
  name: "Denys Kleimenov",
  position: "Front-End Developer",
  avatar: AvatarImage,
  socials: {
    github: "https://github.com/denysdev1",
    email: "mailto:denys.kleimenov.dev@gmail.com",
  },
  description:
    "With a solid foundation of experience in web development, I focus on building responsive, user-friendly interfaces using JavaScript, TypeScript, React, Next.js, and Redux. I have strong skills in styling with Material UI and Tailwind CSS, and I communicate fluently in English, which helps me collaborate efficiently with international teams. I’m committed to delivering high-quality solutions and constantly improving through new challenges in front-end development.",
  previousProjects: [
    {
      title: "23shout",
      position: "Front-End Developer",
      previewSrc: ProjectSrc3,
      duration: "1 year",
      href: "https://23shout.com/",
      description:
        "23shout is an Australian start-up offering users global phone calls and messaging services. Upon registration, users receive an interior phone number for free calls worldwide over Wi-Fi. They can also purchase additional numbers from various countries like the USA, UK, or Australia for sending SMS. Users can customize call forwarding to voicemail and set up automated voice messages for mass notifications to clients or employees.",
      technologies: "React.js, styled-components, Figma, Redux.js",
      results:
        "As the Front-End Developer at 23shout, I worked on the creation of a robust and user-friendly platform that revolutionized global communication. Leveraging cutting-edge technologies such as ReactJS, styled-components, and ReduxJS, I engineered seamless interfaces for registration, login, profile editing, and subscription management. Users can effortlessly manage their phone numbers, customize call forwarding and voicemail settings, and conduct VoIP calls and SMS messaging with intuitive UI designs.",
    },
    {
      title: "Reterniti",
      position: "Front-End Developer",
      previewSrc: ProjectSrc2,
      duration: "4 months",
      href: "https://reterniti-fe.vercel.app/",
      description:
        "Reterniti is a web application aimed at providing comfort and connectivity during times of loss.",
      technologies:
        "TypeScript, React, Tailwind, Next.js, NextAuth, shadcn/ui, GraphQL, Apollo Client, Axios, Mapbox, react-mapbox-gl, Stripe, Tiptap, classnames, date-fns, Emoji Mart, ExifReader, Framer Motion, jwt-decode, lodash.debounce, react-datepicker, React Hook Form, zod, uuid, vaul, react-hot-toast, react-icons, react-share, react-textarea-autosize",
      results:
        "I worked on the development of Reterniti, a web application aimed at providing comfort and connectivity during times of loss. Leveraging my expertise in front-end development, I worked on the creation of a user-friendly and accessible platform optimized for mobile devices. Over a period of 4 months, I ensured that anyone could effortlessly create and share personalized memorials, establishing a lasting space to honor loved ones and cherish precious memories. Reterniti's emphasis on user experience and intuitive design facilitates seamless navigation, even amidst emotionally challenging circumstances.",
    },
    {
      title: "Weaver",
      position: "Front-End Developer",
      previewSrc: ProjectSrc1,
      duration: "6 months",
      href: "https://family.weavermagic.ai/",
      description:
        "Weaver is a smart digital platform that organizes and transforms your family's documents into a meaningful story using artificial intelligence.",
      technologies:
        "TypeScript, React, Sass, Next.js, NextAuth, GraphQL, Apollo Client, Axios, Mapbox, react-mapbox-gl, r2wc, Popper.js, Stripe, Tiptap, classnames, cryptr, date-fns, Emoji Mart, ExifReader, Framer Motion, jwt-decode, lodash.debounce, react-datepicker, React-Draggable, react-dropzone, React Hook Form, react-hot-toast, react-icons, react-textarea-autosize, Tippy.js",
      results:
        "In just six months at Weaver, I've helped transform an innovative concept into a cutting-edge platform that revolutionizes the way families connect with their heritage. Weaver is now a sleek, intelligent, and user-friendly application, seamlessly blending intuitive design with advanced AI technology.",
    },
  ],
  skillsAndExpertise: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "react-storybook",
    "Redux.js",
    "Redux Toolkit",
    "Redux-Thunk",
    "MaterialUI",
    "Ant Design",
    "TailwindCSS",
    "styled-components",
    "Less",
    "Sass",
    "SCSS",
    "HTML5",
    "CSS3",
    "socket.io",
    "Auth0",
    "ApexCharts",
    "Charts.js",
    "Echarts",
    "Highcharts",
    "Recharts",
    "MapBox",
    "MobX",
    "Leaflet.js",
    "GraphQL",
    "GitHub",
    "GitLab",
    "BitBucket",
    "Jira",
    "Trello",
  ],
  education: [
    {
      list: [
        "Bachelor of Applied Science, Software Engineering, National Technical University 'Kharkiv Polytechnic Institute'",
        "Web Development | Front-End Development | React Developer, EPAM University Programs",
      ],
    },
  ],
  languages: [
    {
      name: "English",
      spoken: "Upper-Intermediate",
      written: "Upper-Intermediate",
      level: "B2",
    },
  ],
  employmentHistory: [
    {
      position: "Front-End Developer",
      company: "Incode Group",
      duration: "",
    },
  ],
};
