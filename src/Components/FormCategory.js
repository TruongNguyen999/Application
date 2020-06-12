import React, { Component } from 'react';

class FormCategory extends Component {
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 bg">

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="nhập tên bạn muốn tìm kiếm ...." />
                </div>

                <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i> facebook   
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-google" aria-hidden="true"></i> google   
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-envelope" aria-hidden="true"></i> e-mail   
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-users" aria-hidden="true"></i> group 
                    </li>
                    <li className="list-group-item">
                        <i className="fa fa-cog" aria-hidden="true"></i> setting 
                    </li> 
                    <li className="list-group-item">Item 3</li>
                    <li className="list-group-item">Item 1</li>
                    <li className="list-group-item">Item 2</li>
                    <li className="list-group-item">Item 3</li>
                    <li className="list-group-item">Item 1</li>
                    <li className="list-group-item">Item 2</li>
                    <li className="list-group-item">Item 3</li>
                    <li className="list-group-item">Item 1</li>
                    <li className="list-group-item">Item 2</li>
                </ul>

            </div>
        )
    }
}
export default FormCategory;