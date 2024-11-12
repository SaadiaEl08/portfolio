const initialState = {
    language: localStorage.getItem("language_code") != null ? localStorage.getItem("language_code") : navigator.language == "en" ? "eng" : navigator.language
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE": return { ...state, language: action.payload };
        default: return state;
    }

};
export default reducer;