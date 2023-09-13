import { FC } from 'react';
import VideoPlayer from './VideoPlayer';

interface IProps {
  title: string;
  image?: string;
  video?: string;
  paragraphs: string[];
  shadow?: boolean;
  isSmallPadding?: boolean;
  hidePadding?: boolean;
  isImageCover?: boolean;
  isVideoWrapperRounded?: boolean;
  isImageRounded?: boolean;
  isVideoRounded?: boolean;
}

const ProjectDetailsRow: FC<IProps> = props => {
  const {
    title,
    image,
    video,
    paragraphs,
    shadow,
    isSmallPadding = true,
    hidePadding = false,
    isImageCover = false,
    isVideoWrapperRounded,
    isImageRounded = true,
    isVideoRounded = true,
  } = props;
  const boxShadow = shadow ? 'shadow-[6px_6px_30px_0px_rgba(0,0,0,0.15)]' : '';
  const rounded = isImageRounded ? 'rounded-[8px]' : '';
  const objectFit = isImageCover ? 'object-cover' : 'object-contain';

  // Renders
  const renderParagraphs = () => {
    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className={`mb-[20px] lg:mb-[30px] text-[16px] leading-[20px] lg:text-[22px] lg:leading-[28px] last:mb-0 lg:last:mb-0`}
      >
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between mb-[80px] lg:mb-[120px] gap-0 lg:gap-[40px]">
      <div className="flex-1 mb-[30px] lg:mb-0  ">
        <h3 className="text-[16px] leading-[16px] lg:text-[28px] lg:leading-[28px] font-primary uppercase mb-[20px] lg:mb-[40px] text-black">
          {title}
        </h3>
        {renderParagraphs()}
      </div>

      <div className="flex-1">
        {!!image && (
          <img src={image} alt="project2" className={`${objectFit} ${rounded} w-full max-h-[435px] ${boxShadow}`} />
        )}
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

export default ProjectDetailsRow;
