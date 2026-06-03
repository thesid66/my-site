export type AboutCard = {
  title: string
  text: string
}

export type SkillGroup = {
  category: string
  description: string
  items: string[]
}

export type SkillItem = {
  label: string
  level: number
}

export type Project = {
  title: string
  type: string
  image: string
  description: string
  tags: string[]
  features: string[]
  problem: string
  solution: string
  result: string
  linkLabel: string
  link: string
}

export type Experience = {
  period: string
  role: string
  company: string
  description: string
  points?: string[]
}

export type ContactMethod = {
  label: string
  value: string
  href: string
  note: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type ProcessStep = {
  number: string
  title: string
  text: string
}

export const aboutCards: AboutCard[] = [
  {
    title: 'Web Development Background',
    text: 'Over 12 years of experience building websites, web applications and custom digital systems for businesses and organisations.'
  },
  {
    title: 'WordPress & CMS Expertise',
    text: 'Strong experience with WordPress, Elementor, ACF, custom post types, shortcodes, performance optimisation and custom functionality.'
  },
  {
    title: 'Business System Thinking',
    text: 'Experience planning and building practical systems such as payroll, attendance, leave management, inventory, purchase and sales workflows.'
  }
]

export const focusAreas = [
  'Fast personal and business websites',
  'WordPress to static website migration',
  'Laravel and PHP web applications',
  'Angular and frontend interfaces',
  'Custom business workflows',
  'Clean, maintainable code structure',
  'React and MERN stack web applications'
]

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend Development',
    description: 'Building clean, responsive and interactive interfaces.',
    items: ['HTML', 'React', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Tailwind CSS', 'Astro']
  },
  {
    category: 'Backend Development',
    description: 'Developing APIs, application logic and database-connected systems.',
    items: [
      'PHP',
      'Laravel',
      'MySQL',
      'REST APIs',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Authentication',
      'CRUD Systems'
    ]
  },
  {
    category: 'WordPress & CMS',
    description: 'Customising WordPress beyond standard themes and plugins.',
    items: ['WordPress', 'Elementor', 'ACF', 'Custom Post Types', 'Shortcodes', 'Custom Plugins']
  },
  {
    category: 'Business Systems',
    description: 'Planning and building practical systems for real business operations.',
    items: ['Payroll', 'Attendance', 'Leave Management', 'Inventory', 'Purchase', 'Sales']
  },
  {
    category: 'AI-Assisted Development',
    description:
      'Using GPT tools, structured prompting and AI-assisted workflows to plan, debug, refactor and speed up development without losing control of code quality.',
    items: [
      'GPT Workflow Management',
      'Prompt Engineering',
      'AI-assisted Debugging',
      'Code Refactoring',
      'Vibe Coding',
      'Technical Planning',
      'Documentation Support'
    ]
  }
]

export const technicalSkills: SkillItem[] = [
  { label: 'Web Design', level: 80 },
  { label: 'PHP / MySQL', level: 85 },
  { label: 'jQuery / JavaScript / JS Frameworks', level: 75 },
  { label: 'Graphics', level: 50 },
  { label: 'WordPress / Elementor', level: 95 },
  { label: 'PHP / MySQL', level: 90 },
  { label: 'Laravel', level: 85 },
  { label: 'React / Angular', level: 90 },
  { label: 'System Analysis', level: 88 },
  { label: 'GPT Workflow / AI-assisted Development', level: 82 }
]

export const professionalSkills: SkillItem[] = [
  { label: 'Communication', level: 85 },
  { label: 'Social Media Marketing', level: 95 },
  { label: 'Leadership', level: 90 },
  { label: 'Decision Making', level: 85 },
  { label: 'Problem Solving', level: 90 },
  { label: 'Project Planning', level: 88 },
  { label: 'Client Coordination', level: 87 },
  { label: 'Team Collaboration', level: 86 },
  { label: 'Time Management', level: 89 }
]

