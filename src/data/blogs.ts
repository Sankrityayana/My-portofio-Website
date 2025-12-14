export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

export const blogs: BlogPost[] = [
    {
        id: '1',
        title: 'Getting Started with React 18',
        excerpt: 'Explore the new features in React 18 including automatic batching, concurrent rendering, and transitions.',
        date: 'Dec 12, 2024',
        readTime: '5 min read',
        category: 'React',
        image: 'https://via.placeholder.com/600x400/1e293b/6366f1?text=React+18'
    },
    {
        id: '2',
        title: 'Mastering TypeScript Generics',
        excerpt: 'A comprehensive guide to understanding and using generics in TypeScript to write reusable types.',
        date: 'Nov 28, 2024',
        readTime: '8 min read',
        category: 'TypeScript',
        image: 'https://via.placeholder.com/600x400/1e293b/3178C6?text=Generics'
    },
    {
        id: '3',
        title: 'CSS Grid vs Flexbox',
        excerpt: 'When to use CSS Grid and when to use Flexbox? A deep dive into modern CSS layout techniques.',
        date: 'Nov 15, 2024',
        readTime: '6 min read',
        category: 'CSS',
        image: 'https://via.placeholder.com/600x400/1e293b/1572B6?text=CSS+Layout'
    },
    {
        id: '4',
        title: 'State Management in 2025',
        excerpt: 'Comparing Redux Toolkit, Zustand, Jotai, and Recoil. Which one should you choose for your next project?',
        date: 'Oct 30, 2024',
        readTime: '10 min read',
        category: 'Architecture',
        image: 'https://via.placeholder.com/600x400/1e293b/10b981?text=State+Management'
    }
];
