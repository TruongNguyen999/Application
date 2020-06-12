import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/index';

class ButtonFormMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    onchange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    onSendText = () => {
        this.props.onSendText(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <textarea name="text" value={this.state.text} className="form-control textarea" rows="3" required="required" onChange={this.onchange} ></textarea>
                <button type="button" className="btn btn-primary btn-gui" onClick={this.onSendText} >GỬI</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{

    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        onSendText: (text) => {
            dispatch(actions.sendText(text))
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ButtonFormMain);