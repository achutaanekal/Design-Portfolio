import ProjectScreenAnimation from '@/components/ProjectScreenAnimation';
import ProjectDetailsCol from './components/ProjectDetailsCol';
import ProjectDetailsRow from './components/ProjectDetailsRow';
import ProjectInfo from './components/ProjectInfo';
import ProjectScreenHeader from './components/ProjectScreenHeader';
import ScreenTitle from './components/ScreenTitle';
import TaskTitle from './components/TaskTitle';

const BusinessProjectScreen = () => {
  return (
    <ProjectScreenAnimation>
      <ProjectScreenHeader />
      <section className="flex flex-col font-secondary text-text-dark px-[16px] lg:px-[80px]">
        <div className="container relative pt-[20px] lg:pt-[60px]">
          <ScreenTitle title="Helping business owners across SE Asia increase reach, scale and revenue." />

          <img
            src="/images/project2/1.png"
            alt="project"
            className="hidden md:block w-full mb-[20px] lg:mb-[60px] min-h-[358px] object-cover"
          />

          <img
            src="/images/project2/1-mobile.png"
            alt="project"
            className="block md:hidden w-full mb-[20px] lg:mb-[60px]"
          />

          <ProjectInfo
            paragraphs={[
              'Grab is at the forefront of solving challenges in the incredibly diverse SE Asian region. By championing the superapp capabilities, Grab offers solutions ranging from ride-hailing to on-demand delivery to financial inclusion. This meant that there was a tremendous opportunity to build a powerful tool to help both business owners discover customers and create a core monetization source for Grab.',
              'Advertising has gone from being largely on autopilot to one where to succeed, one must now make course corrections daily, and gather and quickly interpret feedback from every instrument that can measure aspects of campaigns or activity. Businesses want to do DIY advertising for the control that they can have. But optimizing ads is not easy to learn, and that is where we came in as Product Designers.',
              'My responsibilities were spread across running foundational and usability research, conducting design workshops across teams to uncover knowledge and find alignment, and eventually delivering key modules of the Ad Creation and Ad Management pieces.',
            ]}
            data={[
              { label: 'CLIENT', value: 'Grab' },
              { label: 'When', value: '2021-22' },
              { label: 'Role', value: 'Product Designer' },
              { label: 'With', value: 'Shreya, Subhankar, Sarun, GrabAds team' },
            ]}
          />

          <div className="pt-[140px] lg:pt-[200px]">
            <TaskTitle title="01 uncovering user insights to cater to market requirements" />
            <ProjectDetailsRow
              title="Continuously making the case for research to establish effective user goals and USer journeys."
              paragraphs={[
                'Utilizing a first principles design thinking approach, we aimed to redefine AdTech products, focusing on intricate mechanics from targeting strategies to ad frequency for optimal conversions. While giants like Facebook and Google set industry standards, our dedication lay in foundational research tailored to the distinct SE Asian user.',
                'Through co-creation research with potential users, we delved into their digital marketing routines. This collaborative approach uncovered unique behavioral insights, paving the way for us to make targeted improvement.',
              ]}
              image="/images/project2/2.png"
              shadow
              isImageCover
            />
            <ProjectDetailsCol
              title="Steamlining the user flow by priortizing data that helps users make better-informed decisions"
              paragraphs={[
                'A primary insight revealed that users preferred a distraction-free environment when inputting ad strategies, but also needed interconnectedness between various settings. The challenge: streamline settings to reduce cognitive load while maintaining easy access for adjustments. Using journey maps, we eliminated excess data and embraced a minimalist design with ample white space. This decluttered interface ensured efficient toggling between settings without overwhelming users.',
                'Our research also showed a clear division between planning and creation phases. Yet, forecasting expectations remained pivotal in final ad strategy decisions. Users desired a platform to test options and visualize estimations. To address this, we introduced a static-on-scroll floating forecasting tool, displaying vital metrics like audience reach, impressions, clicks, and projected spend. This tool empowered users to allocate budgets effectively and anticipate ad performance.',
              ]}
              video="/videos/project2/3-opt.mp4"
              isSmallPadding={false}
            />

            <ProjectDetailsCol
              title="Desiging for Agility to get data, form insights and take action"
              paragraphs={[
                'Agility is crucial not just in setup but also in optimization. Users need swift debugging to safeguard their budget from underperforming campaigns, which requires rapid data access, effective insights, and immediate action.',
                'We began by identifying the most critical data and understanding its chronological relevance to users. Through usefulness studies, a significant observation emerged: users visualized subdivisions of an ad campaign (like ad group and ad) as branches. Mimicking this mental model, we designed an interaction where campaign subdivisions felt like a filtering down process. This intuitive approach enabled users to swiftly pinpoint areas needing attention within a campaign.',
              ]}
              video="/videos/project2/4-opt.mp4"
              isSmallPadding={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px]">
            <TaskTitle title="02 creating a one-platform thinking for now and the future" />
            <ProjectDetailsRow
              title="Running Design activities with cross-functional teams for clarity and alignments"
              paragraphs={[
                'Building a zero-to-one product inside a well-established org is both a boon and a bane. While we have the luxury of working in well-structured vertical teams, it becomes a big challenge to constantly stay up to date with all the developments.',
                'As designers, we were in the unique position to have touch points into all product teams. We used this to our advantage to championed a unified platform approach for users. By collaborating across fields, we held frequent brainstorming sessions and design jams, which allowed us to both explore a broad range of ideas and refine them when needed.',
              ]}
              video="/videos/project2/5-opt.mp4"
              shadow
            />
            <ProjectDetailsCol
              title="Developing a system thinking approach by defining Design components and patterns"
              paragraphs={[
                'We weren’t just building an MVP, we were setting up foundations for the ads team. In our effort to build a 0 to 1 product, we gathered really valauble user insights from multiple generative research activities. This enabled us to implement and recommend insightful design patterns. Therefore, the entire Ads system was examined and every interaction was broken down and simplified into useful components and intuitive design patterns, all based on the user insights we collected. ',
                'While this effort put forth a standard for interactions and design component, it also enabled the team to iteratively add new features without too much effort, which led led to quicker development and launch cycles.',
              ]}
              image="/images/project2/6.png"
              isImageRounded={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px] border-b">
            <TaskTitle title="03 Advocating for a design-led product development" />
            <ProjectDetailsRow
              title="Using design thinking to discover the “what” and “how” of the product"
              paragraphs={[
                'Building a 0 to 1 product and something as technically complex as a self serve Ads Platform meant that there was a need for extensive collaboration. Beyond a vague North Star, there was little clarity on what to build, which meant no clear list of requirements. And defining clear role boundaries is especially challenging in a high-growth company, like Grab, which is innovating at the speed of light.',
                'As designers, we are inherently centrist; understanding and brokering a multitude of views and opinions of internal stakeholders and end-users. As a designer, I strive to create harmony and empathy between computers and humans. At Grab, I learned the importance of embedding the same effort into creating a collaborative environment for free and fair dialogue between disciplines.',
              ]}
              image="/images/project2/7.png"
              isImageCover={false}
            />

            <div className="flex flex-col items-center mb-[140px] lg:mb-[200px] mt-[-60px] lg:mt-0">
              <div className="flex-1 max-w-[720px]">
                <p className="text-[16px] leading-[20px] lg:text-[22px] lg:leading-[28px] max-w-[720px]">
                  With a designers superpower of quick iteration and prototyping, we took the lead and facilitated
                  discussions that laid down a path for envisioning first and then building the platform. With this
                  effort, we were able to create an environment of intentionality - where our fellow stakeholders
                  provided perspectives that are deeply rooted in the explicit and implicit user needs. By doing so, we
                  were not worried about blurry lines or shared ownerships, but about getting the best outcome for the
                  user.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectScreenAnimation>
  );
};

export default BusinessProjectScreen;
