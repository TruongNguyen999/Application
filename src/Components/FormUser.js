import React, { Component } from 'react';
import ButtonFormUser from './ButtonFormUser';
import ModalFormUser from './ModalFormUser';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class FormUser extends Component {

    onHandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.onfilterName(
            name === 'filterName' ? value : ''
        )
    }

    render() {

        let { users, filterName } = this.props;

        if(filterName){
            users = users.filter((user) => {
                return user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1;
            })
        }

        let elmUser = users.map((users, index) => {
            return  <ul key={index}>
                        <li
                            className={users.status === true ? "list-group-item bg-user" : "list-group-item bg-user-ol"}
                        >
                            <img src={users.image} alt={users.image}/>
                            &nbsp;&nbsp;&nbsp;
                            {users.name}
                            &nbsp;&nbsp;&nbsp;
                            {users.status === true ? 'Online' : 'Ofline'}
                        </li>
                    </ul>
        });

        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="form-group form-user">
                    <label>DANH SÁCH THÀNH VIÊN</label>
                    <label>(Có {users.length} Thành Viên)</label>
                    <input type="text" className="form-control form-input" name='filterName' placeholder="nhập thành viên cần tìm ..." onChange={this.onHandleChange}/>
                </div>
                <div className="group-user">
                    {elmUser}
                </div>
                <ButtonFormUser />
                <ModalFormUser/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.onAddUser,
        filterName: state.filterNameUser
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onfilterName: (filter) => {
            dispatch(actions.onFilterNameUser(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormUser);