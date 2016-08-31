import React from 'react';
import ReactDOM from 'react-dom';

import FormInput from './general/FormInput';

export default class SignUp extends React.Component {

  static get NAME() {
      return 'SignUp';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }

  constructor(props, context) {
      super(props, context);
      this.state = context.data[SignUp.NAME] || {};
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state.fullname);
    console.log(this.state.email);
    console.log(this.state.password);

    var errors = {};

    if(!this.state.fullname){
      errors.fullname = "Name required"
    }
    if (!this.state.email) {
      errors.email = "Email required"
    }
    if (!this.state.password) {
      errors.password = "Password required"
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      console.log('error');
      return;
    }

    var userObject = {
      email: email,
      password: password,
      profile : {
        full_name: fullname
      }
    };

  }

  handleFullNameChange(event){
    this.setState({fullname: event.target.value});
  }

  handleEmailChange(event){
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Sign Up</h1>
            <form onSubmit={this.onSubmit.bind(this)} >
              <FormInput name="FullName" type="text" label="none" placeholder="Full Name" onChange={this.handleFullNameChange.bind(this)} />
              <FormInput name="Email" type="text" label="none" placeholder="Email" onChange={this.handleEmailChange.bind(this)}/>
              <FormInput name="Password" type="password" label="none" placeholder="Password (min 8 characters)" onChange={this.handlePasswordChange.bind(this)}/>
              <input type="submit" className="btn btn-default btn-primary"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
