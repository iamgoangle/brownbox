import React from 'react';
import ReactDOM from 'react-dom';

class AuthError extends React.Component {

    static get NAME() {
        return 'AuthError';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[AuthError.NAME] || {};
    }

    render() {
        if (this.props.errors) {
            return (
                <ul className="list-group">
                    {
                        _.values(this.props.errors).map((errorMessage) => {
                            return <li key={errorMessage} className="list-group-item alert alert-danger">{errorMessage}</li>;
                        })
                    }
                </ul>
            )
        }
    }
}

AuthError.propTypes = {
    errors: React.PropTypes.object
};

export default AuthError;
