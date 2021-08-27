import initialState from "./initialState";

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case "SET_USERS": return {...state,users: action.payload}
        case "THEME": return {...state,dayNight:action.payload}
        default: return state;
       
    }

}
export default Reducer