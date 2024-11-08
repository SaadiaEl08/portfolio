import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, HashRouter, Routes, Route } from 'react-router-dom';
import router from './router.jsx';
import App from './App.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter >
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
    {/* <RouterProvider router={router}/> */}
  </StrictMode>,
);
