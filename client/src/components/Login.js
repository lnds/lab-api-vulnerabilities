import React, { Fragment, useState } from "react"
import PropTypes from 'prop-types'
import serverApiUrl from "./consts"


async function loginUser(credentials) {
    return fetch(`${serverApiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
        
}

const Login = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password
        });
        console.log('token:', token)
        if (token.token) {
           setError(null);
           setToken(token);
          } else {
            setError("Error, invalid user or password")
          }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Login</h1>
            <form className="form-signin" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {error ? <div className="alert alert-danger">Error, email o password inválidos</div> : <div></div>}
                <button type="submit" className="btn btn-success">Login</button>
            </form>
        </Fragment>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login
