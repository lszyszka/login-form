import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './Store/index';
import Login from "./Components/login";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from "./Components/register";


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="App">
                        <Route exact path="/" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
