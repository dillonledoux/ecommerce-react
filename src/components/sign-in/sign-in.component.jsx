import React from 'react';
import './sign-in.styles.sass';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handlChange = event => {
        const { value,  name} = event.target;

        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' onChange={this.handlChange} value={this.state.email} required />
                    <label>Email</label>
                    <input name='password' type='password' onChange={this.handlChange} value={this.state.password} required />
                    <label>Password</label>

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;