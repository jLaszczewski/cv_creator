import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCUarV9BuWGF7PfZMvHM8xBFLoTL0uqQsI',
      authDomain: 'cv-creator-782e4.firebaseapp.com',
      databaseURL: 'https://cv-creator-782e4.firebaseio.com',
      projectId: 'cv-creator-782e4',
      storageBucket: 'cv-creator-782e4.appspot.com',
      messagingSenderId: '513429511640'
    };

    firebase.initializeApp(config);
  }

  render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
