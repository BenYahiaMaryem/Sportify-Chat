/**
 * Created by nour on 3/27/17.
 */
'use strict';
import {
    AppRegistry,
    Dimensions,
    Image,
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ToolbarAndroid,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import React, {Component} from 'react';
import Signup from 'Sportify/Screens/Signup';
import styles from 'Sportify/SharedStyles'
import Icon from 'react-native-vector-icons/FontAwesome';
import FBSDK,{LoginManager,AccessToken} from 'react-native-fbsdk' ;


export default class Login extends Component {


    constructor(props){
        super(props);
        // We have the same props as in our signup.js file and they serve the same purposes.
        this.state = {
            loading: false,
            email: '',
            password: ''
        }
    }

    render() {
        // The content of the screen should be inputs for a username, password and submit button.
        // If we are loading then we display an ActivityIndicator.



        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View style={styles.container}>
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(email) => this.setState({email: email})}
                    value={this.state.email}
                    placeholder={"Email Address"} />
                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"} />
                <TouchableHighlight onPress={this.login.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                <Text>
                    {"\n"}

                </Text>
               {/*  <TouchableOpacity>
               <Icon.Button name="facebook-official" backgroundColor="#3b5998"
                onPress={this.loginWithFacebook}>
                    Login with Facebook
                </Icon.Button>
                </TouchableOpacity>*/}
                <TouchableOpacity
               onPress={ () => {
                   //navigate to the second screen
                   //alert(this.state.name)
               Actions.home();
            
               }

               }
               >
                <Text style={styles.text}>
                   Next
                </Text>
                </TouchableOpacity>     

            </View>;

        // A simple UI with a toolbar, and content below it.
        return (
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    keyboardShouldPersistTaps={false}
                    automaticallyAdjustContentInsets={true}
                    alwaysBounceVertical={false}
                    style={styles.scrollView}
                >

                    <View style={styles.innerContainer}>
                        <Image source={require("Sportify/Sportify-Logo.png")} style={styles.Logo} />

                    {content}
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goToSignup.bind(this)} style={styles.footer}>
                            <Text style={styles.footerText}>
                                Don't have an account? <Text style={styles.footerActionText}>Sign Up</Text>
                            </Text>
                        </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        );
    }

    login(){
        this.setState({
            loading: true
        });
        // Log in and display an alert to tell the user what happened.
        this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
        ).then((userData) =>
            {
                this.setState({
                    loading: false
                });
                alert("Login successful" + userData);
            }
        ).catch((error) =>
        {
            this.setState({
                loading: false
            });
            alert('Login Failed. Please try again');
        });
    }

    //Log in with facebook
    loginWithFacebook(){
        LoginManager.logInWithReadPermissions(['public_profile']).then(loginResult => {
            if (loginResult.isCancelled) {
                console.log('user canceled');
                return;
            }
            AccessToken.getCurrentAccessToken()
                .then(accessTokenData => {
                    const credential = this.props.provider.credential(accessTokenData.accessToken);
                    return auth.signInWithCredential(credential);
                })
                .then(credData => {
                    console.log(credData);
                })
                .catch(err => {
                    console.log(err);
                });
        });

    }



    // Go to the signup page
    goToSignup(){
        this.props.navigator.push({
            component: Signup
        });
    }
}

