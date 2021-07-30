import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { MemoryRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = ConfigureStore();

class App extends Component{

  
  render() {
      return (
        <Provider store={store}>
            <MemoryRouter> 
              <div>
                <MainComponent/>
              </div>
            </MemoryRouter>
        </Provider>
    );
  }
}

export default App;
