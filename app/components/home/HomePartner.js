import React from 'react';

export default class HomePartner extends React.Component {

    static get NAME() {
        return 'HomePartner';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }
    constructor(props, context) {
        super(props, context);
        this.state = context.data[HomePartner.NAME] || {};
    }
    render() {
        return (
            <div id="partnerContent" style={{textAlign:'center',height:'400px',padding:'30px 0px'}}>
                <div>
                    <span style={{fontSize:'40px'}}>Our Partners</span>
                </div>
            </div>
        )
    }
}
