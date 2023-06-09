import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    starbucks,
    carrent,
    jobit,
    screenrockets,
    tripguide,
    threejs,
    postgresql,
    mysql,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
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
      title: "Data Scientist",
      icon: creator,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },    
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "mysql",
      icon: mysql,
    }
  ];
  
  const experiences = [
    {
      title: "Mentor (Volunteer)",
      company_name: "Microverse",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "January 2022 - June 2023",
      points: [
        " Mentored three junior web developers weekly, providing technical support through code reviews using Zoom and Slack as primary tools.",
        " Proposed improvements to code organization to improve code quality and overall performance by 10%",
        " Provided advice and tips on maintaining motivation, resulting in the successful longevity of six students in the program.",
      ],
    },
    {
      title: "Full Stack Development",
      company_name: "Microverse",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "October 2022 - June 2023",
      points: [
        " Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
        " Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Cozi Homes",
      description:
        " This web platform offers users the ability to explore and reserve a diverse selection of houses based on their preferences. Additionally, users can list their own properties, allowing others to reserve them and generate extra income.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "Ruby on Rails",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL ",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/cilfonegabriel/cozy-homes-front-end?organization=cilfonegabriel&organization=cilfonegabriel",
    },
    {
      name: "Bookstore",
      description:
        "This project is a simple Bookstore built using React and Redux. It utilizes an API to extract data and manages it through the website. The Bookstore allows users to view, add, and remove books.",
      tags: [
        {
          name: "ruby",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        }
      ],
      image: jobit,
      source_code_link: "https://github.com/cilfonegabriel/App-Blog",
    },
    {
      name: "Crypto Metrics.",
      description:
        "Crypto Metrics is a mobile application developed using JavaScript, React, and Redux. It utilizes the CoinStats API to display a list of cryptocurrencies and their market capitalization.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React ",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/cilfonegabriel/crypto-metrics",
    },
    {
        name: "Space Travelers' Hub.",
        description:
          "This WebApp consists of three pages: rockets, missions, and My profile. Users can reserve rockets and join special missions with SpaceX company.",
        tags: [
          {
            name: "JavaScript",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
          {
            name: "HTML5",
            color: "pink-text-gradient",
          },
        ],
        image: screenrockets,
        source_code_link: "https://github.com/cilfonegabriel/space-travelers",
      },
  ];
  
  export { services, technologies, experiences, testimonials, projects };