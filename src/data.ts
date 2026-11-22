// All site content lives here. Edit text freely; the layout adapts.

export const profile = {
  name: 'Muhammad Hammad Mahmood',
  firstName: 'Muhammad Hammad',
  lastName: 'Mahmood',
  role: 'Software Engineer | Full Stack Developer',
  location: 'Lahore, Pakistan',
  oneLiner:
    'Final-year Software Engineering student shipping full-stack MERN, Angular and blockchain work, including a live finance CMS for a client.',
  email: 'hammadmahmood330@gmail.com',
  github: 'https://github.com/hammad-m19',
  linkedin: 'https://linkedin.com/in/muhammad-hammad-mahmood-a84664344',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  'Final-year Software Engineering student at UCP (Class of 2027) with two industry internships in Angular frontend development and software QA.',
  'I delivered a production Finance and Accounting CMS for 3H Group using the full MERN stack (React.js, Node.js, Express.js, MongoDB and JWT authentication). It is live and actively used by the client.',
  'My academic background spans full-stack development, blockchain, AI, OOP, DSA and game development. I am open to software engineering, full-stack and internship roles.',
]

export const experience = [
  {
    company: 'Big Entities',
    role: 'Software Engineer Intern',
    period: 'Aug 2025 – Oct 2025',
    place: 'Lahore, Pakistan',
    points: [
      "Built a production TypeScript/Angular frontend for TransRe's enterprise chatbot: reusable component library, RESTful API integration, responsive UI.",
      'Worked with backend engineers on third-party API integration within Agile sprints.',
      'Designed a full-stack blockchain land registry DApp with Solidity and Web3.js, including validation logic and integrity checks.',
      'Took part in code reviews, optimized performance and used Git throughout.',
    ],
  },
  {
    company: 'Mammoth-AI',
    role: 'Software Quality Assurance Intern',
    period: 'Jul 2024 – Sep 2024',
    place: 'Lahore, Pakistan',
    points: [
      'Ran functional, regression and usability tests across full-stack web applications and debugged issues to protect data integrity.',
      'Managed bug tickets and QA workflows in Jira within Agile/Scrum sprints.',
      'Contributed to test case design and QA documentation across the SDLC.',
    ],
  },
]

export const projects = [
  {
    title: '3H Group Finance & Accounting CMS',
    kind: 'Live client project',
    featured: true,
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    description:
      'Replaced Excel-based workflows at a construction company with a real-time web portal for expense tracking, cashflow management and accounting records. Deployed and in daily use.',
  },
  {
    title: 'AI-Powered Code Quality Analyzer',
    kind: 'Final year project',
    stack: ['Python', 'React.js', 'Next.js', 'MongoDB', 'REST APIs'],
    description:
      'Web-based static code analysis tool with automated test case generation and sandboxed code execution. A lightweight SonarQube with SQA intelligence. In development.',
  },
  {
    title: 'Blockchain Land Registry DApp',
    kind: 'Full-stack',
    stack: ['Solidity', 'Web3.js', 'JavaScript', 'Ethereum'],
    description:
      'Decentralized property transaction system with document-based workflows, validation and integrity checks for trustless land-buying on Ethereum.',
  },
  {
    title: 'E-Commerce Web Application',
    kind: 'University project',
    stack: ['MERN', 'JWT'],
    description:
      'Product listings, shopping cart, JWT-based authentication and order management.',
  },
  {
    title: 'Student Management System',
    kind: 'University project',
    stack: ['MERN'],
    description:
      'Student portal with enrollment management, grade tracking and a role-based admin dashboard.',
  },
  {
    title: 'Library Management System',
    kind: 'University project',
    stack: ['MERN'],
    description:
      'Book inventory, member records, issue/return tracking and search behind a component-based React UI.',
  },
  {
    title: 'Game Development Project',
    kind: 'University project',
    stack: ['OOP', 'DSA'],
    description:
      'Game built on OOP and Data Structures & Algorithms: game logic, state management and optimized performance.',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Web Design', 'Redux', 'React Hooks'] },
  { group: 'Backend and APIs', items: ['Node.js', 'Express.js', 'RESTful API Design & Integration', 'JWT Authentication'] },
  { group: 'Databases', items: ['MongoDB', 'Mongoose ODM', 'MySQL', 'PostgreSQL', 'NoSQL document modelling'] },
  { group: 'Blockchain and Web3', items: ['Solidity', 'Smart Contracts', 'Web3.js', 'Ethereum DApps'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Jira', 'VS Code', 'Postman', 'Agile / Scrum', 'Code Reviews', 'Problem Solving'] },
]

export const education = [
  {
    title: 'BS Software Engineering',
    where: 'University of Central Punjab (UCP), Lahore',
    period: '2023 – 2027',
  },
  {
    title: 'Mobile App Development for Android and iOS',
    where: 'LUMS (Lahore University of Management Sciences)',
    period: 'Course',
  },
  {
    title: 'Python Programming',
    where: 'PNY Trainings',
    period: 'Course',
  },
]
