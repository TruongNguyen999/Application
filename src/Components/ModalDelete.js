import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalDeleteList from './ModalDeleteList';

class ModalDelete extends Component {
    render() {
        const { onUser } = this.props;

        const elmUser = onUser.map((user, index) => {
            return <ModalDeleteList key={index} index={index} user={user} />
        })
        return (
            <div className="modal fade" id="modal-delete">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Chi Tiết Thành Viên</h4>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Images</th>
                                        <th>Age</th>
                                        <th>Job</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody className="form-user-oferlow">
                                    {elmUser}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Thoát</button>
                        </div>
                    </div>
                </div>
            </div>
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

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);