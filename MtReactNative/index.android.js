/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
    ListView,
  Text,
    Image,
    TextInput,
  View
} from 'react-native';

import Mylogin from './rnjs/Mylogin'

export default class MtReactNative extends Component {
  render() {
      var loginPage = Mylogin;
      var loginPageTitle = 'Mylogin';
    return (
        <Navigator
            initialRoute={{title:loginPageTitle,component:loginPage}}
            renderScene={(route, navigator) =>{
              let Component = route.component;
              console.log("22222222222"+Component);
              if(route.component){
               console.log("1111111111"+route.component);
                return <Component navigator={navigator}/>
              }
            }
            }
        />


    );
  }
}


AppRegistry.registerComponent('MtReactNative', () => MtReactNative);
