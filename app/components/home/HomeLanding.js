import React from 'react';

export default class HomeLanding extends React.Component {

    static get NAME() {
        return 'HomeLanding';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[HomeLanding.NAME] || {};
    }
    render() {
        return (
            <div className="jumbotron" style={{backgroundImage:'url( \'./img/landing1.jpg\')', color:'white', height:400,backgroundPositionY:-270,backgroundSize:'cover'}}>
                <div className="container">
                    <h2 className="text-center">Inspiration, right at your door</h2>
                    <p className="text-center">
                        Choose from hundreds of creative designs in our collection
                </p>
                <div className="text-center">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a>
                </div>
            </div>
        </div>
    )
}
}
