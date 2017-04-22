import React,  {Component} from 'react';

import * as firebase from 'firebase';
import {
    View,
    Text

}from 'react-native';



import {GiftedChat} from 'react-native-gifted-chat';
//import Backend from './Backend';

class Chat extends Component{
  /*
    state={
        messages: []
    };
    render(){

        return(
             <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
            //send message to backend
        }}
        user={{
          _id: 1,
        }}
      />)
}*/
//mocking test of chat
constructor(props) {
    super(props);
    this.state = {messages: []};
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }

//with Backend



/*
   state={
        messages: []
    };
  componentWillMount() {

  }

   
    render(){

        return(
             <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
            //send message to backend
            Backend.sendMessage(message)
        }}
        user={{
          _id: Backend.getUid(),
          name:this.props.name
        }}
      />)
}

componentDidMount(){
    Backend.loadMessages((message) => {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages,message)
            };
        })
    })
}

componentWillUnmount(){
    Backend.closeChat();
}*/
}

export default Chat;