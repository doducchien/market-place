import { LINK_ACCOUNT } from "../type/LinkAccount";

const initState = {
    username: ''
}


const linkAccountReducer = (state=initState, action)=>{
    switch(action.type){
        case LINK_ACCOUNT:{
            return{

                ...state,
                username: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default linkAccountReducer;