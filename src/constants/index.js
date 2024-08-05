import {
    mobile,
    backend,
    creator,
    web,
    starbucks,
    jobit,
    screenrockets,
    tripguide,
    budget,
    clinic,
    budgetControl,
    cyptoQuote,
    guitarla,
    linkedin,
    insurance,
    drinks,
    kiosk,
    github,
    professional,
    betaloop,
    properatyds,
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
  
  const experiences = [
    {
      title: "Front End Developer",
      company_name: "Betaloop",
      icon: betaloop,
      iconBg: "#E6DEDD",
      date: "September 2023 - June 2024",
      points: [
        " Junior Front End Developer experienced in React and Tailwind CSS, with backend skills in Node.js",
        " Developed reusable components, integrated RESTful APIs, and optimized application performance.",
        " I applied state management improvements and developed authentication services, enhancing team efficiency and security.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "HIGHLIGHTED PERSONAL PROJECTS",
      icon: professional,
      iconBg: "#E6DEDD",
      date: "October 2022 - July 2024",
      points: [
        " Mastered intermediate and advanced topics in full-stack development while building 20+ full-stack projects.",
      ],
    },
    {
      title: "Mentor (Volunteer)",
      company_name: "Microverse",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "November 2022 - October 2023",
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
      {
        name: "Kiosk App",
        description:
          " It serves as a kiosk solution with a client-side interface for placing orders and a server-side system to manage and fulfill those orders. The app ensures a seamless user experience, real-time updates, and efficient data handling.Users can place orders, receive order confirmation, and track the preparation process. The system streamlines the order-to-delivery process, calculating the total amount to be paid.",
        tags: [
          {
            name: "NextJs",
            color: "blue-text-gradient",
          },
          {
            name: "Tailwind",
            color: "pink-text-gradient",
          },
          {
            name: "Prisma",
            color: "blue-text-gradient",
          },
          {
            name: "MySQL",
            color: "green-text-gradient",
          },
        ],
        image: kiosk,
        source_code_link: "https://github.com/cilfonegabriel/kioskapp-nextjs",
        live_demo_link: "https://kioskapp-nextjs-production.up.railway.app/",
      },
      {
        name: "Properaty",
        description:
          " A predictive model was developed to estimate property prices with high accuracy. Using Random Forest with depths max_depth=45 and max_depth=80, accuracy scores of 0.803 were obtained on test data. K-Means Clustering was also applied to identify patterns in property locations and characteristics, using the optimal number of clusters obtained from the elbow graph.",
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "Machine Learning",
            color: "pink-text-gradient",
          },
          {
            name: "Analytics",
            color: "blue-text-gradient",
          },
        ],
        image: properatyds,
        source_code_link: "https://github.com/cilfonegabriel/Properati-2/blob/main/Proyecto%202.ipynb",
        live_demo_link: "https://github.com/cilfonegabriel/Properati-2/blob/main/Proyecto%202.ipynb",
      },
      {
        name: "Predicting Traffic Flow at the Illia Highway Toll Booth",
        description:
          " A predictive model was developed to estimate traffic flow at the Illia for 2021. Using a neural network approach with an architecture of 3 hidden layers and 64 neurons per layer, accuracy scores of 0.85 were achieved on the test data. Support Vector Regression was applied to identify patterns in traffic flow, optimizing the model with hyperparameters tuned through cross-validation to enhance prediction accuracy.",
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "Machine and Deep Learning",
            color: "pink-text-gradient",
          },
        ],
        image: properatyds,
        source_code_link: "https://github.com/cilfonegabriel/Peaje-1/blob/main/Flujo-VehicularBsAs.ipynb",
        live_demo_link: "https://github.com/cilfonegabriel/Peaje-1/blob/main/Flujo-VehicularBsAs.ipynb",
      }
  ];
  
  export { socials,services, experiences, testimonials, projects };