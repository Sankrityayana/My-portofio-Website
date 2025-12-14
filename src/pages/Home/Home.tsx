import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import CallToAction from '../../components/UI/CallToAction';
import Testimonials from '../../components/UI/Testimonials';
import SEO from '../../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="Home"
                description="Suraj Laxman Shanbhag - Full Stack Developer & UI Designer Portfolio. specialized in React, TypeScript, and modern web technologies."
            />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FeaturedProjects />
            <Testimonials />
            <CallToAction />
        </>
    );
};

export default Home;
