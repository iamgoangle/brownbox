import React from 'react';

import MainHeader from './layouts/MainHeader';
import MainFooter from './layouts/MainFooter';

import { Provider } from 'react-redux'
import store from './../store'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red600, red800, green100} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red600,
    primary2Color: red800,
    primary3Color: green100,
    },
  avatar: {
    borderColor: null,
  }
  //userAgent: 'all'

});


export default class App extends React.Component {

    render() {
        console.log('APP');
        return (
            <Provider store={store}>
              <MuiThemeProvider muiTheme={muiTheme}>
                  <div>
                      <MainHeader activeNav={this.props.routes[this.props.routes.length-1].path}/>
                      {this.props.children}
                      <MainFooter/>
                  </div>
              </MuiThemeProvider>
            </Provider>
        );
    }
}
