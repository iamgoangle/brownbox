import React from 'react';
import ReactDOM from 'react-dom';

CompanyCell = React.createClass({
  render() {
    var Cell = FixedDataTable.Cell;

    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    const logo = data[rowIndex]['logo'];
    const name = data[rowIndex]['name'];
    const description = data[rowIndex]['description'];
    return (
      <Cell {...props}>
        <div>
          <div className="lfloat" style={{marginRight:12}}>
            <img src={logo} style={{width:40,height:40}} />
          </div>
          <div className="lfloat" style={{width:210}}>
            <div><b><a href="startup-profile">{name}</a></b></div>
            <div style={{textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden'}}>{description}</div>
          </div>
          <div className="clearfix"></div>
        </div>
      </Cell>
    );
  }
});