export const projects: Project[] = [
  {
    title: 'Kasthamandap Supermercado',
    type: 'Laravel eCommerce Website',
    image: '/images/projects/kasthamandap.webp',
    description:
      'A modern eCommerce website with product management, checkout, order handling and Filament-powered admin controls.',
    tags: ['Laravel', 'Filament', 'Livewire', 'Tailwind', 'MySQL'],
    features: ['Product catalogue', 'Checkout flow', 'Admin panel', 'Order management'],
    problem: 'Needed a modern online store with manageable products, checkout and order flow.',
    solution:
      'Built a Laravel-based eCommerce system with Filament admin tools and structured product/order management.',
    result:
      'Created a scalable business-ready store structure that can support real product, checkout and admin workflows.',
    linkLabel: 'View Case Study',
    link: '#'
  },
  // {
  //   title: 'Payroll & Inventory Management System',
  //   type: 'Business Management System',
  //   image: '/images/projects/payroll-inventory.webp',
  //   description:
  //     'A custom Angular, PHP and MySQL-based system covering employee profiles, attendance, leave, salary, payroll, inventory, purchase and sales.',
  //   tags: ['Angular', 'PHP', 'MySQL', 'REST API', 'Payroll'],
  //   features: ['Attendance', 'Leave requests', 'Payroll', 'Inventory', 'Sales & purchase']
  // },
  {
    title: 'NEPAFE Website',
    type: 'WordPress / Elementor Website',
    image: '/images/projects/nepafe.webp',
    description:
      'A WordPress website using Elementor, ACF, custom post types, useful links, filtering logic and content management features.',
    tags: ['WordPress', 'Elementor', 'ACF', 'PHP', 'CPT'],
    features: ['Custom post types', 'ACF filters', 'Useful links', 'Popup content'],
    problem:
      'Needed a flexible content-managed website with structured resources and useful link filtering.',
    solution: 'Used WordPress, Elementor, ACF and custom PHP logic to organise dynamic content.',
    result:
      'Improved content management and created a cleaner structure for users to access organised resources.',
    linkLabel: 'View Website',
    link: '#'
  },
  {
    title: 'Calorie Calculator App',
    type: 'Full-stack Health Tracking App',
    image: '/images/projects/calorie-calculator.webp',
    description:
      'A calorie tracking application designed to manage food records, custom food entries and nutrition-related calculations through a structured backend API.',
    tags: ['Laravel', 'API', 'Database', 'Authentication', 'Food Tracking'],
    features: ['Food database', 'Custom food entries', 'Calorie tracking', 'API-based structure'],
    problem: 'Needed a structured way for users to track food, calories and nutrition goals.',
    solution:
      'Planned and built an authenticated Laravel API with food records, custom entries and goal tracking.',
    result:
      'Created a scalable foundation for a calorie tracking system that can later support web and mobile apps.',
    linkLabel: 'View Project',
    link: '#'
  },
  {
    title: 'World Cup 2026 Predictor',
    type: 'Interactive Prediction App',
    image: '/images/projects/wcpredictor.webp',
    description:
      'An interactive football prediction application for the 2026 World Cup, designed around match predictions, tournament logic and user-friendly result tracking.',
    tags: ['Prediction App', 'Football', 'World Cup 2026', 'Frontend', 'Interactive UI'],
    features: ['Match predictions', 'Tournament flow', 'Result tracking', 'Interactive experience'],
    problem:
      'Needed a fun and interactive way to predict World Cup matches and tournament progress.',
    solution:
      'Designed an interactive prediction interface around match selection, tournament flow and result tracking.',
    result:
      'Created an engaging football prediction experience that can be expanded as tournament details are confirmed.',
    linkLabel: 'View Project',
    link: 'https://wcpredict.gautamsiddhartha.com.np/'
  },
  {
    title: 'Personal Static Website',
    type: 'Astro Portfolio Website',
    image: '/images/projects/personal-website.webp',
    description:
      'A lightweight static personal website replacing WordPress, designed for speed, cleaner maintenance and Render deployment.',
    tags: ['Astro', 'Tailwind', 'Static Site', 'Render'],
    features: ['No database', 'No plugins', 'Fast loading', 'Git deployment'],
    problem: 'Needed a faster and easier-to-maintain personal website without WordPress overhead.',
    solution: 'Rebuilt the site as a static Astro and Tailwind website with Git-based deployment.',
    result: 'Created a cleaner, faster and more maintainable personal brand website.',
    linkLabel: 'View Website',
    link: 'https://gautamsiddhartha.com.np/'
  }
]

