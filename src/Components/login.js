import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Register from "./register";
import Link from "react-router-dom/es/Link";
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {
                userName: '',
                password: ''
            },
            error: []
        }
    }

    validate(e) {
        if (!/([A-Za-z0-9])$/.test(e.target.value)) {
            console.log("Tylko cyfry i litery");
            this.state.error.push("ZLY")
            return null;
        }
    }


    handleInput(e) {

        this.setState({userLogin: {...this.state.userLogin, [e.target.name]: e.target.value}})
    }

    render() {
        console.log(this.props);
        if (this.props.isLogin === undefined) {
            return <div>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450, marginTop: "20px"}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            Log-in
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' name='userName' iconPosition='left' placeholder='Login'
                                            onChange={(e) => {
                                                this.handleInput(e)
                                            }} onFocus={(e) => this.validate(e)}/>
                                <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'
                                            name='password' onChange={(e) => {
                                    this.handleInput(e)
                                }}/>

                                <Button color='teal' fluid size='large' onClick={() => {
                                    this.props.loginUser(this.state.userLogin)
                                }}>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us?<Link to="/register">Register</Link>
                        </Message>
                    </Grid.Column>
                </Grid>


            </div>
        }
        if (this.props.isLogin) {
            return <div><img src="https://media.giphy.com/media/HXF45CT8cvzZC/giphy.gif"/>
                <Header as='h2' color='teal' textAlign='center'>
                    Login Successful ! <br/>
                    Welcome {localStorage.getItem('firstName')} :)
                </Header>
            </div>
        } else {
            return <div>
                Niepoprawne dane logowanie
            </div>
        }

    }

}


Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

