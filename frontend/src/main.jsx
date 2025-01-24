import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { legacy_createStore } from "redux";
import reducer from "./store/reducer.js";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";
import App from "./App.jsx";
const store = legacy_createStore(reducer);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>
);
