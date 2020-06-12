import * as types from '../Const/index';

const initialState = {
    id:'',
    name: '',
    image: '',
    age: 18,
    job: '',
    address: '',
}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.UPDATE_USER:
            return action.user;
        default:
            return state;
    }
}
export default myReducer;