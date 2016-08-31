import React from 'react';
import axios from 'axios';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class ItemPage extends React.Component {
    static get NAME() {
        return 'ItemPage';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[ItemPage.NAME] || {};
        console.log(this.state);

        this.handleChange = this.handleChange.bind(this)
    }

    static requestData(params, domain = '') {
        return axios.get(`${domain}/api/news/`);
    }

    handleChange(event, index, value){
        console.log(value);
        this.setState({value: value});
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="image-preview col-md-8" style={{backgroundColor: 'brown', height:400}}>

                    </div>
                    <div className="col-md-4">
                        <div>
                            <h2>Docker</h2>
                            <h3>Stickers</h3>
                            <Divider/>
                            Size : <SelectField value={this.state.value} onChange={this.handleChange} id="item-size-select">
                                <MenuItem value={1} primaryText="Small" />
                                <MenuItem value={2} primaryText="Medium" />
                                <MenuItem value={3} primaryText="Large" />
                            </SelectField>
                            <RaisedButton label="Add to cart" primary={true} />
                        </div>

                    </div>


                    <div className="col-md-12">
                        <div className="col-md-6" >
                            <h3 style={{fontSize:'1.8em', fontWeight:'normal', textAlign:'center'}}>Sizing Information</h3>
                        </div>

                        <div className="col-md-6" >
                            <h3 style={{fontSize:'1.8em', fontWeight:'normal', textAlign:'center'}}>Features</h3>

                        </div>

                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('did mount');
        this.setState({}, function(){
            console.log('done manual setstate');
        });
        console.log(this.state);
        this.constructor.requestData().then((response) => {
            //this.setState(response.data);
            this.setState({value:2});

            console.log('yay');
            console.log(response.data);
            console.log(this.state);
        }).catch((err) => {
            throw new Error(err);
        });
    }
}
