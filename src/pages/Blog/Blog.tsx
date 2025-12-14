import { motion } from 'framer-motion';
import Button from '../../components/UI/Button';
import SectionTitle from '../../components/UI/SectionTitle';
import Card from '../../components/UI/Card';
import { fadeIn, staggerContainer } from '../../utils/animations';

import { blogs } from '../../data/blogs';

const Blog = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Blog & Insights"
                subtitle="Sharing my thoughts on technology"
            />

            <motion.div
                variants={staggerContainer(0.2)}
                initial="hidden"
                animate="show"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}
            >
                {blogs.map((post) => (
                    <motion.div key={post.id} variants={fadeIn('up', 0)}>
                        <Card hoverable glass style={{ height: '100%', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div
                                style={{
                                    height: '200px',
                                    backgroundImage: `url(${post.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '100%'
                                }}
                            />
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <span>{post.date}</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <span style={{ color: 'var(--primary-500)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                                    {post.category}
                                </span>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold', lineHeight: 1.3 }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{post.excerpt}</p>
                                <Button variant="secondary" size="small" fullWidth>Read More</Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Blog;
