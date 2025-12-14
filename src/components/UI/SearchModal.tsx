import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projects';
import { blogs } from '../../data/blogs';
import styles from './SearchModal.module.css';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            setSearchTerm('');
        }
    }, [isOpen]);

    const filteredProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const hasResults = filteredProjects.length > 0 || filteredBlogs.length > 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className={styles.overlay} onClick={onClose}>
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={styles.header}>
                            <FaSearch className={styles.searchIcon} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search projects and blogs..."
                                className={styles.input}
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <button className={styles.closeBtn} onClick={onClose}>
                                <FaTimes />
                            </button>
                        </div>

                        <div className={styles.results}>
                            {searchTerm && (
                                <>
                                    {!hasResults && (
                                        <div className={styles.noResults}>
                                            No results found for "{searchTerm}"
                                        </div>
                                    )}

                                    {filteredProjects.length > 0 && (
                                        <div className={styles.section}>
                                            <h3>Projects</h3>
                                            {filteredProjects.map(project => (
                                                <Link
                                                    key={project.id}
                                                    to={`/projects/${project.id}`}
                                                    className={styles.resultItem}
                                                    onClick={onClose}
                                                >
                                                    <h4>{project.title}</h4>
                                                    <p>{project.category}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {filteredBlogs.length > 0 && (
                                        <div className={styles.section}>
                                            <h3>Blog Posts</h3>
                                            {filteredBlogs.map(blog => (
                                                <Link
                                                    key={blog.id}
                                                    to="/blog"
                                                    className={styles.resultItem}
                                                    onClick={onClose}
                                                >
                                                    <h4>{blog.title}</h4>
                                                    <p>{blog.date}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                            {!searchTerm && (
                                <div className={styles.placeholder}>
                                    Type to search...
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;
