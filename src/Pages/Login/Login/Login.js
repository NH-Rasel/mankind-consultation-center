import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInUsingEmail, handleEmail,
        handlePassword } = useAuth();
    return (
        <div className="container mb-5">
            <div className="login-form">
                <div className="input-form p-lg-4 mt-lg-5 p-sm-2 mt-sm-4">
                    <form onSubmit={signInUsingEmail}>
                        <h2 className="py-3">Login your account</h2>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input onBlur={handleEmail} type="email" className="form-control" placeholder="Enter your email" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter your password" required />
                        </div>
                        <button className="btn btn-dark">Login</button><br />
                        <p>New user? <Link to="/register">Create Account</Link></p>

                    </form>
                    <div>Or Sign In Using</div>
                    <button className="btn btn-dark" onClick={signInUsingGoogle}>Google</button>
                </div>

            </div>


        </div>
    );
};

export default Login;