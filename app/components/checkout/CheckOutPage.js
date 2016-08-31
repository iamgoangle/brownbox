import React from 'react';
import axios from 'axios';
import CheckOutStepper from './CheckOutStepper';

export default class CheckOutPage extends React.Component {
    static get NAME() {
        return 'CheckOutPage';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[CheckOutPage.NAME] || {};
        console.log(this.state);
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/news/`);
    }

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
