export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: 'Web' | 'Mobile' | 'Design' | 'Other';
    demoUrl?: string;
    githubUrl?: string;
}

export interface Skill {
    id: string;
    name: string;
    icon: string; // We'll use icon names or components
    level: number; // 0-100
    category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string[];
    type: 'Work' | 'Education';
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar: string;
    text: string;
}
