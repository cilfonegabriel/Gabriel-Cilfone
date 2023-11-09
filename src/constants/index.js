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
    jobit,
    screenrockets,
    tripguide,
    threejs,
    postgresql,
    mysql,
    budget,
    clinic,
    budgetControl,
    cyptoQuote,
    guitarla,
    linkedin,
    insurance,
    drinks,
    github,
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
      date: "October 2022 - October 2023",
      points: [
        " Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
        " Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.",
      ],
    },
  ];

  const socials = [
    {
      id: "linkedin",
      title: "https://www.linkedin.com/in/gabriel-cilfone/?locale=en_US",
      logo: linkedin,
    },
    {
      id: "github",
      title: "https://github.com/cilfonegabriel",
      logo: github,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Gabriel is an exceptional coding partner with a wealth of technical knowledge and experience. He is a creative problem-solver who consistently delivers high-quality work, and his dedication to his craft is truly impressive. I have had the pleasure of collaborating with Gabriel on several projects and can say with confidence that he is a true professional in every sense of the word. I would highly recommend Gabriel for any coding collaboration - his expertise and passion for his work make him an asset to any team..",
      name: "Paul Sáenz Sucre",
      designation: "Full-stack Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/10566417?v=4",
    },
    {
      testimonial:
        "Gabriel is a remarkable individual who has made a lasting impact on me and everyone else he works with. His talent, work ethic, and positive attitude are truly inspiring, and I have no doubt that he will be successful in any future endeavors. I wholeheartedly recommend Gabriel to anyone seeking a talented and dedicated full stack web developer who is also an amazing colleague and friend.",
      name: "Francisco Quintero",
      designation: "Full-stack Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/90111138?v=4",
    },
    {
      testimonial:
        "It is my pleasure to recommend Mr. Gabriel Cilfone who worked with me at microverse as a full-stack developer. He is a very determined, well-qualified, and intelligent individual. He is passionate about writing codes and solving different problems through the development of creative and innovative software. He is also a delight to work with a team player with a positive attitude and interpersonal relationships all the way. I wouldn t hesitate to work with him again if the opportunity arose.",
      name: "Pierre Barba",
      designation: "Full-stack Developer",
      company: "Microverse",
      image: "https://avatars.githubusercontent.com/u/99061965?v=4",
    },
  ];
  
  const projects = [
    {
      name: "Bookstore",
      description:
        "This project is a simple Bookstore built using React and Redux. It utilizes an API to extract data and manages it through the website. The Bookstore allows users to view, add, and remove books. Build with Ruby, JavaScript, HTLM5 and CSS",
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
      source_code_link: "https://github.com/cilfonegabriel/bookstore",
      live_demo_link: "https://bookstore-0ob6.onrender.com/",
    },
    {
      name: "Crypto Metrics.",
      description:
        "Crypto Metrics is a mobile application developed using JavaScript, React, and Redux. It utilizes the CoinStats API to display a list of cryptocurrencies and their market capitalization.  Build with React and Redux, CSS and HTML5",
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
      live_demo_link:"https://cripto-metrics.onrender.com/",
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
        live_demo_link:"https://beautiful-starship-2d3890.netlify.app/",
      },      
      {
        name: "Budget",
        description:
          " Budd-get is a user-friendly app for managing personal finances. Create custom categories and track transactions effortlessly. Set goals, stay motivated, and make informed financial decisions.",
        tags: [
          {
            name: "rails",
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
            name: "javascript",
            color: "blue-text-gradient",
          },
        ],
        image: budget,
        source_code_link: "https://github.com/cilfonegabriel/Budget-App",
        live_demo_link: "https://budget-app-gqyi.onrender.com/",
      },
      {
        name: "Patient Manager",
        description:
          " Web application built with React and tailwind used to manage patients in a veterinary clinic.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Tailwind",
            color: "green-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
        ],
        image: clinic,
        source_code_link: "https://github.com/cilfonegabriel/appointment-react",
        live_demo_link: "https://earnest-unicorn-443f33.netlify.app/",
      },
      {
        name: "Budget Control",
        description:
          "Web application built with React used to control an expense budget.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
        ],
        image: budgetControl,
        source_code_link: "https://github.com/cilfonegabriel/budget-control/tree/dev/budget-control",
        live_demo_link: "https://650a2f16de9fe8654850d9cb--grand-vacherin-07da4b.netlify.app/",
      },
      {
        name: "Cryptocurrency Quoter",
        description:
          "With this application you can quote a cryptocurrency instantly selected from different currencies.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
        ],
        image: cyptoQuote,
        source_code_link: "https://github.com/cilfonegabriel/cryptocurrency-quoter",
        live_demo_link: "https://cilfonegabriel.github.io/cryptocurrency-quoter/",
      },
      {
        name: "GuitarLA",
        description:
          "Online guitar store with a focus on fluid user experience, shopping cart, blog and efficient media management with Cloudinary. PostgreSQL database for robust product management.",
        tags: [
          {
            name: "NextJs",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "CSS",
            color: "green-text-gradient",
          },
        ],
        image: guitarla,
        source_code_link: "https://github.com/cilfonegabriel/guitarla-nextjs",
        live_demo_link: "https://guitarla-nextjs-psi.vercel.app/",
      },
      {
        name: "Insurance Quoter",
        description:
          "A React web app to get car insurance quotes. It uses the Context API to manage the global state of the form and offers an intuitive user experience with interactive features.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
          {
            name: "Tailwind",
            color: "green-text-gradient",
          },
        ],
        image: insurance,
        source_code_link: "https://github.com/cilfonegabriel/insurance-quoter",
        live_demo_link: "https://insurance-quoter-mkg5oqrtw-gabriels-projects-636b023b.vercel.app/",
      },
      {
        name: "Drink Finder",
        description:
          "Is a web application that allows you to search for drinks and view their recipes through a modal window. The application connects to an API to obtain data and information about the drinks. It is built with React, Vite and uses Context API for state management. It also uses Bootstrap for UI design and styling.",
        tags: [
          {
            name: "React Vite",
            color: "blue-text-gradient",
          },
          {
            name: "JavaScript",
            color: "pink-text-gradient",
          },
          {
            name: "Bootstrap",
            color: "blue-text-gradient",
          },
          {
            name: "HTML",
            color: "green-text-gradient",
          },
        ],
        image: drinks,
        source_code_link: "https://github.com/cilfonegabriel/drink-finder-react",
        live_demo_link: "https://drink-finder-react-fawn.vercel.app/",
      },
  ];
  
  export { socials,services, technologies, experiences, testimonials, projects };