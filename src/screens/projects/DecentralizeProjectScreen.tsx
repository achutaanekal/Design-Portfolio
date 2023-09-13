import ProjectScreenAnimation from '@/components/ProjectScreenAnimation';
import ProjectInfo from './components/ProjectInfo';
import ProjectScreenHeader from './components/ProjectScreenHeader';
import ScreenTitle from './components/ScreenTitle';

const DecentralizeProjectScreen = () => {
  return (
    <ProjectScreenAnimation>
      <ProjectScreenHeader />
      <section className="flex flex-col font-secondary text-text-dark px-[16px] lg:px-[80px]">
        <div className="container relative pt-[20px] lg:pt-[60px]">
          <ScreenTitle title="On a mission to decentralize value." />

          <img src="/images/project4/1.png" alt="project" className="hidden md:block w-full mb-[20px] lg:mb-[60px]" />
          <img
            src="/images/project4/1-mobile.png"
            alt="project"
            className="block md:hidden w-full mb-[20px] lg:mb-[60px]"
          />

          <ProjectInfo
            paragraphs={[
              `slice is revolutionizing Indian fintech by expanding credit access to underserved youth and catalyzing economic growth by powering spending, supporting small businesses, and integrating more Indians into mainstream finance. Using web3 was a strategic move to cement its positioning as an innovative fintech serving digital native youth.`,
              `As design lead for this initiative, we worked on building a non-fungible digital identity product to empower users to store unique identity attributes and seamlessly integrate with UPI (Unified Payment Interface). Using visual cues and logical sequencing of user journeys, I was able to reinforce ownership and control to build user trust.`,
              `I also led rapid design sprints to iterate on concepts for a digital currency to fiat bridge product. This involved bringing together cross-functional teams for intensive brainstorming and prototyping to ensure a seamless user experience for conversion and storage of cryptocurrency and fiat.`,
            ]}
            data={[
              { label: 'Client', value: 'slice' },
              { label: 'When', value: '2022' },
              { label: 'Role', value: 'Product Designer' },
              { label: 'With', value: 'Mredul, Siddhant, Shreya, Sahil, Rahul' },
            ]}
            hideBorder
          />

          <div className="pb-[140px] lg:pb-[200px] border-b border-border-main flex font-primary mt-0 lg:mt-[-20px]">
            <a
              className={`flex items-center justify-center rounded-[32px] border border-border-main py-[8px] px-[12px] md:py-[12px] md:px-[16px] transition-colors text-[14px] leading-[14px] md:text-[16px] md:leading-[16px] text-text-main`}
            >
              Coming soon
            </a>
          </div>
        </div>
      </section>
    </ProjectScreenAnimation>
  );
};

export default DecentralizeProjectScreen;
