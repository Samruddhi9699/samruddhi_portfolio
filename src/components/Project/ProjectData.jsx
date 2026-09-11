import swachetna from "../../assets/projects/swachetna.png";
import getsitego from "../../assets/projects/getsitego.png";
import jmkc from "../../assets/projects/jmkc.png";
import jmkcGroup from "../../assets/projects/jmkc-group.png";

const ProjectData = [
    {
        title: "JMKC Group",
        description:
        "Corporate website for JMKC Group's core business — renewable energy, power, infrastructure and industrial automation, with turnkey EPC execution and maintenance services across solar, wind and hybrid projects, plus a client portfolio and inquiry contact system.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        image: jmkcGroup,
        liveLink: "https://dailyupdate1.vercel.app/",
        categories: ["Web"],
        featured: true,
    },
    {
        title: "JMKC — Heavy Machinery & Mining",
        description:
        "Corporate site for JMKC's mining and export business, covering heavy machinery, mineral operations across Odisha, Jharkhand and Chhattisgarh, logistics/transport, and global export documentation and compliance for buyers in 15+ countries.",
        tech: ["Next.js", "React", "Tailwind CSS"],
        image: jmkc,
        liveLink: "https://jmkc-heavy-machinery.vercel.app/",
        categories: ["Web"],
        featured: true,
    },
    {
        title: "Swachetna",
        description:
        "Production platform for a Pune-based nonprofit foundation. Sole developer of the entire platform — built the responsive Next.js frontend, integrated Strapi CMS so admins can manage content and media without touching code, and implemented the full donation flow through Razorpay with secure payment verification. Also handled production deployment and domain configuration end to end.",
        tech: ["Next.js", "React", "Strapi", "Node.js", "Razorpay", "Tailwind CSS", "Vercel", "cPanel"],
        image: swachetna,
        liveLink: "https://swachetna.org/",
        categories: ["Web"],
        featured: true,
    },
    {
        title: "GetSiteGo",
        description:
        "A full-stack business management platform built end to end. Developed RESTful APIs and authentication workflows handling business logic, user access and data management, designed a quotation-to-invoice workflow with quotation acceptance and invoice generation, integrated Strapi CMS for content management, and implemented payment and email workflows for transactions and customer communication.",
        tech: ["Next.js", "React", "Node.js", "Express.js", "Strapi", "PostgreSQL"],
        image: getsitego,
        liveLink: "https://getsitego.in/",
        categories: ["Web"],
        featured: true,
    },
    {
        title: "Personality Clash",
        description:
        "A two-player AI compatibility game. Pick a relationship dynamic — romantic, dating, friendship, work, family or roommate — and GPT-4o-mini generates ten personality questions tailored to it. Both players answer independently, and once both submit, the AI returns a shareable compatibility report with clash points, strengths and a prediction, synced live through Firestore.",
        tech: ["React 19", "TypeScript", "Firebase", "OpenAI API", "Tailwind CSS"],
        githubLink: "https://github.com/Samruddhi9699/personality-clash",
        categories: ["Web", "AI"],
    },
    {
        title: "Wappr",
        description:
        "A self-hosted WhatsApp bulk messaging dashboard built on whatsapp-web.js. Log in with your own WhatsApp by scanning a QR code, then send single or bulk messages — text and media — to any list of contacts from a clean dashboard. No external services required, with Docker support for one-command deployment.",
        tech: ["Next.js", "whatsapp-web.js", "Docker"],
        githubLink: "https://github.com/Samruddhi9699/wappr",
        categories: ["Web"],
    },
    {
        title: "FSD Task — User Dashboard",
        description:
        "A full-stack assignment pairing a Next.js and TypeScript dashboard with a Firebase Cloud Functions and Firestore backend. Supports full CRUD on user records — add, update, delete and list — and ships containerized with Docker.",
        tech: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Docker"],
        githubLink: "https://github.com/Samruddhi9699/FSDTask",
        categories: ["Web"],
    },
    {
        title: "Book Review API",
        description:
        "A RESTful API built with Node.js and PostgreSQL for managing books, user accounts and reviews. Includes user registration, JWT-based login, and full CRUD operations for books and reviews.",
        tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
        githubLink: "https://github.com/Samruddhi9699/Book-review-api",
        categories: ["Web"],
    },
    {
        title: "Structify",
        description:
        "A user-friendly web app for learning data structures interactively, with dynamic visualizations that show how the flow works alongside concise theory.",
        tech: ["React", "Vite"],
        githubLink: "https://github.com/Samruddhi9699/structify",
        categories: ["Web"],
    },
    {
        title: "Todo App",
        description:
        "A simple, responsive task manager built with React and Vite — add, complete, edit and delete tasks from a clean, fast interface.",
        tech: ["React", "Vite", "Tailwind CSS"],
        githubLink: "https://github.com/Samruddhi9699/Todo",
        categories: ["Web"],
    },
    {
        title: "Todo List",
        description:
        "Another take on the task manager — React and Vite front end for quickly capturing and tracking to-dos.",
        tech: ["React", "Vite", "Tailwind CSS"],
        githubLink: "https://github.com/Samruddhi9699/todo-list",
        categories: ["Web"],
    },
]

export default ProjectData;
