import React, { useContext, useState } from 'react';
import './Login.css';
import fbIcon from '../../Image/Icon/fb.png';
import google from '../../Image/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [logUser, setLogUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };

    const [createUser, setCreateUser] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        error: "",
        success: false,
    })
    const handleOnBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordHasValid = /\d{1}/.test(e.target.value);
            isFormValid = (isPasswordValid && isPasswordHasValid);
        }
        if (isFormValid) {
            const UserAdd = { ...user };
            UserAdd[e.target.name] = e.target.value;
            setUser(UserAdd);
        }
    };

    const handleSubmit = (e) => {
        if (createUser && user.email && user.password) {
            alert('are you sure');
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const errorWroning = { ...user };
                    errorWroning.error = '';
                    errorWroning.success = true;
                    setUser(errorWroning);
                    

                })
                .catch(error => {
                    // Handle Errors here.
                    const errorWroning = { ...user };
                    errorWroning.error = error.message;
                    errorWroning.success = false;
                    setUser(errorWroning);
                });
        }
        if (!createUser && user.email && user.password) {
            alert('Are you sure?');
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const errorWroning = { ...user };
                    errorWroning.error = '';
                    errorWroning.success = true;
                    setUser(errorWroning);
                    setLogUser(errorWroning);
                    history.replace(from);
                })
                .catch(error => {
                    // Handle Errors here.
                    const errorWroning = { ...user };
                    errorWroning.error = error.message;
                    errorWroning.success = false;
                    setUser(errorWroning);
                });
        }
     
        e.preventDefault();
    }

    // google sign in 
    const googleprovider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn= () => {
        firebase.auth().signInWithPopup(googleprovider)
        .then(res => {
            const {displayName, email} = res.user;
            const NewUser = {name: displayName, email}
            setLogUser(NewUser);
            history.replace(from)
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            
          });
    };

    // facebook sign in

    const FbProvider = new firebase.auth.FacebookAuthProvider();
    const fbSignIn = () => {
        firebase.auth().signInWithPopup(FbProvider)
        .then(res => {
            const {displayName, email} = res.user;
            const NewUser = {name: displayName, email}
            setLogUser(NewUser);
            history.replace(from)
          })
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
          });
    }
    
    return (
        <>
        <div className="bg-dark">
        <Header></Header>
        </div>
        <div className="form_section">
            <h3 className="title">Login</h3>
            <form onSubmit={handleSubmit}>
                <br />
                {createUser && <input className="Swich_form" type="text" name="name" onBlur={handleOnBlur} placeholder="First Name" required />}
                <br />
                {createUser && <input className="Swich_form" type="text" name="name" onBlur={handleOnBlur} placeholder="Last Name" required />}
                <br />
                <div className="Form_control">
                    <input type="text" name="email" onBlur={handleOnBlur} placeholder="Username or Email" required />
                </div>
                <br />
                <div className="Form_control">
                    <input type="password" name="password" onBlur={handleOnBlur} placeholder="Password" required />
                </div>
                <br />
                {createUser && <input className="Swich_form" type="password" name="name" onBlur={handleOnBlur} placeholder="Confrim password" required />}
                <br />
                <input className="Submit_controll" type="submit" value={createUser ? "Sign up" : "Login"} />
            </form>
            <div className="Text_Conrol">
                <span className="h5">Don't have an account ?</span>
                <input type="checkbox" onChange={() => setCreateUser(!createUser)} name="NewUser" />
                <span className="ChekBox_text"><label htmlFor="NewUser">Create an account</label></span>
            </div>

            <p style={{ color: 'red', marginLeft: '50px' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green', marginLeft: '30px' }}>user {createUser ? 'created' : 'Logged In Successfully'}</p>
            }

            <div className="Or_arrow">
                <div className="left_arrow"></div>
                <h3>Or</h3>
                <div className="right_arrow"></div>
            </div>

            <div className="login_btn">
                <button onClick={fbSignIn} className="auto_login"><img src={fbIcon} alt=""/> Continue With Facebook</button>
                <button onClick={googleSignIn}  className="auto_login"><img src={google} alt=""/>Continue With Google</button>
            </div>
        </div>
        </>
    );
};

export default Login;