import React from 'react';
import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Input, FormControl, Button, FormLabel } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // import useNavigate hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Redirect to Timer component if authentication is successful
        navigate('/timer');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        // Redirect to Timer component if authentication is successful
        navigate('/timer');
        //alert(user);
        console.log(user);
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6 border shadow p-3 mb-5 bg-white rounded'>
            <form className='mt-4'>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input placeholder='Enter Your Email Id' value={email} onChange={(e) => setEmail(e.target.value)} className='mb-3' />
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                <Button onClick={handleLogin} m={3} className='mt-3 mb-3' type='submit' colorScheme='green' isDisabled>Login</Button>
                <Button onClick={googleSignIn} className='mt-3 mb-3' type='button' colorScheme='blue'>Sign in with Google</Button>
              </FormControl>
            </form>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

