import React, { Component } from 'react';
import * as actions from '../Actions/index';
import { connect } from 'react-redux';

class ModalAddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image: '',
            age: 18,
            job: '',
            address: '',
            status: true
        }
    }
    // componentWillMount() {
    //     if (this.props.updateUser) {
    //         this.setState({
    //             name: this.props.updateUser.name,
    //             image: this.props.updateUser.image,
    //             age: this.props.updateUser.age,
    //             job: this.props.updateUser.job,
    //             address: this.props.updateUser.address,
    //             status: this.props.updateUser.status
    //         })
    //     } else {
    //         this.setState({
    //             name: '',
    //             image: '',
    //             age: 18,
    //             job: '',
    //             address: '',
    //             status: true
    //         })
    //     }
    // }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps && nextProps.updateUser) {
    //         this.setState({
    //             name: nextProps.updateUser.name,
    //             image: nextProps.updateUser.image,
    //             age: nextProps.updateUser.age,
    //             job: nextProps.updateUser.job,
    //             address: nextProps.updateUser.address,
    //             status: nextProps.updateUser.status
    //         })
    //     } else if (!nextProps) {
    //         this.setState({
    //             name: '',
    //             image: '',
    //             age: 18,
    //             job: '',
    //             address: '',
    //             status: true
    //         })
    //     }
    // }
    onchangeHandleFormUser = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })
    }

    onAddUser = () => {
        this.props.onAddUser(this.state);
        this.setState({
            name: '',
            age: 18,
            job: '',
            address: '',
            status: true
        })
    }

    render() {
        return (
            <div className="modal fade" id="modal-id">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title">Thêm Thành Viên</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <h5 className="modal-title">Tên Hiển Thị Của Bạn</h5>
                                <input type="text" name='name' onChange={this.onchangeHandleFormUser} className="form-control" placeholder="nhập tên hiển thị của bạn ..." />
                            </div>
                            <div className="form-group">
                                <h5 className="modal-title">Ảnh Hiển Thị Của Bạn</h5>
                                <ul >
                                    <li className="images-icone-user">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="image" onChange={this.onchangeHandleFormUser} value="http://icons.iconarchive.com/icons/visualpharm/must-have/32/User-icon.png" />
                                                <img src='http://icons.iconarchive.com/icons/visualpharm/must-have/32/User-icon.png' alt='' />
                                            </label>
                                        </div>
                                    </li>
                                    <li className="images-icone-user">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="image" onChange={this.onchangeHandleFormUser} value="http://icons.iconarchive.com/icons/aha-soft/people/32/user-group-icon.png" />
                                                <img src='http://icons.iconarchive.com/icons/aha-soft/people/32/user-group-icon.png' alt='' />
                                            </label>
                                        </div>
                                    </li>
                                    <li className="images-icone-user">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="image" onChange={this.onchangeHandleFormUser} value="http://icons.iconarchive.com/icons/aha-soft/people/32/army-officer-icon.png" />
                                                <img src='http://icons.iconarchive.com/icons/aha-soft/people/32/army-officer-icon.png' alt='' />
                                            </label>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className="form-group">
                                <h5 className="modal-title">Tuổi Của Bạn</h5>
                                <input type="text" name='age' className="form-control" onChange={this.onchangeHandleFormUser} />
                            </div>
                            <div className="form-group">
                                <h5 className="modal-title">Công Việc Hiện Tại Của Bạn</h5>
                                <select name="job" id="input" className="form-control" defaultValue="Học Sinh" required="required" onChange={this.onchangeHandleFormUser}>
                                    <option value="Học Sinh">Học Sinh</option>
                                    <option value="Giám Đốc">Giám Đốc</option>
                                    <option value="Làm Thuê">Làm Thuê</option>
                                    <option value="Phụ Hồ">Phụ Hồ</option>
                                    <option value="Ở Không">Ở Không</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <h5 className="modal-title">Địa Chỉ Hiện Tại Của Bạn</h5>
                                <textarea name="address" id="input" className="form-control" rows="3" required="required" onChange={this.onchangeHandleFormUser}></textarea>
                            </div>
                            <div className="form-group">
                                <h5 className="modal-title">Trạng Thái Hiện Tại Của Bạn</h5>
                                <div className="radio">
                                    <label>
                                        <input type="radio" name="status" value={true} onChange={this.onchangeHandleFormUser} />
                                            Online
                                        </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <label>
                                        <input type="radio" name="status" value={false} onChange={this.onchangeHandleFormUser} />
                                            Ofline
                                        </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Đóng Form</button>
                            <button type="button" className="btn btn-primary" onClick={this.onAddUser} data-dismiss="modal" >Lưu Thành Viên</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        updateUser: state.onUpdateUser
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddUser: (user) => {
            dispatch(actions.onAddFormUser(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddUser);
