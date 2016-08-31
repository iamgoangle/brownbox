import React from 'react';
import {Link} from 'react-router';

export default class StickersItem extends React.Component {
    static get NAME() {
        return 'StickersItem';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[StickersItem.NAME] || {};
        console.log(this.state);
    }

    render() {
        return (
            <Link to="/item/123">
                {/* <img src="http://ih1.redbubble.net/image.8491137.7387/sticker,220x200-pad,220x200,ffffff.jpg"/> */}
                <img src={this.props.url} style={{width:200,height:200}}/>
            </Link>
        );
    }
}
