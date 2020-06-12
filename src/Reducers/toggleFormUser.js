import * as types from '../Const/index';

const initialState = true;

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.TOGGLE_FORM_USER:
            return !state;
        default:
            return state;
    }
}
export default myReducer;