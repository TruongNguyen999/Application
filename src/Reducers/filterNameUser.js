import * as types from '../Const/index';

const initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER_NAME:
            state = action.filter;       
            return state;
        
        default:
            return state;
    }
}
export default myReducer;