import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import { legacy_createStore } from 'redux';
import reducer from './store/reducer.js';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
const store = legacy_createStore(reducer);

window.onerror = function (message, source, lineno, colno, error) {
  console.error("Error caught globally:", message, source, lineno, colno, error);
};


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
    </Provider>
  </StrictMode>,
);
