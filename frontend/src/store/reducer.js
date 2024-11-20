const initialState = {
    BACKEND_PORT: 5000,
    isDarkTheme: localStorage.getItem("isDarkTheme") == true,
    language: localStorage.getItem("language_code") != null ? localStorage.getItem("language_code") : navigator.language == "en" ? "eng" : navigator.language, 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE": return { ...state, language: action.payload };
        case "SET_THEME": return { ...state, isDarkTheme: action.payload};
        default: return state;
    }

};
export default reducer;