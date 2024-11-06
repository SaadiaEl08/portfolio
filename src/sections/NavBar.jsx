
import { Link, useLocation } from 'react-router-dom';
import { navItems } from './../constants';

const NavBar = () => {
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  return (
    <nav className="border-2 rounded-full bg-[var(--background-color)]  w-fit h-full flex flex-col justify-center items-center p-2">
      <ul className="flex flex-col gap-2 justify-center items-center">
        {navItems.map((item) => (
          <li key={item.id} className='flex gap-4 justify-start items-center w-5 overflow-hidden hover:overflow-visible'>
            <Link to={item.path} className='flex flex-col justify-center items-center'>
              <i className={`${item.icon} w-5 text-center  text-lg `} />
              {currentPage==item.path?<span className='w-5 border bg-white'></span>:''}
            </Link>
            <span className=' py-1 px-2 text-sm text-center font-semibold border-2 rounded-full bg-[var(--background-color)]'>{item.title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
