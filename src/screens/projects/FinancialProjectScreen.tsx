import ProjectScreenAnimation from '@/components/ProjectScreenAnimation';
import ProjectDetailsCol from './components/ProjectDetailsCol';
import ProjectDetailsRow from './components/ProjectDetailsRow';
import ProjectInfo from './components/ProjectInfo';
import ProjectScreenHeader from './components/ProjectScreenHeader';
import ScreenTitle from './components/ScreenTitle';
import TaskTitle from './components/TaskTitle';

const FinancialProjectScreen = () => {
  return (
    <ProjectScreenAnimation>
      <ProjectScreenHeader />
      <section className="flex flex-col font-secondary text-text-dark px-[16px] lg:px-[80px]">
        <div className="container relative pt-[20px] lg:pt-[60px]">
          <ScreenTitle title="Democratizing financial systems to reach every corner of Bharat." />

          <img src="/images/project3/1.png" alt="project" className="hidden md:block w-full mb-[20px] lg:mb-[60px]" />

          <img
            src="/images/project3/1-mobile.png"
            alt="project"
            className="block md:hidden w-full mb-[20px] lg:mb-[60px]"
          />

          <ProjectInfo
            paragraphs={[
              'In an era marked by rapid digital and financial evolution, AngelOne recognized the immense potential within the booming middle class of India, a nascent but digitally savvy demographic with a hunger for financial independence. The mission was clear: every individual, regardless of their socio-economic background, deserved to be an active participant in wealth creation and Bharat’s growth story.',
              'One of the predominant challenges faced by our design team was effective utilization of screen real estate. Given that our primary focus was catering to pro and intermediate users, our goal was to ensure that, in a single view, users could access, interpret, and act on this information without feeling overwhelmed or restricted.',
              `I delved deep into investors needs and translated those data points into key insights. Using these, I led the development of wireframes, prototypes, and usability tests, while also defining the product's scope. Collaborating closely with stakeholders and developers, I ensured a seamless user experience, empowering traders to make informed decisions efficiently.`,
            ]}
            data={[
              { label: 'Client', value: 'AngelOne' },
              { label: 'When', value: '2020 - 21' },
              { label: 'Role', value: 'UX Designer' },
              { label: 'With', value: 'Jai Prasanna, Business Analyst Sam Joshua, UX Designer' },
            ]}
          />

          <div className="pt-[140px] lg:pt-[200px]">
            <TaskTitle title="01 Immersing in user environments to gain user empathy" />
            <ProjectDetailsRow
              title="Collaborating with our users to define their needs and pain points"
              paragraphs={[
                `To understand users, we conducted generative research through interviews with potential users including casual investors, active traders and portfolio managers. Key insights were needs for real-time customizable data, intuitive visualizations, easy account management and advanced analysis tools.`,
                `Secondary research revealed current trading platforms have modular dashboards but lack personalization. Best practices point to clear information hierarchy, consistent UI patterns and minimized cognitive load. Our research indicated the primary user group would be self-directed active traders seeking more robust controls and information than retail platforms.`,
              ]}
              video="/videos/project3/1-opt.mp4"
              shadow
              hidePadding
              isSmallPadding={false}
              isVideoRounded={false}
            />
            <ProjectDetailsCol
              title="Crafting A system that mirror users' mental models for seamless interaction"
              paragraphs={[
                `In the initial phases of my design process, I established conditions that emphasized the need for intense user concentration, a seamless and intuitive experience, and the avoidance of distractions. With these guidelines and user stories in mind, I began my exploration by sketching various viewing patterns and hierarchies of information.`,
                `Users often created baskets of securities, monitored them regularly, and used the insights for trading decisions. To facilitate this, we ensured that users could always view their tracked securities in a watchlist that remain sticky to the page. Customizability was another priority, allowing users to tailor their watchlist view, including placing market indexes at the top. I also strategically positioned a universal search bar with filters to simplify the complex search process.`,
              ]}
              video="/videos/project3/2-opt.mp4"
              isSmallPadding={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px]">
            <TaskTitle title="02 identifying constraints for better trading workflows" />
            <ProjectDetailsCol
              title="Strategically Layering Information for better Comprehension"
              paragraphs={[
                `My task was to design information in a way that encourages efficient and effective understanding of data insights. Designing for web did not mean that we could use the larger form factor to display all the information in one view. Through 'Context of Use' research, we learnt that there were specific data points users placed higher in the information hierarchy. `,
                `I set a standard in the designs which would define a two tier hierarchy for each listed Security. Tier 1 would will help give 30,000 foot view, and if there is clear intent to learn more and take action, then more data is presented in a drop down.`,
              ]}
              video="/videos/project3/3-opt.mp4"
              isSmallPadding={false}
              hidePadding
              isVideoRounded={false}
              shadow={false}
            />
            <ProjectDetailsCol
              title="increasing efficiency by Spotlighting Page Insights with Summary Cards"
              paragraphs={[
                `Abstracting information can play a pivotal role in a complex environment such as a financial trading system. They serve as the initial focal point for users and guide their attention. When users spot irregularities in these summary cards, they immediately recognize the need for further investigation and intervention. Bearing this critical functionality in mind, I crafted bold and compelling contextual digests of information, strategically positioned across various sections of the portfolio management interface. `,
                `To enhance their effectiveness, I ensured the inclusion of visually impactful and contextually relevant iconography, adding an extra layer of clarity and intuitiveness to the information presentation`,
              ]}
              video="/videos/project3/4-opt.mp4"
              isSmallPadding={false}
              hidePadding
              isVideoRounded={false}
              shadow={false}
            />
          </div>

          <div className="pt-[0px] lg:pt-[80px] border-b">
            <TaskTitle title="03 Thoughtfully designed nudges for better decision making" />
            <ProjectDetailsCol
              title="Building trading confidence through contextual helpers"
              paragraphs={[
                `Recognizing the common issue of users making suboptimal trading decisions due to inadequate or inaccurate data, I devised a strategic approach to guide them towards more informed choices. I introduced prominent banners within the portfolio, tactfully suggesting users to adjust their order prices closer to the Market Price for quicker execution. Real-time nudges like this ensured that users were aware of the potential benefits thereby enhancing their decision-making.`,
                `I addressed the challenge of order cancellations by implementing a transparent system that provided users with detailed explanations for the root causes behind these cancellations. This not only captured users' attention but also empowered them with insights into improving their trading strategies. `,
              ]}
              video="/videos/project3/5-opt.mp4"
              isSmallPadding={false}
            />
            <ProjectDetailsCol
              title="optimizing trade planning workflows to mitigate risks"
              paragraphs={[
                `Recognizing the significance of tracking past orders for future trade planning, I revamped the order history page. By clearly differentiating between 'today's orders' and 'past orders,' and incorporating a user-friendly search function with date filters, I streamlined the user experience, allowing traders to quickly retrieve and assess crucial information, ultimately instilling confidence in their trading decisions.`,
              ]}
              video="/videos/project3/6-opt.mp4"
              isSmallPadding={false}
            />

            <div className="h-0 lg:h-[80px]" />
          </div>
        </div>
      </section>
    </ProjectScreenAnimation>
  );
};

export default FinancialProjectScreen;