export const experiences: Experience[] = [
  {
    period: 'Current',
    role: 'Independent Web Developer',
    company: 'Nepal / Remote',
    description:
      'Building lightweight websites, Laravel applications, WordPress solutions and custom business systems for practical real-world use.',
    points: [
      'Astro and Tailwind personal website development',
      'Laravel and Angular-based business systems',
      'WordPress to static website migration planning'
    ]
  },
  {
    period: 'Feb 2023 — Mar 2025',
    role: 'Web Administrator / Developer Programmer',
    company: 'Resonate Business Ignition, Australia',
    description:
      'Managed and updated the company website and client websites with necessary information, content updates and development support.',
    points: [
      'Maintained and updated company and client websites',
      'Worked on website content, layout updates and improvements',
      'Supported business-focused web development and administration tasks'
    ]
  },
  {
    period: 'Mar 2017 — Mar 2018',
    role: 'Web Developer',
    company: 'National Reexport construction Authority, Nepal',
    description:
      'Worked as a contracted web designer and developer for a government agency project, supporting custom project recording and information management needs.',
    points: [
      'Designed and developed a government agency web project',
      'Worked on project information recording and management features',
      'Delivered contract-based development support for public-sector requirements'
    ]
  },
  {
    period: 'Project Based',
    role: 'Freelancer Web Developer',
    company: 'Elite Technology',
    description: 'Designed and developed different web projects on a freelance and project basis.',
    points: [
      'Built client-focused websites and web projects',
      'Handled project-based design and development tasks',
      'Worked with flexible requirements depending on each client project'
    ]
  },
  {
    period: 'Nov 2012 — Feb 2017',
    role: 'Senior Web Developer',
    company: 'Himalayan Institute of Technology, Nepal',
    description:
      'Took responsibility as a senior web developer and completed different website and web application projects.',
    points: [
      'Led and completed multiple website and web application projects',
      'Handled senior-level development responsibilities',
      'Worked with PHP, MySQL, frontend development and CMS-based website work'
    ]
  },
  {
    period: 'Nov 2011 — Aug 2012',
    role: 'Assistant Web Developer',
    company: 'Himalayan Institute of Technology, Nepal',
    description:
      'Supported the senior developer with website and web application design and development tasks.',
    points: [
      'Assisted in website and web application development',
      'Supported senior developers with assigned technical tasks',
      'Built early professional experience in practical web development'
    ]
  },
  {
    period: 'Jul 2009 — May 2011',
    role: 'Instructor',
    company: 'Himalayan Institute of Technology, Nepal',
    description:
      'Instructed trainees in office software, website design, graphic design and other practical software and technology skills.',
    points: [
      'Taught trainees office software and practical computer skills',
      'Provided training in website and graphic design basics',
      'Built strong communication, instruction and technical explanation skills'
    ]
  }
]

export const contactMethods: ContactMethod[] = [
  {
    label: 'Email',
    value: 'sid_dus@yahoo.com',
    href: 'mailto:sid_dus@yahoo.com',
    note: 'Best for project enquiries and detailed messages.'
  },
  {
    label: 'WhatsApp / Phone',
    value: '+977 9814999982',
    href: 'https://wa.me/9779814999982',
    note: 'Best for quick communication and follow-up.'
  },
  {
    label: 'LinkedIn',
    value: 'Siddhartha Gautam',
    href: 'https://www.linkedin.com/in/siddhartha-gautam-748935144/',
    note: 'Connect with me professionally.'
  },
  {
    label: 'Website',
    value: 'gautamsiddhartha.com.np',
    href: 'https://gautamsiddhartha.com.np',
    note: 'My personal portfolio and online profile.'
  }
]

export const serviceEnquiries = [
  'Personal or business website',
  'WordPress customisation',
  'Laravel web application',
  'React / MERN stack application',
  'Angular frontend interface',
  'Business management system',
  'Website migration or rebuild'
]

export const testimonials = [
  {
    quote:
      "I am impressed with the exceptional work you have done in developing a web application that records project information. Your technical proficiency, attention to detail, and dedication to delivering a high-quality solution that meets our organization's needs have been outstanding. Your ability to understand and address our requirements and your willingness to go above and beyond in ensuring that the application meets our expectations have been remarkable. Your professionalism, communication skills, and collaboration with our team have been exemplary, and I would highly recommend you to anyone looking for a skilled and dependable software developer.",
    name: 'Naresh Giri',
    role: 'Senior Project Officer (Urban Development), ADB'
  }
]
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    text: 'Understand the business goal, target users, required features and the actual problem the website or system needs to solve.'
  },
  {
    number: '02',
    title: 'Plan',
    text: 'Prepare the sitemap, content structure, user flow, database idea or technical direction before starting development.'
  },
  {
    number: '03',
    title: 'Build',
    text: 'Develop the frontend, backend, CMS setup, admin panel or custom workflow using clean and maintainable code.'
  },
  {
    number: '04',
    title: 'Improve',
    text: 'Test, refine, optimise performance, fix issues and prepare the project for real use, handover or deployment.'
  }
]
