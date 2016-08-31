import React from 'react';

export default class MainFooter extends React.Component {
    static get NAME() {
        return 'MainFooter';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[MainFooter.NAME] || {};
        console.log(this.state);
    }

    render() {
        return (
            <div className="footer bg5">
                <div className="container">
                    <div className="footer-content">
                        This is footer
                    </div>
                    <div className="footer-footer">
                        © 2015 Sabadchai, Inc.
                    </div>
                </div>
            </div>
        )
    }
}
