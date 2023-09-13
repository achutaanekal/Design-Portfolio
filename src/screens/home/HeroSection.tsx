import { Fragment } from 'react';

const companies = [
  { name: 'PALANTIR', url: 'https://www.palantir.com/' },
  { name: 'GRAB', url: 'https://www.grab.com/sg/' },
  { name: 'SLICE', url: 'https://www.sliceit.com/' },
  { name: 'ANGELONE', url: 'https://www.angelone.in/' },
];

const HeroSection = () => {
  // Renders
  const renderCompanies = () => {
    return companies.map(({ name, url }, index) => (
      <Fragment key={index}>
        <a
          href={url}
          target="_blank"
          rel="nooper noreferrer"
          className="underline hover:text-black transition-colors font-semibold"
        >
          {name}
        </a>
        ,{' '}
      </Fragment>
    ));
  };

  const renderMainText = () => {
    return (
      <>
        <h1 className="text-[44px] md:text-[64px] text-black text-center leading-[38px] md:leading-[56px]  mb-[16px] max-w-[800px] uppercase hidden lg:block">
          <span className="pr-2">DESIGNING</span>
          <span className="pl-2">TECHNOLOGY</span> <br />
          <span className="pr-3">FOR</span>
          <span className="text-accent-main italic px-3">HUMAN</span>
          <span className="pl-2">EXPERIENCES</span>
        </h1>
        <h1 className="text-[44px] md:text-[64px] text-black text-center leading-[38px] md:leading-[56px]  mb-[16px] max-w-[800px] uppercase block lg:hidden">
          DESIGNING TECHNOLOGY FOR <span className="text-accent-main italic -mx-3 sm:-mx-1">HUMAN</span> EXPERIENCES
        </h1>
      </>
    );
  };

  return (
    <section className="max-w-full overflow-x-hidden flex flex-col items-center justify-center py-[200px] border-b border-b-border-main">
      {renderMainText()}
      <p className="text-[12px] md:text-[14px] text-center leading-[16px] md:leading-[20px] tracking-tighter max-w-[300px] sm:max-w-[400px] md:max-w-[460px] uppercase font-normal">
        ACHUTA ANEKAL IS A PRODUCT DESIGNER WHO HAS SOLVED PROBLEMS THROUGH DATA-INFORMED DESIGNS FOR COMPANIES LIKE
        <span className="italic"> {renderCompanies()} </span>
        AND MORE.
      </p>
    </section>
  );
};

export default HeroSection;
