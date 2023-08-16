import {
    mobile,
    backend,
    creator,
    web,
    github,
    linkedin,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    cidadejunior,
    zhavia,
    threejs,
    php,
    java,
    mysql,
    angular
} from "../../src/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "tech",
        title: "Tech",
    }
    // {
    //     id: "contact",
    //     title: "Contact",
    // }
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Fullstack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Instituto Cidade Junior",
        icon: cidadejunior,
        iconBg: "#383E56",
        date: "Oct 2021 - Jan 2022",
        points: [
            "Developing and maintaining web applications using Java, Angular and PostgreSQL.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Zhavia",
        icon: zhavia,
        iconBg: "#fff",
        date: "Jan 2022 - Present",
        points: [
            "Developing and maintaining web applications using PHP, Angular, MySQL and other related technologies.",
            "Collaborating with cross-functional teams including designers, backoffice and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const contacts = [
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/in/gabriely-gon%C3%A7alves",
        icon: linkedin,
    },
    {
        title: "Github",
        link: "https://github.com/gabrielyvg",
        icon: github,
    }
];

export { services, technologies, experiences, contacts };