const initState = {
type: "dark"
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "color": {
            return {...state,
            type: action.color};
        }
        default: return state;
    }
};

export const changeThemeC = (color: any): any => ({type:"color", color}) ; // fix any