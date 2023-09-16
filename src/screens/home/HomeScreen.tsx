import MainScreenAnimation from '@/components/MainScreenAnimation';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';

const HomeScreen = () => {
  return (
    <MainScreenAnimation>
      <div className="container px-[16px] lg:px-[40px] max-w-[1512px]">
        <HeroSection />
        <ProjectsSection />
      </div>
    </MainScreenAnimation>
  );
};

export default HomeScreen;
