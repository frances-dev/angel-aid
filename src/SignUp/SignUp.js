import React from 'react';
import './SignUp.css'
import useAuth from '../Hooks/useAuth';

const SignUp = () => {
    const { user, error, isLogin, handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, toggleLogin, handlePasswordReset, signInWithGoogle, signInWithGithub, logOut } = useAuth();
    return (
        <div>
            <div>
                <form onSubmit={handleRegistration} className="w-50  mx-auto text-start pt-5 mt-5">
                    <h2 className="text-center text-danger mb-3"> Please {isLogin ? 'Log In' : 'Register'} Here</h2>
                    {!isLogin && <div class="col">
                        <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                        <input onBlur={handleNameChange} type="text" class="form-control" aria-label="First name" />
                    </div>}
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-3">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="password" required />
                    </div>
                    <div class="mb-3 form-check">
                        <input onClick={toggleLogin} type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label my-label" for="exampleCheck1">Already Registered?</label>
                    </div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Log In' : 'Register'}</button>
                    <button onClick={handlePasswordReset} type="button" className="btn btn-danger ms-3"> Reset Password</button>
                    <div className="row mt-3 text-danger"> {error} </div>
                </form>
                <br />
            </div>
            {
                !user.name ?
                    <div>
                        <h2>or</h2> <hr className="w-50 mx-auto mb-4" />
                        <button className="btn-warning me-3 ps-3 pe-3 pt-2 pb-2 border-0 rounded-2" onClick={signInWithGoogle}> Sign in With Google</button>
                        <button className="btn-dark me-3 ps-3 pe-3 pt-2 pb-2 border-0 rounded-2" onClick={signInWithGithub}> Sign in With Github</button>
                    </div> :
                    <button className="btn-warning me-3 ps-3 pe-3 pt-2 pb-2 border-0 rounded-2" onClick={logOut}>Sign Out</button>
            }
        </div>
    );
};

export default SignUp;