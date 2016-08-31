import React from 'react';
import axios from 'axios';
import StickersItem from './../components/shop/stickers/StickersItem';
import { connect } from 'react-redux';
import {fetchStickers} from './../actions/StickersShopAction';

@connect((store) => {
    return {
        stickers : store.StickersShopReducer.stickers,
        foo: 1
    }
})
export default class StickerShopContainer extends React.Component {

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
