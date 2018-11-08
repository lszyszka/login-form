import React from 'react';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                userName: '',
                password: '',
                confirmPassword: ''
            },
            error: {
                nameError: "",
                userError: "",
                passError: "",
                confpassError: ""
            },
            validate: false
        }
    }

    handleInput(e) {
        this.setState({user: {...this.state.user, [e.target.name]: e.target.value}});
    }

    notify = () => toast.error("Correct fill all input !");
    notifySucces = () => toast.success("Register succesful");

    validate() {
        if (this.state.user.firstName === "" || this.state.user.userName === "" || this.state.user.password === "" ||
            this.state.user.password !== this.state.user.confirmPassword || this.state.validate === false) {
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
                autoClose={2500}
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
                                            this.handleInput(e);
                                            if (!e.target.value.match(/^[A-Za-z]+$/)) {
                                                this.setState({
                                                    error: {
                                                        ...this.state.error,
                                                        nameError: "Only letters a-z A-Z"
                                                    }, validate: false
                                                })
                                            } else {
                                                this.setState({
                                                    error: {...this.state.error, nameError: ""},
                                                    validate: true
                                                })
                                            }
                                        }}/>
                            <Header as='h5' color='red'>{this.state.error.nameError}</Header>
                            <Form.Input fluid icon='user circle outline' name='userName' iconPosition='left'
                                        placeholder='User Name'
                                        onChange={(e) => {
                                            this.handleInput(e);
                                            if (!e.target.value.match(/^[A-Za-z0-9]+$/)) {
                                                this.setState({
                                                    error: {
                                                        ...this.state.error,
                                                        userError: "Only letters and numbers (_/:;.,?>< not allow)"
                                                    }, validate: false
                                                })
                                            } else {
                                                this.setState({
                                                    error: {...this.state.error, userError: ""},
                                                    validate: true
                                                })
                                            }
                                        }}/>
                            <Header as='h5' color='red'>{this.state.error.userError}</Header>
                            <Form.Input fluid icon='lock' name='password' iconPosition='left' type='Password'
                                        placeholder='Password'
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>
                            <Header as='h5' color='red'>{this.state.error.passError}</Header>
                            <Form.Input fluid icon='lock' name='confirmPassword' type='password' iconPosition='left'
                                        placeholder='Confirm Password' onBlur={(e) => {
                                if (e.target.value !== this.state.user.password) {
                                    console.log(e.target.value + "  " + this.state.user.password);
                                    this.setState({
                                        error: {
                                            ...this.state.error,
                                            confpassError: "Passwords aren't the same"
                                        }, validate: false
                                    })
                                } else {
                                    this.setState({error: {...this.state.error, confpassError: ""}, validate: true});
                                }
                            }
                            }
                                        onChange={(e) => {
                                            this.handleInput(e)
                                        }}/>
                            <Header as='h5' color='red'>{this.state.error.confpassError}</Header>


                            <Button color='teal' fluid size='large' onClick={() => {
                                this.validate();
                            }}>
                                Register
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account? <Link style={{fontSize: "1.5rem"}} to="/">Back to Login</Link>
                    </Message>
                </Grid.Column>
            </Grid>


        </div>
    }


}


Register = connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;

