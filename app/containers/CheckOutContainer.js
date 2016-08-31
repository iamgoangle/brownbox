import React from 'react';
import axios from 'axios';
import CheckOutStepper from './../components/checkout/CheckOutStepper';

export default class CheckOutContainer extends React.Component {

    render() {
        return (
            <div className="container">
                <CheckOutStepper/>
            </div>
        );
    }

    componentDidMount() {
        console.log('did mount');
        this.setState({stepIndex:0, finished:false}, function(){
            console.log('done manual setstate');
        });
        console.log(this.state);
        this.constructor.requestData().then((response) => {
            //this.setState(response.data);

            console.log('yay');
            console.log(response.data);
            console.log(this.state);
        }).catch((err) => {
            throw new Error(err);
        });
    }

}
