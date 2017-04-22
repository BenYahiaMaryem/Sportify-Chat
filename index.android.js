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
  Text,
  View
} from 'react-native';

import App from './Screens/App';
/*import Login from './Screens/Login'
import * as firebase from 'firebase';
console.disableYellowBox = true;
var firebaseConfig = {
    apiKey: "AIzaSyDZBRin_1ktO7cERWMLCuEicng310aBmLE",
    authDomain: "socialapp-7aff6.firebaseapp.com",
    databaseURL: "https://socialapp-7aff6.firebaseio.com",
    storageBucket: "socialapp-7aff6.appspot.com",
    messagingSenderId: "508912104235"
};
const firebaseApp =firebase.initializeApp(firebaseConfig);
const provider = firebaseApp.auth().FacebookAuthProvider;
export default class Sportify extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: Login}}
                configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}


                renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebaseApp});
          }
      }}/>

        );
    }
}



AppRegistry.registerComponent('Sportify', () => Sportify);
*/

AppRegistry.registerComponent('Sportify', () => App);