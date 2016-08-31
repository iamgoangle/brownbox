import React from 'react';
import ReactDOM from 'react-dom';
import AuthError from './general/AuthError';
import FormInput from './general/FormInput';

export default class Login extends React.Component {

  static get NAME() {
      return 'MainHeader';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }

  constructor(props, context) {
      super(props, context);
      this.state = context.data[Login.NAME] || { errors: {} };
      console.log(this.state);
  }

  onSubmit(event) {
    event.preventDefault();

    var email = $(event.target).find("[name=email]").val();
    var password = $(event.target).find("[name=password]").val();

    var errors = {};

    if (!email) {
      errors.email = "Email required"
    }

    if (!password) {
      errors.password = "Password required"
    }

    this.setState({
      errors: errors
    });

    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({
          errors: {'none': err.reason}
        });

        return;
      } else {
        FlowRouter.go('Home');
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              {/*<AuthError errors={this.state.errors} />*/}
              <FormInput hasError={!!this.state.errors.email} name="email" type="text" label="none" placeholder="Email"/>
              <FormInput hasError={!!this.state.errors.password} name="password" type="password" label="none" placeholder="Password"/>
              <input type="submit" className="btn btn-default btn-primary"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
