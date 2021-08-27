import initialState from "./initialState";

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_USERS": return {...state,users: action.payload}
        case "THEME": return {...state,dayNight:action.payload}
        case "LIKE": return {...state,like:action.payload}
        case "LIKE2": return {...state,like2:action.payload}
        case "LIKE3": return {...state,like3:action.payload}
        case "LIKE4": return {...state,like4:action.payload}
        case "LIKE5": return {...state,like5:action.payload}
        case "LIKE1": return {...state,like1:action.payload}
        case "LIKE22": return {...state,like22:action.payload}
        case "LIKE33": return {...state,like33:action.payload}
        case "LIKE44": return {...state,like44:action.payload}
        case "LIKE55": return {...state,like55:action.payload}

        default: return state;
       
    }

}
export default Reducer