import React from 'react';
import ReactDOM from 'react-dom';

import Item from './Item';

export default class Shop extends React.Component {

  static get NAME() {
    return 'Shop';
  }

  static get contextTypes() {
    return {
      data : React.PropTypes.object
    };
  }

  constructor(props, context){
    super(props, context);
    this.state = context.data[Shop.NAME] || {};
    this.state.items = [];
    console.log(this.state);
  }

  render(){
    var items = [];
    if(this.state.items ){
      for(var i=0;i<this.state.items.length;i++){
        items.push(<Item name={this.state.items[i].name}/>);
      }
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm12">
            <h1>STICKERS</h1>
            <span>Thoroughly unique, die-cut, removable Stickers. In a range of sizes to smarten up your walls, laptop, or journal.</span>
            {this.state.items.map(function(item) {
               return <Item name={item.name} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log('did mount');
    var sampleData = {};
    sampleData.items = [];
    sampleData.items.push({id:1, name:'Item1'});
    sampleData.items.push({id:2, name:'Item2'});
    this.setState(sampleData, function(){
      console.log('done manual setstate')
      console.log(this.state);
    });
    console.log(sampleData);
    console.log(this.state);

    }
}
