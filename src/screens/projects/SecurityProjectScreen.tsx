import ProjectScreenAnimation from '@/components/ProjectScreenAnimation';
import ProjectInfo from './components/ProjectInfo';
import ProjectScreenHeader from './components/ProjectScreenHeader';
import ScreenTitle from './components/ScreenTitle';
import VideoPlayer from './components/VideoPlayer';

const SecurityProjectScreen = () => {
  return (
    <ProjectScreenAnimation>
      <ProjectScreenHeader />
      <section className="flex flex-col font-secondary text-text-dark px-[16px] lg:px-[80px]">
        <div className="container relative pt-[20px] lg:pt-[60px]">
          <ScreenTitle title="Enhancing security posture for some of the most important institutions." />

          <img src="/images/project1/1.png" alt="project" className="hidden md:block w-full mb-[20px] lg:mb-[60px]" />
          <img
            src="/images/project1/1-mobile.png"
            alt="project"
            className="block md:hidden w-full mb-[20px] lg:mb-[60px]"
          />

          <ProjectInfo
            paragraphs={[
              `Palantir is solving some of the hardest problems in the world. I had the opportunity to contribute to this mission by collaborating with the Authentication and User Provisioning team, where we developed essential tools that empower platform administrators to better comprehend and safeguard the usage of Palantir's products and the data within them.`,
              `I was involved in defining UX strategy and designing a tool on Foundry, specifically to aid Department of
              Defense (DoD) client administrators. This tool enables them to efficiently configure and manage the
              collection of user attributes, a crucial element in enhancing access provisioning. Working closely with DoD
              implementation teams allowed me to gain insights into unique needs and technical intricacies of users within
              the DoD, ensuring that Palantir’s solution was not just useful but also aligned with the security posture.`,
              `I also took on the responsibility of envisioning and designing for a third-party application governance
              tool. This tool was developed to assist admins in gaining a deeper understanding of how their orgs leverage
              external resources. I conducted research to identify measurable metrics and designed visualizations that
              would allow admins to track and optimize app usage effectively.`,
            ]}
            data={[
              { label: 'Company', value: 'Palantir' },
              { label: 'When', value: '2023' },
              { label: 'Role', value: 'Product Designer' },
              { label: 'With', value: 'Elliot, Ilana, Gary, Andrei, Vanessa' },
            ]}
          />

          <div className="py-[140px] lg:py-[200px] border-b border-border-main">
            <VideoPlayer src="/videos/project1/2-opt.mp4" hidePadding isVideoRounded={false} />
            <div className="flex items-center uppercase text-black text-[12px] lg:text-[16px] leading-[12px] lg:leading-[16px] font-primary pt-[10px] lg:pt-[20px]">
              <span className="mr-3">*</span>
              <span>Project/Process under NDA. But enjoy some screen grabs!</span>
            </div>
          </div>
        </div>
      </section>
    </ProjectScreenAnimation>
  );
};

export default SecurityProjectScreen;
