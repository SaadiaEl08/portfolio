
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './../constants';

const NavBar = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="border-2 rounded-full bg-[var(--background-color)] w-fit h-fit flex flex-col justify-center items-center p-2 z-10">
      <ul className="flex sm:flex-col gap-2 justify-evenly items-center w-80 sm:w-fit 2xl:h-[360px]">
        {navItems.map((item) => (
          <li key={item.id} className='flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5 2xl:w-10 overflow-hidden hover:overflow-visible h-8 sm:h-fit'>
            <Link to={item.path} className='flex flex-col justify-center items-center  '>
              <i className={`${item.icon} w-5 text-center 2xl:w-10 text-lg 2xl:text-4xl  `} />
              {currentPage==item.path?<span className='w-5 border bg-white 2xl:w-10 2xl:border-2'></span>:''}
            </Link>
            <span className=' py-1 px-2 text-sm text-center font-semibold border-2 rounded-full bg-[var(--background-color)] 2xl:text-lg'>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
