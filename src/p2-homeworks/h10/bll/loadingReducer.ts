const initState = {

}

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {

        case 'loading': {

            return {...state,
                isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean): any => ({type:"loading", isLoading}) // fix any