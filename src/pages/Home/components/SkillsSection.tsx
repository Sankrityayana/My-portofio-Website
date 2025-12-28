import { motion } from 'framer-motion';
import SectionTitle from '../../../components/UI/SectionTitle';
import Card from '../../../components/UI/Card';
import { fadeIn, staggerContainer } from '../../../utils/animations';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaJava, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import { SiJavascript, SiPhp, SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiGithub } from 'react-icons/si';

const skills = [
    // Programming
    { name: 'Java', icon: <FaJava size={40} color="#007396" /> },
    { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },

    // Data Science & ML
    { name: 'NumPy', icon: <SiNumpy size={40} color="#013243" /> },
    { name: 'Pandas', icon: <SiPandas size={40} color="#150458" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn size={40} color="#F7931E" /> },

    // Web Development
    { name: 'React', icon: <FaReact size={40} color="#61DAFB" /> },
    { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: 'PHP', icon: <SiPhp size={40} color="#777BB4" /> },

    // Databases
    { name: 'MySQL', icon: <SiMysql size={40} color="#4479A1" /> },
    { name: 'SQL', icon: <FaDatabase size={40} color="#336791" /> },

    // Tools
    { name: 'Git', icon: <FaGitAlt size={40} color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub size={40} color="#181717" /> },
    { name: 'VS Code', icon: <FaCode size={40} color="#007ACC" /> },
];

const SkillsSection = () => {
    return (
        <section className="container" style={{ padding: '4rem 1.5rem' }}>
            <SectionTitle
                title="My Skills"
                subtitle="Technologies I work with"
            />

            <motion.div
                variants={staggerContainer(0.1, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
                    gap: '1.5rem'
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={fadeIn('up', 0)}>
                        <Card
                            hoverable
                            glass
                            className="flex-center"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                textAlign: 'center',
                                height: '100%',
                                padding: '2rem 1rem'
                            }}
                        >
                            <div style={{ transition: 'transform 0.3s' }}>
                                {skill.icon}
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '500' }}>{skill.name}</h3>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsSection;
