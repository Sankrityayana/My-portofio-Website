import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'Chat-with-PDF – AI-powered Document Q&A',
        description: 'Developed a Python-based system allowing users to query business documents and retrieve insights. Applied embeddings, semantic search, and RAG architecture thinking to deliver relevant responses. Simulated real-world knowledge management and document processing scenarios.',
        image: '/images/projects/chat-pdf.png',
        tags: ['Python', 'AI', 'ML', 'RAG', 'NLP', 'Document Processing'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: 'https://github.com'
    },
    {
        id: '2',
        title: 'Sentiment Analysis Tool – Business Insights Model',
        description: 'Built an ML pipeline for customer review classification (positive/neutral/negative). Preprocessed text, implemented TF-IDF vectorization, and generated actionable insights. Demonstrated analytical thinking and application of machine learning in decision support.',
        image: '/images/projects/sentiment-analysis.png',
        tags: ['Python', 'ML', 'NLP', 'TF-IDF', 'Scikit-learn', 'Data Analysis'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: 'https://github.com'
    },
    {
        id: '3',
        title: 'AI-based Chatbot – Conversational Web App',
        description: 'Designed and deployed a chatbot using React.JS and APIs, enabling dynamic user interaction. Implemented reusable components and state management for scalability and maintainability. Showcased adaptability to emerging web technologies and collaborative development practices.',
        image: '/images/projects/ai-chatbot.png',
        tags: ['React', 'JavaScript', 'APIs', 'AI', 'Web Development'],
        category: 'Web',
        demoUrl: '#',
        githubUrl: 'https://github.com'
    }
];
