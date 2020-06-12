import React, { Component } from 'react';
import ModalAddUser from './ModalAddUser';
import ModalDelete from './ModalDelete';

class ModalFormUser extends Component{
    render() {
        return (
            <div>
                <ModalAddUser />
                <ModalDelete />
            </div>
        );
    }
}

export default ModalFormUser;