import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Redirect from "react-router-dom/es/Redirect";

import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

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
            this.timeOutId = setTimeout(() => {
                this.props.history.push("/");
            }, 1500)

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
            <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450, marginTop: "20px"}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        Register account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user circle' name='firstName' iconPosition='left'
                                        placeholder='First Name'
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>
                            <Form.Input fluid icon='user circle outline' name='userName' iconPosition='left'
                                        placeholder='User Name'
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>
                            <Form.Input fluid icon='lock' name='password' iconPosition='left' type='Password'
                                        placeholder='Password'
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>
                            <Form.Input fluid icon='lock' name='confirmPassword' type='password' iconPosition='left'
                                        placeholder='Confirm Password'
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>


                            <Button color='teal' fluid size='large' onClick={() => {
                                this.validate();
                            }}>
                                Register
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <Link to="/">Back to Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>


        </div>
    }


}


Register = connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;

