import React from 'react';
import {Link} from 'react-router';

export default class CategoryBar extends React.Component {

  static get NAME() {
      return 'CategoryBar';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }

  constructor(props, context) {
      super(props, context);
      this.state = context.data[CategoryBar.NAME] || {};
  }

  render() {
    let style = {
      marginRight:10
    }

    return (
      <div>
        <div className="col-md-12 category-bar">
            <Link className="navbar-brand" to="/shop/stickers" style={style}>Stickers</Link>
            <Link className="navbar-brand" to="/shop/instagrams" style={style}>Instagram</Link>
            <Link className="navbar-brand" to="/shop/shirts" style={style}>Shirts</Link>
            <Link className="navbar-brand" to="/shop/shirts" style={style}>Phone Cases</Link>
        </div>
      </div>
    )
  }

}
