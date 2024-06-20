import React, { useContext, useState } from 'react';
import '../css/login_sign.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Nav from './landpage/Nav';
import { store } from '../App';

function Signup_in() {
  axios.defaults.baseURL = "https://final-olx-backend-8-1.onrender.com";
  const [status, setStatus] = useState('signup');
  const [token, setToken] = useState('');
  const [Details, setDetails] = useContext(store);

  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [data1, setData1] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false); // Loading state

  const sub_btn = async () => {
    setLoading(true); // Set loading to true when submitting form
    const { name, email, password } = data;

    // Check if any of the fields are empty
    if (!name || !email || !password) {
      alert("All fields are required");
      setLoading(false); // Set loading to false on error
      return;
    }
    try {
      const res = await axios.post('/person/register', data);
      setData({ name: '', email: '', password: '' });
      setLoading(false); // Set loading to false on success
      alert(res.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false); // Set loading to false on error
    }
  }

  const sub_btn1 = async () => {
    setLoading(true); // Set loading to true when submitting form
    const { email, password } = data1;

    // Check if any of the fields are empty
    if (!email || !password) {
      alert("Email and password are required");
      setLoading(false); // Set loading to false on error
      return;
    }
    try {

      const res = await axios.post('/person/login', data1);
      console.log("res", res);

      setData1({ email: '', password: '' });

      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('personid', res.data.personid);
        localStorage.setItem('personName', res.data.personName)
        setToken(localStorage.getItem('token'));
        setDetails({ ...Details, t: localStorage.getItem('token') });
      }

      if (res.data === 'email') {
        alert('Invalid email');
      } else if (res.data === 'password') {
        alert('Invalid password');
      } else {
        alert('Login successfully');
      }
      setLoading(false); // Set loading to false on success
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setLoading(false); // Set loading to false on error
    }
  }
  console.log("token", token)
  if (token) {
    return <Navigate to='/Sell'></Navigate>
  }

  return (
    <>
      <Nav />
      <div className='section'>
        <div className={`login-box ${status === 'signup' ? 'active' : 'inactive'}`}>
          <div className='signup-container'>
            <div className='header'>
              <div className='text'>
                sign up
              </div>
            </div>
            <div className='inputs'>
              <div className='input'>
                <FontAwesomeIcon className='logo' icon={faUser} />
                <input type='text' placeholder='Name' value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} required></input>
              </div>
              <div className='input'>
                <FontAwesomeIcon className='logo' icon={faEnvelope} />
                <input type='email' placeholder='Email' value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} required></input>
              </div>
              <div className='input'>
                <FontAwesomeIcon className='logo' icon={faLock} />
                <input type='password' placeholder='Password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} required></input>
              </div>
            </div>
            {loading ? (
              <div className="loader-overlay">
                <div className="signspinner"></div>
              </div>
            ) : (
              <button className='btn' onClick={() => sub_btn()}>submit</button>
            )}
            <div className='sub-container'>
              <button className={status === 'signup' ? 'sub' : 'sub blue'} onClick={() => setStatus('signup')}>sign up</button>
              <button className={status === 'signup' ? 'sub blue' : 'sub'} onClick={() => setStatus('signin')}>sign in</button>
            </div>
          </div>
        </div>

        {/* sign in */}
        <div className={`login-box ${status === 'signin' ? 'active' : 'inactive'}`}>
          <div className='signup-container'>
            <div className='header'>
              <div className='text'>
                sign in
              </div>
            </div>
            <div className='inputs'>
              <div className='input'>
                <FontAwesomeIcon className='logo' icon={faEnvelope} />
                <input type='email' placeholder='Email' value={data1.email} onChange={(e) => { setData1({ ...data1, email: e.target.value }) }} required></input>
              </div>
              <div className='input'>
                <FontAwesomeIcon className='logo' icon={faLock} />
                <input type='password' placeholder='Password' value={data1.password} onChange={(e) => { setData1({ ...data1, password: e.target.value }) }} required></input>
              </div>
            </div>
            <div className='submit-btn'>
              {loading ? (
                <div className="loader-overlay">
                  <div className="signspinner"></div>
                </div>
              ) : (
                <button className='btn' onClick={() => sub_btn1()}>submit</button>
              )}
            </div>
            <div className='sub-container'>
              <button className={status === 'signin' ? 'sub blue' : 'sub'} onClick={() => setStatus('signup')}>sign up</button>
              <button className={status === 'signin' ? 'sub' : 'sub blue'} onClick={() => setStatus('signin')}>sign in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup_in;