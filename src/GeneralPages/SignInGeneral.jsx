import React, { useState } from 'react';
import TitleBox from '../ComponentsGeneral/TitleBox';
import profileUserGeneral from '../Assets/profile-user.png';
import '../StylesGeneral.css';

 function SignInGeneral() {

      const [name, setName] =useState('')
      const [password, setPassowrd] =useState('')

  return (
    <div>
        <TitleBox/>
     <div><img className='Profile-User-General' src={profileUserGeneral} alt="User-General" /></div>
      <div className='SignIn-one'>
        <form action=''>
          <div className='SignIn-name'>
          <input type='name' placeholder='Username' className='form-control'
          onChange={e => setName(e.target.value)}/>
          </div>
          <div className='SignIn-password'>
          <input type='password' placeholder='Password' className='form-control'
          onChange={e => setPassowrd(e.target.value)}/>
          </div>
          <div> 
            <label htmlFor='forgotPassword' className='SignIn-fogot-password'>Forgot Password</label>
          </div>
          <div>
            <label htmlFor='rememberMe' className='SignIn-remember-me'>Remember me</label>
            <button className='btn btn-success w-50 ' >Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInGeneral;
