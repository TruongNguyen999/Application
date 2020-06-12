import React, { Component } from 'react';
import ButtonFormMain from './ButtonFormMain';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class FormMain extends Component {

    toggleFormUser = () => {
        this.props.onToggleFormUser();
    }

    render() {
        
        const { onSendText, ontoggle } = this.props;
        
        const elmText = onSendText.map((task,index) => {
            return  <tr key={index}>
                        <td >
                            <i className="fa fa-male" aria-hidden="true"></i>
                        </td>
                        <td >
                            {task.text}
                        </td>
                        <td>
                            {task.hours}:{task.minutes}
                        </td>
                    </tr>
        })

        return (
            <div className={ontoggle === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-9 col-sm-9 col-md-9 col-lg-9"}>
                <button type="button" className={ontoggle === false ? "btn btn-default btn-icon" : "btn btn-default btn-icon-true"} onClick={this.toggleFormUser} title="Danh Sách Các Thành Viên Trong Group">
                    <i className="fa fa-align-justify" aria-hidden="true"></i>
                </button>
                <div className="form-group form-text">

                    <table className="table table-hover">

                        <tbody>
                            {elmText}
                        </tbody>
                    </table>

                </div>
                <ButtonFormMain />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        onSendText: state.sendText,
        ontoggle: state.toggleFormUser
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onToggleFormUser: () => {
            dispatch(actions.ontoggleFormUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormMain);