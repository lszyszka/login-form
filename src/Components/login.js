import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Register from "./register";
import Link from "react-router-dom/es/Link";
import Redirect from "react-router-dom/es/Redirect";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {
                userName: '',
                password: ''
            },
            isLogin: undefined
        }
    }

    handleInput(e) {
        this.setState({userLogin: {...this.state.userLogin, [e.target.name]: e.target.value}})
    }

    login() {
        if (this.state.userLogin.userName === localStorage.getItem('userName') &&
            this.state.userLogin.password === localStorage.getItem('password')) {
            console.log("Udalo sie zalogowac");
            this.setState({isLogin: true})
        }
        else {
            this.setState({isLogin: false})
            console.log("Niepoprawne dane");
        }
    }

    render() {
        if (this.state.isLogin === undefined) {
            return <div>
                <label>User Name:</label><input type="text" name="userName" onChange={(e) => {
                this.handleInput(e)
            }}/>
                <label>Password: </label><input type="password" name="password" onChange={(e) => {
                this.handleInput(e)
            }}/>
                <button onClick={() => {
                    this.login()
                }}>Login
                </button>
                <button>
                    <Link to="/register">Register</Link>
                </button>
            </div>
        }
        if (this.state.isLogin) {
            return <Redirect to="/logged"/>
        } else {
            return <div>
                Niepoprawne dane logowanie
            </div>
        }

    }

}


Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

