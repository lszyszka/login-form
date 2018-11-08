import React from 'react';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {toast, ToastContainer} from "react-toastify";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLogin: {
                userName: '',
                password: ''
            }

        }
    }


    handleInput(e) {

        this.setState({userLogin: {...this.state.userLogin, [e.target.name]: e.target.value}})
    }

    notify = () => toast.error("Wrong username or password!");

    check() {

    }

    render() {

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
                                            }}/>
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
                            New to us? <Link style={{fontSize: "1.5rem"}} to="/register">Register</Link>
                        </Message>
                    </Grid.Column>
                </Grid>


            </div>
        }
        if (this.props.isLogin) {
            return <div><img src="https://media.giphy.com/media/HXF45CT8cvzZC/giphy.gif" alt="GOOD LUCK"/>
                <Header as='h2' color='teal' textAlign='center'>
                    Login Successful ! <br/>
                    Welcome {localStorage.getItem('firstName')} :)
                </Header>
            </div>
        }
        else {
            return <div>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />

                {this.notify()}
                {this.timeID = setTimeout(() => {
                    window.location.reload()
                }, 1500)}

            </div>


        }

    }

}


Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;

