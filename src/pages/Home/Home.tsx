import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import CallToAction from '../../components/UI/CallToAction';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <FeaturedProjects />
            <CallToAction />
        </>
    );
};

export default Home;
