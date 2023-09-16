import { FC } from 'react';
import SocialLinks from './SocialLinks';

interface IProps {
  isProjects?: boolean;
}

const Footer: FC<IProps> = props => {
  const { isProjects = false } = props;

  // Renders
  const renderContent = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between text-text-main h-full py-[20px] md:py-[40px]">
        <div className="flex flex-col w-full mb-[20px] md:mb-0">
          <p className="text-[12px] lg:text-[16px] uppercase mb-[20px] tracking-tighter leading-[13px] leading-[18px] w-full sm:max-w-[350px] md:max-w-[550px]">
            Have a question, some feedback, or an outrageous idea? Please, please, please send it my way.
          </p>
          <SocialLinks />
        </div>

        <div className="w-full flex md:items-end md:self-end md:justify-end gap-[3px]">
          <img src="/c.svg" alt="copyright" />
          <span className="text-[12px] leading-[12px] lg:text-[14px] lg:leading-[14px] tracking-tighter">
            achutaanekal
          </span>
        </div>
      </div>
    );
  };

  return (
    <footer className={`px-[16px] ${isProjects ? 'lg:px-[80px]' : 'md:px-[40px]'}`}>
      <div className="container max-w:[1512px]">
        {isProjects ? <>{renderContent()}</> : <div className="container">{renderContent()}</div>}
      </div>
    </footer>
  );
};

export default Footer;
