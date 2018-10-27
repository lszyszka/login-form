import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './Store/index';
import Login from "./Components/login";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from "./Components/register";
import Logged from "./Components/logged";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Route exact path="/" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/logged" component={Logged}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
