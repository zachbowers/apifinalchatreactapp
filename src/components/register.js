import React, { Component } from 'react';
import { submitRegister } from '../actions/authActions';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button,Label } from 'react-bootstrap';

class Register extends Component {

    constructor() {
        super();
        this.updateDetails = this.updateDetails.bind(this);
        this.register = this.register.bind(this);
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

    register() {
        const { dispatch } = this.props;
        dispatch(submitRegister(this.state.details));
    }

    render() {
        return (


            <div class="register-photo">

                <div class="form-container"><div class="image-holder"></div>
                    <h2 class="text-center"><strong>Create</strong> an account.</h2>
                    <Form onsubmit={this.register} horizontal>
                        <FormGroup controlId="username">
                            <Label for="username">Username</Label>
                            <FormControl onChange={this.updateDetails} value={this.state.details.username} type="username" placeholder="Username" />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <Label for="password">Password</Label>
                            <FormControl onChange={this.updateDetails} value={this.state.details.password} type="password" placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Register</Button>
                        </FormGroup>
                    </Form>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Register);