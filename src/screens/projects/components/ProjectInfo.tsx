import { FC } from 'react';

interface IProps {
  paragraphs: string[];
  data: { label: string; value: string }[];
  hideBorder?: boolean;
}

const ProjectInfo: FC<IProps> = props => {
  const { paragraphs, data, hideBorder = false } = props;
  const border = hideBorder ? '' : 'border-b border-border-main';

  // Renders
  const renderparagraphs = () => {
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-[20px] lg:mb-[30px] lg:text-[22px] text-[16px] leading-[20px] lg:leading-[28px]">
        {index === 0 && (
          <span className="font-primary italic mr-5 lg:mr-9 text-[12px] lg:text-[18px] leading-[22px] lg:leading-[30px] font-thin uppercase">
            INFO
          </span>
        )}{' '}
        {paragraph}
      </p>
    ));
  };

  return (
    <div className={`w-full flex-col lg:flex-row flex lg:gap-[120px] pb-[40px] lg:pb-[30px] ${border}`}>
      <div>{renderparagraphs()}</div>

      <div className="flex flex-col gap-[20px] lg:gap-[60px] text-text-dark flex-1">
        <div className="flex">
          <div className="w-1/2">
            <p className="uppercase italic text-[12px] leading-[17px] lg:text-[18px] lg:leading-[27px] font-primary font-light">
              {data[0].label}
            </p>
            <p className="text-[16px] leading-[18px] lg:text-[22px] lg:leading-[28px]">{data[0].value}</p>
          </div>
          <div className="w-1/2">
            <p className="uppercase italic text-[12px] leading-[17px] lg:text-[18px] lg:leading-[27px] font-primary font-light">
              {data[1].label}
            </p>
            <p className="text-[16px] leading-[18px] lg:text-[22px] lg:leading-[28px]">{data[1].value}</p>
          </div>
        </div>
        <div>
          <p className="uppercase italic text-[12px] leading-[17px] lg:text-[18px] lg:leading-[27px] font-primary font-light">
            {data[2].label}
          </p>
          <p className="text-[16px] leading-[18px] lg:text-[22px] lg:leading-[28px]">{data[2].value}</p>
        </div>
        <div className="min-w-full lg:min-w-[295px]">
          <p className="uppercase italic text-[12px] leading-[17px] lg:text-[18px] lg:leading-[27px] font-primary font-light">
            {data[3].label}
          </p>
          <p className="text-[16px] leading-[18px] lg:text-[22px] lg:leading-[28px]">{data[3].value}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
