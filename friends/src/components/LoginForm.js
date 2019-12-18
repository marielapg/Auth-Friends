import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/actions';

const LoginForm = (props) => {
    const [loginValues, setLoginValues] = useState({ username: '', password: '' })

    const handleChanges = e => {
        setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.loginUser(loginValues)
        setTimeout(()=>{props.history.push('/friends')}, 3000)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type='text'
                    name='username'
                    onChange={handleChanges}
                    value={loginValues.name} />
                <label>Password:</label>
                <input
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={loginValues.password} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default connect(state => state, { loginUser })(LoginForm);