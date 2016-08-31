import React from 'react';

export default class HomeCategory extends React.Component {

  static get NAME() {
      return 'HomeCategory';
  }

  static get contextTypes() {
      return {
          data: React.PropTypes.object
      };
  }
  constructor(props, context) {
      super(props, context);
      this.state = context.data[HomeCategory.NAME] || {};
  }

  render() {
    return (
      <div id="categoryContent" style={{textAlign:'center',padding:'30px 0px'}}>
        <div>
          <span style={{fontSize:'40px'}}>Browse by Category</span>
        </div>
        <div className="row" style={{maxWidth:'900px',textAlign:'center',margin:'0 auto'}} >
          <div className="col-md-3">
            <div className="l-box margin10 bg1" style={{height:'120px'}}></div>
          </div>
          <div className="col-md-3">
            <div className="l-box margin10 bg2" style={{height:'120px'}}></div>
          </div>
          <div className="col-md-3">
            <div className="l-box margin10 bg3" style={{height:'120px'}}></div>
          </div>
          <div className="col-md-3">
            <div className="l-box margin10 bg4" style={{height:'120px'}}></div>
          </div>
        </div>
      </div>
    )
  }
}
