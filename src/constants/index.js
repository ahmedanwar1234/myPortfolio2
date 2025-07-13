export const myProjects = [
  {
    id: 1,
    title: "Airbnb Clone",
    description:
      "A fully responsive Airbnb-style rental application that allows users to list, book, and manage vacation properties. Built using Next.js 14, Prisma, and Tailwind CSS, with advanced authentication, location features, and modern UI components.",
    subDescription: [
      "Authentication with Clerk and NextAuth, including secure sessions, JWT, and role-based access",
      "Users can list properties with detailed forms (images, amenities, pricing, availability)",
      "Map-based search and geo-filtering using Leaflet, React-Leaflet, and world-countries",
      "Fully styled with TailwindCSS, with theme switching (light/dark) using next-themes",
      "State managed with Zustand, ensuring lightweight and scalable client-side logic"
    ],
    href: "https://github.com/ahmedanwar1234/arbinb",
    logo: "",
    image: "/assets/projects/airbnb.jpeg",
    tags: [
      {
        id: 1,
        name: "Next js",
        path: "/assets/logos/N.svg",
      },  
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      }, {
        id: 3,
        name: "Mongodb",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
    id: 2,
  title: "Full-Stack Blog App",
  description:
    "A complete blogging platform featuring rich-text editing, image uploads, and secure authentication using JWT.",
  subDescription: [
    "Built a full-featured blog editor with Tiptap, supporting code blocks, images, color formatting, and HTML parsing.",
    "Developed a RESTful API using Express.js and MongoDB for post, user, and media management.",
    "Implemented secure user authentication with JWT and hashed passwords using bcrypt.",
    "Integrated image upload functionality with Multer and React Easy Crop for enhanced UX.",
    "Used Redux Toolkit and React Query for efficient state and data handling.",
    "Styled the frontend with Material UI, Tailwind CSS, and styled-components for a polished UI.",
    "Set up protected routes, toast notifications, and form validation for a complete user experience.",
    "Tested frontend components using React Testing Library and managed logs via Morgan on the backend.",
  ],
    href: "https://vite-react-rho-pied.vercel.app/",
    logo: "",
    image: "/assets/projects/blogApp.jpeg",
    tags: [
     
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      }, {
        id: 4,
        name: "Mongodb",
        path: "/assets/logos/mongodb.svg",
      },
    ],
  },
  {
   "id": 3,
  "title": "Fitness Trainer Website",
  "description": "A modern and responsive website for a personal trainer, built with React and Vite, featuring clean UI and multiple interactive pages.",
  "subDescription": [
    "Built using Vite and React for fast performance and efficient development.",
    "Created multiple static and dynamic pages such as Home, About, Services, Contact, and Plans.",
    "Implemented routing and navigation using React Router v6.",
    "Managed shared data using Redux Toolkit (e.g., user sessions, form state, or plan details).",
    "Integrated Axios for contact forms or dynamic data fetching from backend.",
    "Styled with Tailwind CSS for a responsive, clean, and mobile-friendly layout.",
    "Enhanced user experience using React Icons and smooth transitions."
  ],
    href: "https://vite-react-rho-pied.vercel.app/",
    logo: "",
    image: "/assets/projects/fitnessGym.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    "title": "Organic Food Website",
  description: "A modern, eco-conscious landing page for organic food products, built with SvelteKit and Tailwind CSS.",
  "subDescription": [
    "Developed using SvelteKit for fast performance, optimized routing, and modern frontend architecture.",
    "Tailwind CSS used for a clean, responsive design tailored to natural and organic brand aesthetics.",
    "Custom fonts and visuals powered by @fontsource and confetti effects via @neoconfetti/svelte for playful interactions.",
    "Built with Vite for lightning-fast dev experience and build optimization.",
    "PostCSS and Autoprefixer used for cross-browser styling and production readiness.",
    "Configured for deployment with Vercel using @sveltejs/adapter-vercel.",
    "Ideal for promoting organic brands, eco-friendly products, and sustainable food campaigns."
  ],
    href: "https://organic2-eight.vercel.app/news/6",
    logo: "/organic.png",
    image: "/organic.png",
    tags: [
      {
        id: 1,
        name: "Svelte js",
        path: "/assets/logos/svelte-icon.svg",
      }
    ],
  },
  {
    id: 5,
    title: "Ecommerce Shop Starter",
   "description": "A fast, responsive e-commerce frontend built with React and Tailwind CSS.",
  "subDescription": [
    "Client-side routing using React Router v6 for smooth navigation between pages.",
    "Responsive product listing grid showing product images, names, and prices.",
    "Product details page for individual item views (if implemented).",
    "Shopping cart UI with add-to-cart functionality (if implemented).",
    "Tailwind CSS utility classes for clean, responsive styling.",
    "Static deployment setup with gh-pages for easy hosting.",
    "Performance optimizations with PostCSS and Autoprefixer.",
    "Modern UI icons provided by React Icons."
  ],
  "tools": [
    "React",
    "React Router",
    "Tailwind CSS",
    "React Testing Library",
    "Jest-DOM",
    "PostCSS",
    "Autoprefixer",
    "React Icons",
    "gh-pages"
  ],
    href: "https://ecommerce-shop-starter-seven.vercel.app/",
    logo: "",
    image: "/assets/projects/ecommerc.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
     
   
    ],
  },
  {
    id: 6,
   "title": "Travel UI/UX Website",
  "description": "A sleek and modern travel-themed website focused on user experience and visual design.",
  "subDescription": [
    "Designed with a clean, intuitive layout for showcasing travel destinations or agencies.",
    "Built using React and Next.js 14 for optimized routing and performance.",
    "Styled using Tailwind CSS to ensure responsiveness across devices.",
    "Focus on modern UI components, hero sections, grids, and call-to-actions.",
    "Ideal for presenting travel packages, blogs, or destination highlights.",
    "Includes TypeScript setup for safer and scalable development.",
    "Optimized with PostCSS and Autoprefixer for cross-browser styling."
  ],
    href: "https://travel-sage-seven.vercel.app/",
    logo: "",
    image: "/assets/projects/travel.png",
    tags: [
      {
        id: 1,
        name: "Next js",
        path: "/assets/logos/N.svg",
      },
 
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
  href:"https://wa.me/201018568892" ,
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ahmed-anwar-%20%20%20%20%2004173725b",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmed_anwer_a/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    job: "",
    date: "2022-2023",
    contents: [
      "                    Built full-stack applications using MERN stack (MongoDB, Express, React, Node.js)"
,
      "                    Gained experience in authentication, CRUD operations, deployment, and Git",
      

    ],
  },
  {
    title: "DevOps & Cloud Enthusiast",
    job: "",
    date: "2023-2024",
    contents: [
"                    Learning and applying DevOps practices and cloud technologies (AWS, CI/CD, Docker, etc.)"    ,
"                    Provisioned cloud infrastructure on AWS (EC2, S3, Lambda, CloudFront)",
"                    Created CI/CD pipelines for automated testing and deployment"
]},
  
];
