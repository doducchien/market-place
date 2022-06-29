import { CONNECT_METAMASK } from "../type/Metamask";

const initState = {
    address: ''
}


const metamaskReducer = (state=initState, action)=>{
    switch(action.type){
        case CONNECT_METAMASK:{
            return{

                ...state,
                address: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default metamaskReducer;