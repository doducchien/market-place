import { CHANGE_SIZE } from "../type/Size";

const initState = {
    size: 'xl'
}


const SizeReducer = (state=initState, action)=>{
    switch(action.type){
        case CHANGE_SIZE:{
            return{

                ...state,
                size: action.payload
            }
        }
        default:{
            return state;
        }
    }
}

export default SizeReducer;