import { languages } from "../constants";

const initialState = {
    BACKEND_PORT: 5000,
    BACKEND_ENDPOINT: "https://portfolio-41q5.onrender.com",
    isDarkTheme: localStorage.getItem("isDarkTheme") == true,
    language: localStorage.getItem("language_code") != null ?
        localStorage.getItem("language_code") :
        navigator.language.includes(languages.map(l => l.code)) ?
            navigator.language :
            "en",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE": return { ...state, language: action.payload };
        case "SET_THEME": return { ...state, isDarkTheme: action.payload };
        default: return state;
    }

};
export default reducer;