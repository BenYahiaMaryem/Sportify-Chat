/**
 * Created by nour on 3/27/17.
 */
'use strict';
import {
    AppRegistry,
    Text,
    TextInput,
    Image,
    ScrollView,
    View,
    TouchableHighlight,
    TouchableOpacity,
    ToolbarAndroid,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

import styles from 'Sportify/SharedStyles'
import React, {Component} from 'react';
import Login from './Login';
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // used to display a progress indicator if waiting for a network response.
            loading: false,
            // entered credentials
            email: '',
            password: ''

        }
    }

    // A method to passs the username and password to firebase and make a new user account
    signup() {
        this.setState({
            // When waiting for the firebase server show the loading indicator.
            loading: true
        });

        // Make a call to firebase to create a new user.
        this.props.firebaseApp.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password).then((authData) => {
            let userRef = this.props.firebaseApp.database().ref().child('profiles').child(authData.uid);
            userRef.set({ email: this.state.email })
                .then(() => next(this.state))
                .catch((err) => error(err));
        }).then(() => {
            // then and catch are methods that we call on the Promise returned from
            // createUserWithEmailAndPassword
            alert('Your account was created!');
            this.setState({
                // Clear out the fields when the user logs in and hide the progress indicator.
                email: '',
                password: '',
                loading: false
            });
        }).
        catch((error) => {
            // Leave the fields filled when an error occurs and hide the progress indicator.
            this.setState({
                loading: false
            });
            alert("Account creation failed: " + error.message );
        });
    }

    goToLogin(){
        this.props.navigator.push({
            component: Login
        });
    }
    render() {
        // The content of the screen should be inputs for a username, password and submit button.
        // If we are loading then we display an ActivityIndicator.
        const content = this.state.loading ? <ActivityIndicator size="large"/> :
            <View>

                <TextInput
                    style={styles.inputContainer}
                    onChangeText={(email) => this.setState({email: email})}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={this.state.email}
                    placeholder={"Email Address"} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"} />


                <TouchableHighlight onPress={this.signup.bind(this)} style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableHighlight>


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
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goToLogin.bind(this)} style={styles.footer}>
                            <Text style={styles.footerText}>
                                Already signed up? <Text style={styles.footerActionText}>Login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

AppRegistry.registerComponent('Signup', () => Signup);
