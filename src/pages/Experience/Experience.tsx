import SectionTitle from '../../components/UI/SectionTitle';
import Timeline from './components/Timeline';
import Stats from './components/Stats';
import Testimonials from '../../components/UI/Testimonials';

const Experience = () => {
    return (
        <div className="container" style={{ padding: '8rem 1.5rem 4rem' }}>
            <SectionTitle
                title="Experience & Education"
                subtitle="My professional journey so far"
            />

            <Timeline />

            <div style={{ marginTop: '6rem' }}>
                <SectionTitle
                    title="By The Numbers"
                    subtitle="A quick look at my achievements"
                />
                <Stats />
            </div>

            <div style={{ marginTop: '4rem' }}>
                <Testimonials />
            </div>
        </div>
    );
};

export default Experience;
