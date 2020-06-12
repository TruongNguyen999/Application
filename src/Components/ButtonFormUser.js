import React, { Component } from 'react';

class ButtonFormUser extends Component{
    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary btn-them" data-toggle="modal" href='#modal-id'>Thêm Thành Viên</button>
                <button type="button" className="btn btn-primary btn-xoa"data-toggle="modal" href='#modal-delete'>Chi Tiết Thành Viên</button>
            </div>
        );
    }
}
export default ButtonFormUser;