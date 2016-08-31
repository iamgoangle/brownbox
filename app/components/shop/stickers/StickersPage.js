import React from 'react';
import axios from 'axios';
import StickersItem from './StickersItem';
import { connect } from 'react-redux';
import {fetchStickers} from './../../../actions/StickersShopAction';

@connect((store) => {
    return {
        stickers : store.stk.stickers,
        foo: 1
    }
})
export default class StickersPage extends React.Component {
    static get NAME() {
        return 'StickersPage';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[StickersPage.NAME] || {};
        console.log(this.state);
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/news/`);
    }

    componentWillMount(){
        this.props.dispatch(fetchStickers());
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="category-title" style={{textAlign:'center'}}>
                    <h3>Stickers</h3>
                    <span>{this.props.foo} Thoroughly unique, die-cut, removable Stickers. In a range of sizes to smarten up your walls, laptop, or journal.</span>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.200517933.1754/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.120583835.5874/sticker,375x360.u2.png"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>

                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                    <div className="col-md-3">
                        <StickersItem url="http://ih1.redbubble.net/image.105300040.5202/sticker,220x200-pad,220x200,ffffff.jpg"/>
                    </div>
                </div>
            </div>
        );
    }
}
