import {UserType} from "../HW8";

const initialState: UserType = []

export const homeWorkReducer = (state: UserType = initialState, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let sort = [...state.sort((a, b) => a.name.localeCompare(b.name))]
            if (action.payload === "up") {
                return sort
            }
            else if (action.payload === "down"){
                return sort.reverse()}
            else return state
        }
        case 'check': {
            let copy=[...state]
            return copy.filter((x) => x.age > 18)
        }
        default: return state
    }
}