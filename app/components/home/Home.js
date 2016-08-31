import React from 'react';
import HomeLanding from './HomeLanding';
import HomeCategory from './HomeCategory';
import HomePartner from './HomePartner';

export default class Home extends React.Component {

  static get NAME() {
      return 'Home';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }
  constructor(props, context) {
      super(props, context);
      this.state = context.data[Home.NAME] || {};
  }

  render() {
    let homeContent;
    let currentUser = false;

    if (!currentUser) {
      homeContent = (
        <div>
          <HomeLanding/>
          <HomeCategory/>
          <HomePartner/>
        </div>
      )
    }else{
      homeContent = (
        <div className="container">
          feed page
        </div>
      )
    }

    return (
      <div>
        {homeContent}
      </div>
    )
  }
}
