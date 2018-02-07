import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Spinner } from './common';
import LoginForm from './views/LoginForm';

class Autologin extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LoginForm autologin={'true'} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderContent()}
      </View>
    );
  }
}

export default Autologin;
