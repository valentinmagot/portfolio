import { 
  fitgive,
  cucpup,
  uzer,
  cbs,
  ca,
  github,
  mail,
  linkedin,
  salesforce,
  react,
  node,
  database,
  figma
} from '../assets';

export const navLinks = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "about",
    title: "About",
  },

];

export const landing = {
        occupation:'SOFTWARE ENGINEER',
        title:'Hello, I am ',
        name: 'Valentin Magot',
        description:'I am a software engineer based in Ottawa, Canada. I gratuated from the University of Ottawa in 2021 and currently working as a Salesforce SysAdmin for Shared Services Canada (SSC).',
};

export const projects = [
  {
    id: "fitgive",
    img: fitgive,
    title: "FitGive",
    link: 'https://github.com/valentinmagot/FitGive',
    content:
      "FitGive is a web app that encourages users to exercise on a daily basis by challenging their friends and pledging on an agreed amount of money to the success of the challenge. The winner of the challenge will be able to retrieve their portion of the stake, while the rest of the stake will be donated to a selected charity.",
  },
  {
    id: "cucpup",
    img: cucpup,
    title: "Cucumber-Puppeteer",
    link: 'https://github.com/patheard/cucumber-puppeteer',
    content:
      "Contributed to build a Node.js template for end-to-end testing your app with Cucumber.js and Puppeteer. Published on NPM with currently around 250 downloads a week.",
  },
  {
    id: "uzer",
    img: uzer,
    title: "Uzer",
    link: 'https://github.com/uzerapp',
    content:
      "Uzer is a Web Application that allows regular people and organizations to share their wireless/data network and provide Internet access to numerous paying customers generating extra income from them.",
  },
];

export const experience = [
    {
      id: "cbs",
      img: cbs,
      title: "Shared Services Canada (CBS)",
      content:
        "Working as a Salesforce System Administrator and Developer in order to configure the Cloud Brokering Service, a portal that allows department, ministery or any clients to adopt cloud technologies from cloud provriders suck as Amazon, Microsoft, Ibm and many more. Learn more about my experince in my ",
    },
    {
      id: "PSPC",
      img: ca,
      title: "Public Services and Procurement Canada",
      content:
        "Worked on an end to end testing framework called Cucumber-Puppeteer in order to test the Gcdocs mobile project. Assist in the Gcdocs mobile project that allows Gcdocs user to have a mobile version of the software using ActiveView, REST API calls and HTML, CSS, JavaScript. Learn more about my experince in my ",
    },
    {
      id: "ECCC",
      img: ca,
      title: "Enviornment And Climate Change Canada",
      content:
        "At this postiion I was responsible for the designing and building a database to assist ECCC to better manage, coordinate and make linkages to issues highlighted in correspondence with the SJCSR. The front end of the Database was built with VBA for a better UX for management. Learn more about my experince in my ",
    },
  ];

export const about = {
        title:'About me',
        description:'To hone my software engineering skills I enjoy participating to capture the flag (CTF) contest and would very much enjoy to learn more about cybersecurity. I am also a Fitness enthusiast and love riding my motorcycle on my free time.',
};

export const socialMedia = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/valentinmagot",
  },
  {
    id: "mail",
    icon: mail,
    link: "mailto:valentin_magot@outlook.com",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/valentin-magot-146506128/",
  },
];

export const tech = [
  {
    id: "salesforce",
    icon: salesforce
  },
  {
    id: "react",
    icon: react
  },
  {
    id: "node",
    icon: node
  },
  {
    id: "database",
    icon: database
  },
  {
    id: "figma",
    icon: figma
  },
];



