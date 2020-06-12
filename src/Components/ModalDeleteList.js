import React, { Component } from 'react';
import * as actions from '../Actions/index';
import { connect } from 'react-redux';

class ModalDeleteList extends Component {

    onChangeStatus = () => {
        const {id} = this.props.user
        this.props.onChangeStatusFormUser(id);
    }

    onDeleteUser = () => {
        const {id} = this.props.user
        this.props.onDeleteUser(id);
    }

    onUpdateFormUser = () => {
        this.props.onUpdateFormUser(this.props.user)
    }

    render() {

        const { user, index } = this.props;
        
        return (
            <tr>
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <th>
                    <img src={user.image} alt={user.image} />
                </th>
                <th>{user.age}</th>
                <th>{user.job}</th>
                <th>{user.address}</th>
                <th>
                    <button
                        type="button"
                        className={user.status === true ? "btn btn-success" : "btn btn-danger"}
                        onClick={this.onChangeStatus}
                    >
                        {user.status === true ? 'true' : 'false'}
                    </button>
                </th>
                <th>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" href='#modal-id' onClick={this.onUpdateFormUser}>Sửa</button>
                </th>
                <th>
                    <button type="button" className="btn btn-default" onClick={this.onDeleteUser}>Xóa</button>
                </th>
            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        onUser: state.onAddUser
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeStatusFormUser: (id) => {
            dispatch(actions.onChangeStatus(id))
        },
        onDeleteUser: (id) => {
            dispatch(actions.onDeleteUser(id))
        },
        onUpdateFormUser: (user) => {
            dispatch(actions.onUpdateUser(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteList);