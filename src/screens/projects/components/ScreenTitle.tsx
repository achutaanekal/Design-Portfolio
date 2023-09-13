import { FC } from 'react';

interface IProps {
  title: string;
}

const ScreenTitle: FC<IProps> = props => {
  const { title } = props;

  return (
    <h1 className="text-[24px] lg:text-[54px] text-black uppercase mb-[20px] lg:mb-[60px] leading-[24px] lg:leading-[54px] font-primary">
      {title}
    </h1>
  );
};

export default ScreenTitle;
