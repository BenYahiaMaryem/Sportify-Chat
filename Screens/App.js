import React, {Component} from 'react';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Chat from './Chat';
import ListViewDemo from './ListViewDemo';

import{
    Router,
    Scene

}from 'react-native-router-flux';

import Plateform from 'react-native';
class App extends Component{
    render(){
 
        return(
            <Router>
                <Scene key='root' style={{paddingTop: Plateform.OS='ios'?64 :54}}>
                    <Scene key='login' component={Login} title='Login'/>
                    <Scene key='home' component={Home} title='Home'/>
                    <Scene key='listViewDemo' component={ListViewDemo} title='ListViewDemo'/>
                    <Scene key='chat' component={Chat} title='Chat'/>
                </Scene>
            </Router>
        );

    }
}

export default App;