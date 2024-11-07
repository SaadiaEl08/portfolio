import { Outlet } from 'react-router-dom';
import NavBar from './sections/NavBar';
const App = () => {
  return (
    <main className="flex flex-col justify-between items-center pt-4 sm:pt-0">
      <aside className="w-fit h-fit fixed sm:left-5 sm:top-40">
        <NavBar />
      </aside>
      <section className="mt-16 sm:mt-0 sm:ms-20 w-full px-3">
        <Outlet />
      </section>
    </main>
  );
};

export default App;