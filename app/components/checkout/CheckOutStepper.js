import React from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CheckOutStep1 from './CheckOutStep1';
import CheckOutStep2 from './CheckOutStep2';
import CheckOutStep3 from './CheckOutStep3';
import CheckOutStep4 from './CheckOutStep4';

export default class CheckOutStepper extends React.Component {

    static get NAME() {
        return 'CheckOutStepper';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[CheckOutStepper.NAME] || {};
        console.log(this.state);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext(){
        const stepIndex = this.state.stepIndex;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 3,
        });
    };

    handlePrev(){
        const stepIndex = this.state.stepIndex;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    render() {
        let stepContent;
        if(this.state.stepIndex === 0){
            stepContent = <CheckOutStep1/>
        }else if(this.state.stepIndex === 1){
            stepContent = <CheckOutStep2/>
        }else if(this.state.stepIndex === 2){
            stepContent = <CheckOutStep3/>
        }else if(this.state.stepIndex === 3){
            stepContent = <CheckOutStep4/>
        }

        return (
            <div>
                <Stepper activeStep={this.state.stepIndex}>
                  <Step>
                    <StepLabel>Review your cart</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Payment Options</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Delivery Address</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Review & Confirm</StepLabel>
                  </Step>
                </Stepper>
                <div>
                      {this.state.finished ? (
                        <p>
                          <a href="#" onClick={(event) => {
                              event.preventDefault();
                              this.setState({stepIndex: 0, finished: false});
                            }} >
                    Click here
                          </a> to reset the example.
                        </p>
                      ) : (
                        <div>
                          {stepContent}
                          <div style={{marginTop: 12}}>
                            <FlatButton
                              label="Back"
                              disabled={this.state.stepIndex === 0}
                              onTouchTap={this.handlePrev}
                              style={{marginRight: 12}}
                            />
                            <RaisedButton
                              label={this.state.stepIndex === 3 ? 'Finish' : 'Next'}
                              primary={true}
                              onTouchTap={this.handleNext}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                </div>
        );
    }

    componentDidMount() {
        console.log('did mount');
        this.setState({stepIndex:0, finished:false}, function(){
            console.log('done manual setstate');
        });
        console.log(this.state);
    }
}
