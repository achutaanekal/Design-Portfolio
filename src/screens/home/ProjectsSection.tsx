import { RoutePaths } from '@/routes/routes';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-full overflow-x-hidden flex flex-col gap-[16px] md:gap-[32px] py-[16px] md:py-[32px] border-b border-b-border-main"
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        <Link
          to={RoutePaths.SecurityProject}
          className="w-full md:w-[55%] pr-0 md:pr-[32px] pb-[16px] md:pb-0 border-b md:border-b-0 border-r-0 md:border-r border-border-main h-[358px] sm:w-auto md:h-[420px] lg:h-[520px]"
        >
          <div className="w-full h-full relative group">
            <img src="/images/home/1.png" alt="project" className="w-full object-cover h-full" />
            <div className="absolute top-0 left-0 bg-black w-full h-full p-[24px] lg:p-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="group text-[18px] lg:text-[24px] text-white mb-[12px] flex items-end leading-[18px] lg:leading-[24px]">
                Palantir
                <HiArrowNarrowRight size={15} className="ml-2 mb-0.2 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="max-w-[385px] text-text-light text-[18px] lg:text-[24px] leading-[18px] lg:leading-[24px]">
                Enhancing security posture for some of the most important institutions.
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={RoutePaths.BusinessProject}
          className="w-full md:w-[45%] pl-0 md:pl-[32px] pt-[16px] md:pt-0 h-[358px] md:h-[420px] lg:h-[520px]"
        >
          <div className="w-full h-full relative group">
            <img src="/images/home/2.png" alt="project" className="w-full object-cover h-full" />
            <div className="absolute top-0 left-0 bg-black w-full h-full p-[24px] lg:p-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="group text-[18px] lg:text-[24px] text-white mb-[12px] flex items-end leading-[18px] lg:leading-[24px]">
                Grab
                <HiArrowNarrowRight size={15} className="ml-2 mb-0.5 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="max-w-[385px] text-text-light text-[18px] lg:text-[24px] leading-[18px] lg:leading-[24px]">
                Helping business owners across SE Asia increase reach, scale and revenue.
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="min-w-[1px] min-h-[1px] bg-border-main" />

      <Link to={RoutePaths.FinancialProject} className="w-full h-[358px] md:h-[420px] lg:h-[520px]">
        <div className="w-full h-full relative group">
          <img src="/images/home/3.png" alt="project" className="w-full object-cover h-full" />
          <div className="absolute top-0 left-0 bg-black w-full h-full p-[24px] lg:p-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h3 className="group text-[18px] lg:text-[24px] text-white mb-[12px] flex items-end leading-[18px] lg:leading-[24px]">
              AngelOne
              <HiArrowNarrowRight size={15} className="ml-2 mb-0.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="max-w-[385px] text-text-light text-[18px] lg:text-[24px] leading-[18px] lg:leading-[24px]">
              Democratizing financial systems to reach every corner of Bharat.
            </p>
          </div>
        </div>
      </Link>

      <div className="min-w-[1px] min-h-[1px] bg-border-main" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <Link
          to={RoutePaths.DecentralizeProject}
          className="w-full md:w-[41%] pb-[16px] md:pb-0 pr-0 md:pr-[32px] border-b md:border-b-0 border-r-0 md:border-r border-border-main h-[358px] md:h-[420px] lg:h-[520px]"
        >
          <div className="w-full h-full relative group">
            <img src="/images/home/4.png" alt="project" className="w-full object-cover h-full" />
            <div className="absolute top-0 left-0 bg-black w-full h-full p-[24px] lg:p-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="group text-[18px] lg:text-[24px] text-white mb-[12px] flex items-end leading-[18px] lg:leading-[24px]">
                slice
                <HiArrowNarrowRight size={15} className="ml-2 mb-0.5 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="max-w-[385px] text-text-light text-[18px] lg:text-[24px] leading-[18px] lg:leading-[24px]">
                On a mission to decentralize value.
              </p>
            </div>
          </div>
        </Link>

        <Link
          to={RoutePaths.DiscoveryProject}
          className="w-full md:w-[59%] pt-[16px] md:pt-0 pl-0 md:pl-[32px] h-[358px] md:h-[420px] lg:h-[520px]"
        >
          <div className="w-full h-full relative group">
            <img src="/images/home/5.png" alt="project" className="w-full object-cover h-full" />
            <div className="absolute top-0 left-0 bg-black w-full h-full p-[24px] lg:p-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="group text-[18px] lg:text-[24px] text-white mb-[12px] flex items-end leading-[18px] lg:leading-[24px]">
                ZILLSKILL
                <HiArrowNarrowRight size={15} className="ml-2 mb-0.5 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="max-w-[385px] text-text-light text-[18px] lg:text-[24px] leading-[18px] lg:leading-[24px]">
                Nurturing the next generation by helping them discover their passion.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
