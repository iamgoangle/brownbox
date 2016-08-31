import React from 'react';
import ReactDOM from 'react-dom';

export default class Item extends React.Component {

  static get NAME() {
    return 'Item';
  }

  static get contextTypes() {
    return {
      data : React.PropTypes.object
    };
  }

  constructor(props, context){
    super(props, context);
    this.state = context.data[Item.NAME] || {};
  }

  render(){
    return (
      <div>
        <span>Name:</span><span>{this.props.name}</span>
      </div>
    )
  }
}
