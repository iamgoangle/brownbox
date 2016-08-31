import React from 'react';
import ReactDOM from 'react-dom';

SimpleSlider = React.createClass({
  render: function () {


    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="/prototype/carousel1_s.png" style={{margin:'auto', maxHeight:350}}/></div>
        <div><img src="/prototype/carousel2_s.png" style={{margin:'auto', maxHeight:350}}/></div>
        <div><img src="/prototype/carousel3_s.png" style={{margin:'auto', maxHeight:350}}/></div>
        <div><img src="/prototype/carousel4_s.png" style={{margin:'auto', maxHeight:350}}/></div>
        <div><img src="/prototype/carousel5_s.png" style={{margin:'auto', maxHeight:350}}/></div>
        <div><img src="/prototype/carousel6_s.png" style={{margin:'auto', maxHeight:350}}/></div>
      </Slider>
    );
  }
});
