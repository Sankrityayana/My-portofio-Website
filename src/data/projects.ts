export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    demoUrl: string;
    githubUrl: string;
    featured?: boolean;
    fullDescription?: string; // For the details page
    challenges?: string;      // For the details page
    solutions?: string;       // For the details page
}

export const allProjects: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, user authentication, and payment processing integration.',
        fullDescription: 'This e-commerce platform was built to provide a seamless shopping experience. It features a robust backend for managing inventory, orders, and user data, while the frontend offers a responsive and intuitive interface. Key features include real-time stock updates, secure payment processing via Stripe, and a comprehensive admin dashboard.',
        challenges: 'Handling complex state management for the shopping cart and ensuring secure transactions were primary challenges.',
        solutions: 'Implemented Redux for global state management and utilized Stripe webhooks for secure payment verification.',
        image: 'https://via.placeholder.com/600x400/1e293b/6366f1?text=E-Commerce',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '2',
        title: 'Task Management App',
        description: 'Productivity tool for teams to organize tasks, set deadlines, and track progress with real-time updates.',
        fullDescription: 'A collaborative task management tool designed for remote teams. It allows users to create boards, lists, and cards to organize their workflow. Real-time updates ensure everyone stays on the same page.',
        challenges: 'Synchronizing state across multiple users in real-time.',
        solutions: 'Used Firebase Realtime Database to listen for changes and update the UI instantly.',
        image: 'https://via.placeholder.com/600x400/1e293b/06b6d4?text=Task+App',
        tags: ['TypeScript', 'Firebase', 'Tailwind', 'React'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '3',
        title: 'Portfolio Design',
        description: 'Modern portfolio website template with smooth animations and responsive design for creative professionals.',
        fullDescription: 'This project demonstrates high-end frontend design capabilities, utilizing advanced animations and a strict design system.',
        image: 'https://via.placeholder.com/600x400/1e293b/ef4444?text=Portfolio',
        tags: ['React', 'Framer Motion', 'CSS Modules'],
        category: 'Design',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '4',
        title: 'Fitness Tracker Mobile App',
        description: 'Mobile application to track workouts, monitor progress, and set fitness goals with social sharing features.',
        image: 'https://via.placeholder.com/600x400/1e293b/10b981?text=Fitness+App',
        tags: ['React Native', 'Redux', 'API Integration'],
        category: 'Mobile',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '5',
        title: 'Financial Dashboard',
        description: 'Data visualization dashboard for financial analytics with interactive charts and real-time data updates.',
        image: 'https://via.placeholder.com/600x400/1e293b/f59e0b?text=Dashboard',
        tags: ['Vue.js', 'D3.js', 'Firebase'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: '#'
    },
    {
        id: '6',
        title: 'Brand Identity Design',
        description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines.',
        image: 'https://via.placeholder.com/600x400/1e293b/ec4899?text=Branding',
        tags: ['Illustrator', 'Photoshop', 'Figma'],
        category: 'Design',
        demoUrl: '#',
        githubUrl: '#'
    }
];
