import React, { Component } from 'react';
import Header from './common/header/Header.js';
import {Provider} from 'react-redux';
import store from './store/store.js';
class App extends Component {
  render() {
    return (
    <Provider store={store}>
       <Header/>
    </Provider>
    );
  }
}

export default App;
