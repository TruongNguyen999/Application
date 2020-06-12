import * as types from '../Const/index';

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
const GenaryID = () => {
    return s4() + s4() + '-' + s4() + s4() + s4() + '-' + s4() + s4() + '-' + s4() + s4();
  }

const data = JSON.parse(localStorage.getItem('ListUser'));
const initialState = data ? data : [];

const findID = (state, id) =>{  
    let result = -1;
    state.forEach((state, index) => {
        if(state.id === id){
            result = index
        }
    })
    return result;
}

const myReducer = (state = initialState, action) => {
    let id = '';
    let index = -1;
    switch(action.type){
        case types.ADD_FORM_USER:
            const user = {
                id: GenaryID(),
                name: action.user.name,
                image: action.user.image,
                age: action.user.age,
                job: action.user.job,
                address: action.user.address,
                status: action.user.status
            }
            state.push(user);    
            localStorage.setItem('ListUser',JSON.stringify(state));
            return [...state];

        case types.CHANGE_STATUS:
            id = action.id;
            index = findID(state, id)
            state[index] = {
                ...state[index],
                status: !state[index].status
            }
            localStorage.setItem('ListUser',JSON.stringify(state));
            return [...state];

        case types.DELETE_USER:
            id = action.id;
            index = findID(state, id);
            state.splice(index, 1);
            localStorage.setItem('ListUser',JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
}
export default myReducer;