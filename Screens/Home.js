import React,  {Component} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity

}from 'react-native';
import styles from 'Sportify/SharedStyles';
import {Actions} from 'react-native-router-flux'
class Home extends Component{
    state={
        name :''
    };
    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                   Enter Your Name :
                </Text>
                
                <TextInput style={styles.inputContainer}
                placeholder='Maryem'
                // to send the name to the next page
                onChangeText={(text) =>{
                    this.setState({
                        name:text
                    });

                    }
                    }
                    value={this.state.name}
               
                />

               <TouchableOpacity
               onPress={ () => {
                   //navigate to the second screen
                   //alert(this.state.name)
               Actions.chat({
                   name : this.state.name
               });
            
               }

               }
               >
                <Text style={styles.text}>
                 Chat
                </Text>
                </TouchableOpacity> 

                <TouchableOpacity
               onPress={ () => {
                   //navigate to the second screen
                   //alert(this.state.name)
               Actions.listViewDemo()
            
               }

               }
               >
                <Text style={styles.text}>
                   Discussion
                </Text>
                </TouchableOpacity>     
    
            </View>
        );
    }
}

export default Home;