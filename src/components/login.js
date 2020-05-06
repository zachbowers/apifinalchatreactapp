import React, { Component } from 'react';
import { submitLogin } from '../actions/authActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl, FormLabel, Button, Label } from 'react-bootstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
        this.login = this.login.bind(this);

        this.state = {
            details: {
                username: '',
                password: ''
            }
        };
    }

    updateDetails(event) {
        let updateDetails = Object.assign({}, this.state.details);
        updateDetails[event.target.id] = event.target.value;
        this.setState({
            details: updateDetails
        });
    }

    login(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(submitLogin(this.state.details));
    }

    render() {
        return (
            <div className="center">
                <Form onSubmit={this.login} horizontal>
                    <FormGroup controlId="username">
                        <Label for="username">Username</Label>
                        <FormControl onChange={this.updateDetails} value={this.state.details.username} type="username" name="username" placeholder="Username" />
                    </FormGroup>
                    <FormGroup controlId="password">
                        <FormLabel for="password">Password</FormLabel>
                        <FormControl onChange={this.updateDetails} value={this.state.details.password} type="password" name="password" placeholder="Password" />
                    </FormGroup>
                    <Button type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
export default connect(mapStateToProps)(Login);