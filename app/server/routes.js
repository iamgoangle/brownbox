import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from '../components/app';
import News from '../components/news/news';
import User from '../components/user/user';
//import Home from '../components/home/Home';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Shop from '../components/shop/Shop';
//import ItemPage from '../components/item/ItemPage';
//import StickersPage from '../components/shop/stickers/StickersPage';
//import CheckOutPage from '../components/checkout/CheckOutPage';
import StickerShopContainer from '../containers/StickerShopContainer';
import CheckOutContainer from '../containers/CheckOutContainer';
import ItemDetailContainer from  '../containers/ItemDetailContainer';
import HomeContainer from '../containers/HomeContainer';

console.log('hi');

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomeContainer}/>
        <Route path="signup" component={SignUp}/>
        <Route path="login" component={Login}/>
        <Route path="news" component={News}/>
        <Route path="user" component={User}/>
        <Route path="shop/stickers" component={StickerShopContainer}/>
        <Route path="item/:itemId" component={ItemDetailContainer} />
        <Route path="checkout" component={CheckOutContainer} />
    </Route>
);
