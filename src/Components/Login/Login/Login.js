import React, { useContext } from 'react';
import { userContext } from '../../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import googleIcon from '../../../creative-agency/images/icons/google.png';
import logo from '../../../creative-agency/images/logos/logo.png'

firebase.initializeApp(firebaseConfig);
const LogIn = () => {

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/dashBoard" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignInGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          name: displayName,
          email: email,
          image: photoURL
        }
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(err => {
        document.getElementById("showError").innerText =`Network Error!!!
         Please Try Again`
      })
  }

  
  return (
    <div>
      <div>
        <div className="d-flex logo justify-content-center mb-3">
            <img src={logo} alt=""/>
        </div>
      </div>
      <div>
          <h4 id="showError" className="text-center mb-3"></h4>
      </div>
    <div className="logInCreateCard mb-3">
      <div className="logInCardBody mt-5 mb-5">
        <h3 style={{ fontWeight: "bold" }} className="mb-3 text-center">Login With</h3>

        <div onClick={handleSignInGoogle} className="row d-flex align-items-center loginWithstyle mb-3">
          <div className="col-4">
            <img src={googleIcon} alt="" width="45px" />
          </div>
          <div className="col-8">
            <h5>Continue with Google</h5>
          </div>
        </div>

        <div className="text-center">
          <h5 style={{ display: "inline" }}>Already have an account?</h5>
          <button className="creactAccountButton">Create an Account</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LogIn;