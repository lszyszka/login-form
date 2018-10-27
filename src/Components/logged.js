import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Redirect from "react-router-dom/es/Redirect";

class Logged extends React.Component {
    render() {
        return <div>
            <img src="https://media.giphy.com/media/HXF45CT8cvzZC/giphy.gif"/>
        </div>
    }


}


Logged = connect(mapStateToProps, mapDispatchToProps)(Logged);
export default Logged;

