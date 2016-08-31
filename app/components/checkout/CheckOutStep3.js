import React from 'react';
import Divider from 'material-ui/Divider';

export default class CheckOutStep3 extends React.Component {
    static get NAME() {
        return 'CheckOutStep3';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[CheckOutStep3.NAME] || {};
        console.log(this.state);
    }

    render(){
        return  (
            <div>
                <h3>Step 3: Delivery Address</h3>
                <Divider/>
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://ih1.redbubble.net/image.222180230.8024/st,medium,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <span style={{display:'block'}}>Stickers</span>
                        <span style={{display:'block'}}>Small</span>
                    </div>
                    <div className="col-md-3">quantity</div>
                    <div className="col-md-3">sum</div>
                </div>
            </div>
        )
    }
}
