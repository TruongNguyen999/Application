import React, { Component } from 'react';
import './App.css'
import FormCategory from './Components/FormCategory';
import FormMain from './Components/FormMain';
import FormUser from './Components/FormUser';
import { connect } from 'react-redux';

class App extends Component {

  render() {

    const { onToggleFormUser } = this.props;
    
    return (
      <div className="row">
        <FormCategory />
        <div className={onToggleFormUser === true ? "col-xs-9 col-sm-9 col-md-9 col-lg-9" : ''}>
              <FormMain />
              {onToggleFormUser === true ? <FormUser /> : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    onToggleFormUser: state.toggleFormUser
  };
}

export default connect(mapStateToProps, null)(App);
