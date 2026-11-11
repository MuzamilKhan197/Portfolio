// Edit this file to update your portfolio content.

export const featuredProjectLimit = 2;

export type ProjectDiscipline = "Full Stack" | "Frontend" | "Backend" | "UI/UX";

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  discipline: ProjectDiscipline;
  featured: boolean;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  repositoryUrl: string | null;
  liveUrl: string | null;
  screenshot: { src: string; alt: string; kind?: "screenshot" | "concept" } | null;
};

export const projects: Project[] = [
  {
    id: "veyro",
    number: "01",
    name: "Veyro",
    category: "Social Media Application",
    discipline: "Full Stack",
    featured: true,
    description:
      "A full stack social media web application built with Supabase.",
    longDescription:
      "Veyro is a social media web application that combines frontend development and backend services. It uses Supabase as part of its foundation to explore modern full stack development.",
    technologies: ["Supabase"],
    features: [
      "Social media web application",
      "Supabase integration",
      "Full stack development",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/veyro",
    liveUrl: "https://veyro2.netlify.app/",
    screenshot: {"src":"/projects/veyro.webp","alt":"Veyro public sign-in screen","kind":"screenshot"},
  },
  {
    id: "hcm-lite",
    number: "02",
    name: "HCM Lite",
    category: "Human Capital Management",
    discipline: "Full Stack",
    featured: true,
    description:
      "An HR management system with employee management and an AI assistant.",
    longDescription:
      "HCM Lite is a full stack HR management application that helps companies manage employees and daily HR activities. It includes company setup, employee registration, MongoDB integration, and an AI assistant that answers questions using real application data.",
    technologies: ["MongoDB", "AI Assistant"],
    features: [
      "Company setup by admin",
      "Employee registration",
      "HR management",
      "AI assistant using application data",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/hcm",
    liveUrl: "https://hcm-client-seven.vercel.app/",
    screenshot: {"src":"/projects/hcm-lite.webp","alt":"HCM Lite public sign-in screen","kind":"screenshot"},
  },
  {
    id: "taskflow",
    number: "03",
    name: "Taskflow",
    category: "Productivity Application",
    discipline: "Full Stack",
    featured: false,
    description:
      "A task management app to organize work and track daily tasks.",
    longDescription:
      "Taskflow is a productivity web application designed to help users organize tasks, manage their work, and stay focused through a simple interface.",
    technologies: [],
    features: ["Task organization", "Task management", "Clean user interface"],
    repositoryUrl: "https://github.com/MuzamilKhan197/taskflow",
    liveUrl: "https://taskflow02.vercel.app/",
    screenshot: {"src":"/projects/taskflow.webp","alt":"Taskflow live website interface","kind":"screenshot"},
  },
  {
    id: "liverr",
    number: "04",
    name: "LIVERR",
    category: "Freelance Marketplace",
    discipline: "Full Stack",
    featured: false,
    description:
      "A freelance marketplace web application currently in development.",
    longDescription:
      "LIVERR is an upcoming freelance marketplace project focused on creating a platform for freelancers and clients through a modern web interface.",
    technologies: [],
    features: [
      "Freelance marketplace concept",
      "Client and freelancer experience",
      "Under development",
    ],
    repositoryUrl: null,
    liveUrl: null,
    screenshot: {"src":"/projects/liverr-concept.webp","alt":"Illustrative concept cover for LIVERR","kind":"concept"},
  },
  {
    id: "aesthetique",
    number: "05",
    name: "AESTHETIQUE Clothing Web",
    category: "Fashion E-commerce",
    discipline: "Frontend",
    featured: false,
    description:
      "A modern clothing e-commerce website currently in development.",
    longDescription:
      "AESTHETIQUE is an upcoming fashion and clothing website focused on a modern shopping interface, clean product presentation, and a stylish design.",
    technologies: [],
    features: [
      "Fashion website design",
      "Product showcase concept",
      "Under development",
    ],
    repositoryUrl: null,
    liveUrl: null,
    screenshot: {"src":"/projects/aesthetique-concept.webp","alt":"Illustrative concept cover for AESTHETIQUE Clothing Web","kind":"concept"},
  },
  {
    id: "weatherhub",
    number: "06",
    name: "WeatherHub",
    category: "Weather Application",
    discipline: "Frontend",
    featured: false,
    description:
      "A weather app that displays current weather information and forecasts.",
    longDescription:
      "WeatherHub is a weather application that helps users check current weather conditions and forecast information through a simple and responsive interface.",
    technologies: [],
    features: [
      "Weather information",
      "Weather forecasts",
      "Responsive interface",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/weather-web",
    liveUrl: "https://weatherhub02.netlify.app",
    screenshot: {"src":"/projects/weatherhub.webp","alt":"WeatherHub live website interface","kind":"screenshot"},
  },
  {
    id: "apple-website-clone",
    number: "07",
    name: "Apple Website UI Clone",
    category: "Website UI Clone",
    discipline: "Frontend",
    featured: false,
    description:
      "A responsive Apple website clone with a clean and modern design.",
    longDescription:
      "A frontend clone of the Apple website homepage, built to practice modern layouts, responsive design, and clean user interfaces.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Responsive layout",
      "Modern UI design",
      "Apple-inspired homepage",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/Apple-CLone",
    liveUrl: "https://appclone002.netlify.app/",
    screenshot: {"src":"/projects/apple-website-clone.webp","alt":"Apple Website UI Clone live website interface","kind":"screenshot"},
  },
  {
    id: "amazon-website-clone",
    number: "08",
    name: "Amazon Website UI Clone",
    category: "E-commerce UI Clone",
    discipline: "Frontend",
    featured: false,
    description:
      "An Amazon homepage clone featuring product sections and navigation.",
    longDescription:
      "A responsive frontend clone of the Amazon website, focusing on product layouts, navigation menus, and e-commerce interface design.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Product grid layout",
      "Navigation bar",
      "Responsive e-commerce UI",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/Amazon-CLone",
    liveUrl: "https://amzoneclone002.netlify.app/",
    screenshot: {"src":"/projects/amazon-website-clone.webp","alt":"Amazon Website UI Clone live website interface","kind":"screenshot"},
  },
  {
    id: "blog-website",
    number: "09",
    name: "Blog Website",
    category: "Blog Website",
    discipline: "Frontend",
    featured: false,
    description:
      "A simple and responsive blog website with a clean reading experience.",
    longDescription:
      "A modern blog website designed to display articles and blog content with a clean layout, easy navigation, and responsive design.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    features: ["Blog layout", "Responsive design", "Easy navigation"],
    repositoryUrl: "https://github.com/MuzamilKhan197/Global-Adventures-Blog",
    liveUrl: "https://muzamilblog.netlify.app/",
    screenshot: {"src":"/projects/blog-website.webp","alt":"Blog Website live website interface","kind":"screenshot"},
  },
  {
    id: "job-portal-ui",
    number: "10",
    name: "Job Portal UI",
    category: "Job Portal Website",
    discipline: "Frontend",
    featured: false,
    description: "A responsive job portal interface with a modern layout.",
    longDescription:
      "A frontend job portal website designed to display job opportunities with clear sections, simple navigation, and a responsive user interface.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    features: [
      "Job listing interface",
      "Responsive layout",
      "Simple navigation",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/Hiringmine-CLone",
    liveUrl: "https://hiringmineclone002.netlify.app/",
    screenshot: {"src":"/projects/job-portal-ui.webp","alt":"Job Portal UI live website interface","kind":"screenshot"},
  },
  {
    id: "pokemon-website-clone",
    number: "11",
    name: "Pokémon Website UI Clone",
    category: "Website UI Clone",
    discipline: "Frontend",
    featured: false,
    description: "A responsive frontend clone of the official Pokémon website.",
    longDescription:
      "A Pokémon-inspired website UI clone created to practice frontend development, page structure, styling, and responsive layouts.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Pokémon-inspired design", "Responsive layout", "Homepage UI"],
    repositoryUrl: "https://github.com/MuzamilKhan197/Pokemon-CLone",
    liveUrl: "https://pokemonclone002.netlify.app/",
    screenshot: {"src":"/projects/pokemon-website-clone.webp","alt":"Pokémon Website UI Clone live website interface","kind":"screenshot"},
  },
  {
    id: "todo-list",
    number: "12",
    name: "To-Do List",
    category: "Task Management Application",
    discipline: "Frontend",
    featured: false,
    description: "A to-do list application for managing daily tasks.",
    longDescription:
      "A responsive to-do list and project hub that helps users organize daily activities, manage task priorities, and switch between light and dark themes.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Task management",
      "Priority filters",
      "Local storage",
      "Dark mode",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/todo-list",
    liveUrl: "https://todolist-002.netlify.app/",
    screenshot: {"src":"/projects/todo-list.webp","alt":"To-Do List live website interface","kind":"screenshot"},
  },
  {
    id: "calculator",
    number: "13",
    name: "Calculator",
    category: "JavaScript Application",
    discipline: "Frontend",
    featured: false,
    description: "A simple calculator for basic mathematical operations.",
    longDescription:
      "A responsive calculator application that performs basic arithmetic operations with an easy-to-use interface and light and dark themes.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Basic calculations",
      "Responsive design",
      "Light and dark mode",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/calculator",
    liveUrl: "https://muzamilkhan197.github.io/calculator/",
    screenshot: {"src":"/projects/calculator.webp","alt":"Calculator live website interface","kind":"screenshot"},
  },
  {
    id: "counter-application",
    number: "14",
    name: "Counter Application",
    category: "JavaScript Application",
    discipline: "Frontend",
    featured: false,
    description:
      "A basic counter app to increase, decrease, and reset numbers.",
    longDescription:
      "A simple JavaScript counter application built to practice DOM manipulation and event handling through interactive buttons.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Increase counter", "Decrease counter", "Reset counter"],
    repositoryUrl: "https://github.com/MuzamilKhan197/Counter-Application",
    liveUrl: "https://muzamilkhan197.github.io/Counter-Application/",
    screenshot: {"src":"/projects/counter-application.webp","alt":"Counter Application live website interface","kind":"screenshot"},
  },
  {
    id: "dice-game",
    number: "15",
    name: "Dice Game",
    category: "Browser Game",
    discipline: "Frontend",
    featured: false,
    description: "A fun JavaScript dice game that generates random results.",
    longDescription:
      "A simple browser-based dice game where dice are rolled randomly and the winner is displayed based on the results.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Random dice rolls", "Winner detection", "Interactive gameplay"],
    repositoryUrl: "https://github.com/MuzamilKhan197/dice-game",
    liveUrl: "https://muzamilkhan197.github.io/dice-game/",
    screenshot: {"src":"/projects/dice-game.webp","alt":"Dice Game live website interface","kind":"screenshot"},
  },
  {
    id: "tic-tac-toe",
    number: "16",
    name: "Tic Tac Toe",
    category: "Browser Game",
    discipline: "Frontend",
    featured: false,
    description: "A classic Tic Tac Toe game with interactive gameplay.",
    longDescription:
      "A responsive Tic Tac Toe game built with JavaScript, featuring player turns, winner detection, and a simple game interface.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Two-player gameplay",
      "Winner detection",
      "Interactive game board",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/tic-tac-toe",
    liveUrl: "https://tic-tac02.netlify.app",
    screenshot: {"src":"/projects/tic-tac-toe.webp","alt":"Tic Tac Toe live website interface","kind":"screenshot"},
  },
  {
    id: "color-flipper",
    number: "17",
    name: "Color Flipper",
    category: "JavaScript Application",
    discipline: "Frontend",
    featured: false,
    description: "A simple app that changes background colors with a click.",
    longDescription:
      "An interactive color flipper application that generates random colors and supports custom color input with instant background updates.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Random color generation",
      "Custom color input",
      "Live background updates",
    ],
    repositoryUrl: "https://github.com/MuzamilKhan197/Color-Flipper",
    liveUrl: "https://muzamilkhan197.github.io/Color-Flipper/",
    screenshot: {"src":"/projects/color-flipper.webp","alt":"Color Flipper live website interface","kind":"screenshot"},
  },
  {
    id: "number-guess",
    number: "18",
    name: "Number Guess",
    category: "Browser Game",
    discipline: "Frontend",
    featured: false,
    description: "A number guessing game with instant feedback.",
    longDescription:
      "A simple JavaScript game where users try to guess a randomly generated number and receive feedback after each attempt.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: ["Random number generation", "User guesses", "Instant feedback"],
    repositoryUrl: "https://github.com/MuzamilKhan197/guess-the-num",
    liveUrl: "https://num-guess2.netlify.app",
    screenshot: {"src":"/projects/number-guess.webp","alt":"Number Guess live website interface","kind":"screenshot"},
  },
];
