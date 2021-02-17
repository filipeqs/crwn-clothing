import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import FormInput from '../form-input/FormInput';
import './sign-in.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <label>Email</label>
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
