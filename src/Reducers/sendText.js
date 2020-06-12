import * as types from '../Const/index';

const data = JSON.parse(localStorage.getItem('list'));
const initialState = data ? data : []

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SEND_TEXT:
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            if(hours<10){
                hours = '0'+ hours;
            }
            if(minutes<10){
                minutes = '0'+minutes;
            }
            
            const list = {
                text: action.text,
                hours: hours,
                minutes: minutes
            }
            state.push(list)
            localStorage.setItem('list',JSON.stringify(state))
            return [...state];
        
        default:
            return [...state];
    }
}
export default myReducer;