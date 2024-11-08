import { Outlet } from 'react-router-dom';
import NavBar from './sections/NavBar';
import { useSelector } from 'react-redux';
const App = () => {
  const currentLanguageCode = useSelector(state => state.language);

  return (
    <main className="min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center justify-between items-center pt-4  sm:pt-0">
      <aside className={`w-fit h-fit fixed  sm:${currentLanguageCode=="ar"?"right":"left"}-5 sm:top-40`}>
        <NavBar />
      </aside>
      <section className="mt-10 sm:mt-0 sm:ms-20 w-fit px-3">
        <Outlet />
      </section>
    </main>
  );
};

export default App;