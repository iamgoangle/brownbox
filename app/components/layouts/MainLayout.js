import React from 'react';
import ReactDOM from 'react-dom';

MainLayout = React.createClass({
    render() {
        return (
            <div>
                {this.props.header}

                {this.props.content}

                {this.props.footer}
            </div>
        )
    }
});
