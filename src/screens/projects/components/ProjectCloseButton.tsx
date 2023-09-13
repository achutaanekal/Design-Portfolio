import { RoutePaths } from '@/routes/routes';
import { IoCloseOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProjectCloseButton = () => {
  return (
    <Link
      to={RoutePaths.Home}
      className="absolute top-1/2 -translate-y-1/2 right-0 rounded-full flex items-center justify-center w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] border border-border-main text-border-main hover:text-black hover:border-black transition-colors"
    >
      <IoCloseOutline size={22} />
    </Link>
  );
};

export default ProjectCloseButton;
