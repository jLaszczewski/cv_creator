import React, { Component } from 'react';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  componentWillMount() {
    if (this.props.autologin) {
      this.onLoginSuccess();
    }
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
      // .catch(() => {
      //   firebase.auth().createUserWithEmailAndPassword(email, password)
      //     .then(this.onLoginSuccess.bind(this))
      //     .catch(this.onLoginFail.bind(this));
      // });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
    Actions.main();
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'Authentication Falied.'
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  
  render() {
    const { email, password } = this.state;
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="some.mail@example.com"
            value={email}
            onChangeText={text => this.setState({ email: text })}
            autoCapitalize={'none'}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="*******"
            value={password}
            onChangeText={text => this.setState({ password: text })}
          />
        </CardSection>
        <CardSection>
          <Text style={errorTextStyle}>
            {this.state.error}
          </Text>

          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
