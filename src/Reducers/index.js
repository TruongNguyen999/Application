import { combineReducers } from 'redux';
import sendText from './sendText';
import toggleFormUser from './toggleFormUser';
import onAddUser from './onAddUser';
import filterNameUser from './filterNameUser';
import onUpdateUser from './onUpdateUser';

const myReducer = combineReducers({
    sendText,
    toggleFormUser,
    onAddUser,
    filterNameUser,
    onUpdateUser
})

export default myReducer;