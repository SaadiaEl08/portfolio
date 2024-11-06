import { Outlet } from 'react-router-dom';
import NavBar from './sections/NavBar';
const App = () => {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <aside className="w-fit h-fit fixed left-5 ">
        <NavBar />
      </aside>
      <section className="ms-20 min-h-screen w-full">
        <Outlet />
      </section>
    </main>
  );
};

export default App;