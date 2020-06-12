import * as types from '../Const/index';

export const sendText = (text) => {
    return{
        type: types.SEND_TEXT,
        text //text: text
    }
}

export const ontoggleFormUser = () => {
    return{
        type: types.TOGGLE_FORM_USER
    }
}

export const onAddFormUser = (user) => {
    return{
        type: types.ADD_FORM_USER,
        user
    }
}

export const onFilterNameUser = (filter) => {
    return{
        type: types.FILTER_NAME,
        filter
    }
}

export const onChangeStatus = (id) => {
    return{
        type: types.CHANGE_STATUS,
        id
    }
}

export const onDeleteUser = (id) => {
    return {
        type: types.DELETE_USER,
        id
    }
}

export const onUpdateUser = (user) => {
    return{
        type: types.UPDATE_USER,
        user
    }
}