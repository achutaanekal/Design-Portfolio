import { FC } from 'react';

interface IProps {
  title: string;
}

const TaskTitle: FC<IProps> = props => {
  const { title } = props;

  return (
    <h2 className="text-[20px] leading-[20px] lg:text-[35px] lg:leading-[35px] italic font-primary pb-[10px] lg:pb-[20px] border-b border-border-main uppercase mb-[30px] lg:mb-[80px] text-black">
      {title}
    </h2>
  );
};

export default TaskTitle;
