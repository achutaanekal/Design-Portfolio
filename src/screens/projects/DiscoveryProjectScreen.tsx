import ProjectScreenAnimation from '@/components/ProjectScreenAnimation';
import ProjectDetailsCol from './components/ProjectDetailsCol';
import ProjectDetailsRow from './components/ProjectDetailsRow';
import ProjectInfo from './components/ProjectInfo';
import ProjectScreenHeader from './components/ProjectScreenHeader';
import ScreenTitle from './components/ScreenTitle';
import TaskTitle from './components/TaskTitle';

const DiscoveryProjectScreen = () => {
  return (
    <ProjectScreenAnimation>
      <ProjectScreenHeader />
      <section className="flex flex-col relative font-secondary text-text-dark px-[16px] lg:px-[80px]">
        <div className="container relative pt-[20px] lg:pt-[60px]">
          <ScreenTitle title="Helping business owners across SE Asia increase reach, scale and revenue." />

          <img src="/images/project5/1.png" alt="project" className="hidden md:block w-full mb-[20px] lg:mb-[60px]" />

          <img
            src="/images/project5/1-mobile.png"
            alt="project"
            className="block md:hidden w-full mb-[20px] lg:mb-[60px]"
          />

          <ProjectInfo
            paragraphs={[
              `Creating a platform tailored for children is a profoundly intricate endeavor. At ZillSkill, our primary objective revolved around nurturing the next generation by fostering an environment where they can unearth their true passions and talents. The platform is meticulously designed to facilitate this journey; providing kids with a vibrant learning community that encourages them to tap into their inner potential.`,
              `Within these guideposts, I embarked on a journey aimed at assisting children align their innate curiosities with their talents. This involved working closely with the founding team and a child psychologist who offered invaluable insights into comprehending the mental landscapes of children. I delved into understanding their cognitive development, recognizing how their abilities evolve over time. I led the design team, spearheading efforts to unearth unique interaction patterns that not only captivated and engaged kids but also enriched their learning experiences.`,
            ]}
            data={[
              { label: 'CLIENT', value: 'ZillSkill' },
              { label: 'When', value: '2021' },
              { label: 'Role', value: 'UX Designer' },
              { label: 'With', value: 'Dr. Shafali Batra, Saiaditya Garyali, ZillSkill founding team' },
            ]}
          />

          <div className="pt-[140px] lg:pt-[200px]">
            <TaskTitle title="01 Learning how to design differently with expert insights" />
            <ProjectDetailsRow
              title="Building focus on Fostering unique interests & fearless learning"
              paragraphs={[
                `In contrast to the rigid structure of traditional schools, where uniformity is often expected among students, I emphasized on a vision of embracing diversity and individual strengths. Kids are keen to explore about things that can’t necessarily be taught in a classroom. This was especially true for Indian kids who feel castigated for doing something that is termed as unconventional. `,
                `Collaborating closely with a child psychiatrist, I delved into the evolving cognitive capacities of children, appreciating that designing for this audience required more a unique perspective. Our overarching mission was to develop an experience that champions curiosity, aligning seamlessly with the formative years of children.`,
              ]}
              video="/videos/project4/1-opt.mp4"
              hidePadding
              isSmallPadding={false}
              isVideoRounded={false}
            />
            <ProjectDetailsCol
              title="Crafting a system that rewards kids individuality and curiosity"
              paragraphs={[
                `With the foundational insights in hand, my next strategic step was to distill them into three core action items that would guide our design approach, ensuring that the user experience stimulated curiosity and catered to children's need for instant gratification and emotional responsiveness.`,
                `Leveraging insights such as kids' affinity for challenges and the need for instant gratification, we devised a daily challenge feature that enticed children to visit the platform regularly, unveiling new, exciting challenges each day. This was intricately woven into a game-like framework, providing intrinsic motivation and rewarding their active participation, thus fostering an engaging and enriching environment for young users.`,
              ]}
              video="/videos/project5/3-opt.mp4"
              isSmallPadding={false}
              hidePadding
              shadow={false}
              isVideoRounded={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px]">
            <TaskTitle title="02 Finding innovative feature spaces to drive engagement" />
            <ProjectDetailsRow
              title="Brainstorming on ideas to bring new yet familiar experiences"
              paragraphs={[
                `In the quest to drive engagement and create a compelling user experience, I embarked on a series of brainstorming sessions that drew inspiration from various techniques. I delved into the study of how products can achieve virality and devised strategies to craft an irresistible product hook.`,
                `Brainstorming techniques such as mind mapping and idea clustering played a pivotal role in generating innovative ideas. Through these sessions, I explored captivating ways to capture and retain the attention of young users. I landed on the idea of representing the initial kids assessment test results in the form of fleeting stories. The goal was to incorporate our unique insights on designing for kids into the well established UX pattern`,
              ]}
              image="/images/project5/4.png"
              isImageRounded={false}
            />
            <ProjectDetailsCol
              title="designing with thoughtfulness, positive reinforcement and impactful copy. "
              paragraphs={[
                `Understanding that test results can be intimidating, especially for kids, I designed a novel experience that presents results in short, engaging, and memorable moments, keeping kids' interest intact. By infusing powerful vocabulary to describe their personality traits, the aim was to motivate and instill a sense of happiness and pride in their achievements.`,
                `Acknowledging the influence of role models in a child's life, I introduced well-known and accomplished personalities, strategically matched with their skills, to inspire and shape their behavior in various aspects of life, from school to relationships and decision-making. This approach aimed to create a holistic and engaging learning environment driven by emotions and aspirations.`,
              ]}
              video="/videos/project5/5-opt.mp4"
              isSmallPadding={false}
              hidePadding
              shadow={false}
              isVideoRounded={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px] border-b">
            <TaskTitle title="03 using powerful visuals to create strong user connection" />
            <ProjectDetailsCol
              title="using a space theme to encourage exploration, discovery, and the quest for knowledge."
              paragraphs={[
                `A space-themed visual design for a kids' app proves highly effective, as it taps into children's innate fascination with space exploration. From stars to black holes and the solar system, kids naturally develop a special curiosity about the cosmos. Using this to our advantage, we crafted fun and exciting illustrations  spaceships, planets, and stars, creating an immersive and imaginative experience.`,
                `Kids typically exhibit a high tolerance for broader color palettes, which allowed us to infuse the design with bright and vibrant colors, injecting energy and enthusiasm into the app's visuals. This space-themed approach not only captures young users' imaginations but also provides an educational and engaging platform for their exploration and learning adventures.`,
              ]}
              video="/videos/project5/6-opt.mp4"
              isSmallPadding={false}
              hidePadding
              shadow={false}
              isVideoRounded={false}
            />

            <div className="h-0 lg:h-[80px]" />
          </div>
        </div>
      </section>
    </ProjectScreenAnimation>
  );
};

export default DiscoveryProjectScreen;
