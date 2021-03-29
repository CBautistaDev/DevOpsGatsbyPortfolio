import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carlos Bautista | DevOps', // e.g: 'Name | Developer'
  lang: 'Python, Javascript', // e.g: en, es, fr, jp
  description: 'Welcome to my cloud space', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'Spent 5 years developing the skills to increase velocity, reliability, and quality. Deep experience with AWS, Docker, and Kubernetes helping organizations instill Devops for the modern age.',
  paragraphTwo: 'Reduced tasks times by 90% by developing automation tools',
  paragraphThree: 'Helped set up Jenkins jobs, Powershell scripts, and managed AWS resources.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Python Teams',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Python AWS ECS Force Deploy',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Docker Containers',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Python Lambda Automation',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
