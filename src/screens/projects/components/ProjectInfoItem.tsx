import { FC } from 'react';

interface IProps {
  label: string;
  value: string;
}

const ProjectInfoItem: FC<IProps> = props => {
  const { label, value } = props;

  // Renders
  return (
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default ProjectInfoItem;
