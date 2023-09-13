import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo-big.png" alt="logo" className="w-[166px] hidden md:block" />
      <img src="/logo.png" alt="logo" className="block md:hidden" />
    </Link>
  );
};

export default Logo;
