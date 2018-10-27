import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Redirect from "react-router-dom/es/Redirect";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                userName: '',
                password: '',
                confirmPassword: ''
            }
        }
    }

    handleInput(e) {
        this.setState({user: {...this.state.user, [e.target.name]: e.target.value}});
    }

    notify = () => toast.error("Fill all input !");
    notifySucces = () => toast.success("Register succesful");

    validate() {
        if (this.state.user.firstName === "" || this.state.user.userName === "" || this.state.user.password === "" ||
            this.state.user.password !== this.state.user.confirmPassword) {
            this.notify()
        }
        else {
            this.props.registerUser(this.state.user);
            this.notifySucces();
        }
    }


    render() {
        console.log(this.state);
        return <div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <label>First Name: </label><input name="firstName" type="text" onChange={(e) => {
            this.handleInput(e)
        }}/>
            <label>User Name: </label><input name="userName" type="text" onChange={(e) => {
            this.handleInput(e)
        }}/>
            <label>Password: </label><input name="password" type="password" onChange={(e) => {
            this.handleInput(e)
        }}/>
            <label>Confim Password: </label><input name="confirmPassword" type="password" onChange={(e) => {
            this.handleInput(e)
        }}/>
            <button onClick={() => {
                this.validate();
            }}>Send
            </button>
            <Link to="/">Back to Login</Link>
        </div>
    }

}


Register = connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;

