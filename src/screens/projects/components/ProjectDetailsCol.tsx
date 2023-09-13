import { FC } from 'react';
import VideoPlayer from './VideoPlayer';

interface IProps {
  title?: string;
  image?: string;
  video?: string;
  paragraphs: string[];
  isSmallPadding?: boolean;
  hidePadding?: boolean;
  shadow?: boolean;
  isVideoWrapperRounded?: boolean;
  isImageRounded?: boolean;
  isVideoRounded?: boolean;
}

const ProjectDetailsCol: FC<IProps> = props => {
  const {
    title,
    paragraphs,
    video,
    image,
    isSmallPadding = true,
    hidePadding = false,
    shadow = true,
    isVideoWrapperRounded,
    isImageRounded = true,
    isVideoRounded = true,
  } = props;
  const boxShadow = shadow ? 'shadow-[6px_6px_30px_0px_rgba(0,0,0,0.15)]' : '';
  const rounded = isImageRounded ? 'rounded-[8px]' : '';

  // Renders
  const renderParagraphs = () => {
    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className="mb-[20px] lg:mb-[30px] text-[16px] leading-[20px] lg:text-[22px] lg:leading-[28px] max-w-[720px] last:mb-0 lg:last:mb-0"
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="flex flex-col items-center mb-[80px] lg:mb-[120px]">
      <div className="flex-1 mb-[40px] max-w-[720px]">
        {!!title && (
          <h3 className="text-[16px] leading-[16px] lg:text-[28px] lg:leading-[28px] font-primary uppercase mb-[20px] lg:mb-[40px] text-black max-w-[720px]">
            {title}
          </h3>
        )}
        {renderParagraphs()}
      </div>
      <div className="flex-1">
        {!!image && <img src={image} alt="project2" className={`${rounded}`} />}
        {!!video && (
          <VideoPlayer
            isPaddingSmall={isSmallPadding}
            hidePadding={hidePadding}
            src={video}
            shadow={boxShadow}
            isWrapperRounded={isVideoWrapperRounded}
            isVideoRounded={isVideoRounded}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsCol;
