import React from 'react';
import HomeLanding from './../components/home/HomeLanding';
import HomeCategory from './../components/home/HomeCategory';
import HomePartner from './../components/home/HomePartner';

export default class HomeContainer extends React.Component {

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
