import MainScreenAnimation from '@/components/MainScreenAnimation';
import { FiArrowUpRight } from 'react-icons/fi';

const socials = [
  { name: 'X', url: 'https://twitter.com/achutaanekal', mobileHidden: false },
  { name: 'Email', url: 'mailto:achutaanekal@gmail.com', mobileHidden: false },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/achutaanekal/', mobileHidden: false },
  { name: 'Resume', url: '/Achuta Anekal resume.pdf', mobileHidden: true },
];

const AboutScreen = () => {
  return (
    <MainScreenAnimation>
      <section className="">
        <div className="container relative max-w-[1512px] px-[16px] lg:px-[40px]">
          <div className="flex items-center justify-center pt-[88px] pb-[80px] lg:py-[200px] border-b border-border-main">
            <h1 className="text-[44px] leading-[44px] lg:text-[64px] lg:leading-[56px] text-black uppercase text-center max-w-[90%]">
              ACHUTA ANEKAL
            </h1>
          </div>
          <div className="py-[20px] lg:py-[40px] flex flex-col lg:flex-row border-b border-border-main">
            <div className="pb-[20px] border-b border-border-main lg:pb-0 lg:border-b-0 flex justify-center lg:justify-start pr-0 lg:border-r md:pr-[20px] lg:pr-[40px]">
              <img
                src="/images/achuta.jpeg"
                alt="achuta anekal"
                className="w-full object-cover max-w-[358px] max-h-[358px] md:max-w-[503px] md:max-h-[503px] aspect-square"
              />
            </div>
            <div className="flex flex-col flex-1 pl-0 pt-[20px] lg:pt-[0] md:pl-[20px] lg:pl-[40px] pr-0 md:pr-[20px] lg:pr-0">
              <span className="block uppercase pb-[20px] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] font-extralight italic">
                About
              </span>
              <p className="text-[16px] leading-[22px] lg:text-[18px] lg:leading-[25px] mb-[20px] font-light">
                I'm a product designer with a unique blend of analytical expertise and creative vision. My design
                philosophy is rooted in first principles thinking and staying inherently centrist.
              </p>
              <p className="text-[16px] leading-[22px] lg:text-[18px] lg:leading-[25px] mb-[20px] font-light">
                My experience at Grab has taught me the the art of keeping user research front and center of
                decision-making. Building FinTech products for AngelOne and slice helped me understand how to delicately
                balance and craft engaging content, intuitive interfaces, with robust safety measures. And my time at
                Palantir has sharpened my ability to dissect and tackle some of the most complex problems through the
                lens of design.
              </p>
              <p className="text-[16px] leading-[22px] lg:text-[18px] lg:leading-[25px] mb-[20px] font-light">
                I’m rigorous when I need to solve deep and hard problems. And I’m scrappy when I need to move fast and
                break things. And I am always seeking the most challenging problems, driven by an unyielding
                determination to find solutions, no matter the constraints.
              </p>

              <div className="flex gap-[8px]">
                {socials.map(({ name, url, mobileHidden }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="nooper noreferrer"
                    className={`flex items-center justify-center rounded-[32px] border border-border-main py-[8px] px-[12px] md:py-[12px] md:px-[16px] hover:text-black hover:border-black transition-colors ${
                      !!mobileHidden && 'hidden md:flex'
                    }`}
                  >
                    <span className="mr-[5px] md:mr-[10px] text-[14px] leading-[14px] md:text-[16px] md:leading-[16px]">
                      {name}
                    </span>
                    <FiArrowUpRight />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-[20px] pb-[44px] md:pt-[40px] md:pb-[80px] text-left md:text-center">
            <span className="block font-extralight uppercase pb-[20px] text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] italic">
              PERSONAL SIDE
            </span>
            <p className="text-[28px] leading-[38px] lg:text-[48px] lg:leading-[65px] uppercase text-black italic font-extralight">
              MARKETS / SCIENCE FICTION / FAMILY / SPORTS / CULTURE / HISTORY /
            </p>
          </div>
        </div>
      </section>
    </MainScreenAnimation>
  );
};

export default AboutScreen;
