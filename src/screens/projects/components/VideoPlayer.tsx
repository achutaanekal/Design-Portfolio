import { FC, Suspense, useEffect, useRef } from 'react';

interface IProps {
  src: string;
  isPaddingSmall?: boolean;
  hidePadding?: boolean;
  shadow?: string;
  isWrapperRounded?: boolean;
  isVideoRounded?: boolean;
}

const VideoPlayer: FC<IProps> = props => {
  const { src, isPaddingSmall, hidePadding, shadow, isWrapperRounded = false, isVideoRounded = true } = props;
  const padding = isPaddingSmall ? 'lg:p-[40px] p-[12px]' : hidePadding ? 'p-0' : 'p-[12px] lg:px-[120px] lg:py-[60px]';
  const rounded = isWrapperRounded ? 'rounded-[2px] lg:rounded-[12px]' : '';
  const videoRounded = isVideoRounded ? 'rounded-[2px] lg:rounded-[12px]' : '';

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  }, [videoRef]);

  return (
    <Suspense fallback={<>Video loading</>}>
      <div className={`bg-background-dark ${padding} ${rounded}`}>
        <video ref={videoRef} preload="none" src={src} loop muted className={`${videoRounded} ${shadow}`} />
      </div>
    </Suspense>
  );
};

export default VideoPlayer;
