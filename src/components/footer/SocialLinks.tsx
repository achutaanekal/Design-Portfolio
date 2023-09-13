import { BsArrowRight } from 'react-icons/bs';

const socials = [
  { name: 'X', url: 'https://twitter.com/achutaanekal' },
  { name: 'Email', url: 'mailto:achutaanekal@gmail.com' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/achutaanekal/' },
];

const SocialLinks = () => {
  // Renders
  const renderSocials = () => {
    return socials.map(({ name, url }, index) => (
      <li key={index}>
        <a
          href={url}
          className="group flex items-start text-[12px] leading-[12px] lg:text-[14px] lg:leading-[14px] tracking-tight font-normal uppercase hover:text-black"
          target="_blank"
          rel="nooper noreferrer"
        >
          <BsArrowRight className="mr-1.5 lg:mr-2.5 group-hover:translate-x-1 transition-transform" />
          {name}
        </a>
      </li>
    ));
  };

  return (
    <nav>
      <ul className="flex items-center justify-between sm:justify-start gap-[25px] md:gap-[50px]">{renderSocials()}</ul>
    </nav>
  );
};

export default SocialLinks;
