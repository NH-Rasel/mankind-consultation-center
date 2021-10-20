import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle, signUpUsingEmail, handleEmail, handlePassword, error } = useAuth();
    return (
        <div>
            <div className="container mb-5">
                <div className="register-form">
                    <div className="input-form p-lg-4 my-lg-5 py-sm-2 my-sm-4">
                        <form onSubmit={signUpUsingEmail}>
                            <h2 className="py-3">Create New Account</h2>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input onBlur={handleEmail} type="email" className="form-control" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter your password" required />
                            </div>
                            <div><h3>{error}</h3></div>
                            <button type="submit" className="btn btn-dark">Register</button><br />
                            <p>Already Registered? <Link to="/login">Login here</Link></p>
                        </form>
                        <div>Or Sign Up using</div>
                        <button onClick={signInUsingGoogle} className="btn btn-dark">Google</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;