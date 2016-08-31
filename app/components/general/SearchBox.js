import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Badge from 'material-ui/Badge';
import { browserHistory } from 'react-router'
import IconButton from 'material-ui/IconButton';

import {grey500} from 'material-ui/styles/colors';

import {Link} from 'react-router';

export default class SearchBox extends React.Component {

  static get NAME() {
      return 'SearchBox';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }

  constructor(props, context) {
      super(props, context);
      this.state = context.data[SearchBox.NAME] || {};
  }

  handleChange(event) {
    console.log('on change:' + event.target.value);
  }

  handleKeyPress(event){
    if(event.key == 'Enter'){
      browserHistory.push('/shop/stickers')
    }
  }

  render() {
    return (
      <div>
        <FontIcon className="material-icons" style={{top:'10px',marginRight:'10px'}} color={grey500}>search</FontIcon>
        <TextField hintText="Search" id="searchbox" name="searchbox" onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>

        <Badge badgeContent={4} primary={true} style={{paddingTop:5, top:7, right:5}} badgeStyle={{top: 0, right: 15}}>
          <Link to="/checkout">
            <IconButton tooltip="checkout">
              <FontIcon className="material-icons" color={grey500}>shopping_cart</FontIcon>
            </IconButton>
          </Link>
        </Badge>

      </div>
    )
  }

}
