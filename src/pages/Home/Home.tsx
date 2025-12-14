import HeroSection from './components/HeroSection';
import TechMarquee from '../../components/UI/TechMarquee';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import CallToAction from '../../components/UI/CallToAction';

const Home = () => {
    return (
        <>
            <HeroSection />
            <TechMarquee />
            <AboutSection />
            <SkillsSection />
            <FeaturedProjects />
            <Testimonials />
            <CallToAction />
        </>
    );
};

export default Home;
