import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom"

import store from '../store/index'

import {login} from '../actions/index';

// import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            success: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();

        const post = {
            email: this.state.email,
            password: this.state.password

        };

        this.props.login(post);
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.user.Message)
        if (nextProps.user.Message === "User doesn't exists") {
            this.setState({
                message: nextProps.user.Message
            })
        }
        if (nextProps.user.Message === "Successful login") {
            this.setState({
                success: "welcome "
            });
            this.props.history.push("/parcel")
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.path !== this.state.path) {
        //     console.log(this.props)
        // }
        function handleChange() {
            const previousValue = currentValue
            currentValue = select(store.getState());

            if (previousValue !== currentValue) {
                console.log(
                    'Some deep nested property changed from',
                    previousValue,
                    'to',
                    currentValue
                );
            }
        }

        const unsubscribe = store.subscribe(handleChange);
        unsubscribe()

    }


    render() {
        return (
            <div className="center">
                <Form onSubmit={this.onSubmit}>
                    <p className="alert-danger" id="message">{this.state.message}</p>
                    <p className="alert-success" id="success">{this.state.success}</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address </Form.Label>
                        <div className="bg-danger">

                        </div>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}

login.propTypes = {
    login: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (post) => {
            dispatch(login(post))
        }
    }
};
const mapStateToProp = state => ({
    user: state.user.user_data
});


export default withRouter(connect(mapStateToProp, mapDispatchToProps)(LoginForm));
