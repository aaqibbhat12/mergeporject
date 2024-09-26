import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/images/Logo.png';
import googlelogo from '../../assets/images/google 1.png';
import applelogo from '../../assets/images/Vector.png';
import eyelogo from '../../assets/images/logo1.png';
import styles from '../Singup/Signup.module.css';

function Signup() {
    const [formdata, setformdata] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState(''); // State for success or error messages

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://raybit-tasks.onrender.com/user2/signup', formdata);

            // If the status is 201, account creation is successful
            if (response.status === 201) {
                setMessage('Account created successfully!');
                console.log("response submitted successfully", response);

                // Clear form after success
                setformdata({
                    username: '',
                    email: '',
                    password: ''
                });
            } else {
                // Handle unexpected responses
                setMessage('Unexpected response from server.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {

                setMessage(error.response.data.error);
            } else {
                setMessage('Failed to submit. Please try again.');
            }
            console.log('Submission failed:', error);
        }
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        });
    };

    return (
        <>
            <div className={styles.starlogo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.guidance}>
                Guidance
            </div>
            <div className={styles.Signup}>Sign up</div>

            <div className={styles.googlelogo}>
                <img src={googlelogo} alt="Google Logo" />
                Continue with Google
            </div>
            <div className={styles.applelogo}>
                <img src={applelogo} alt="Apple Logo" />
                Continue with Apple
            </div>
            <div className={styles.line}></div>

            {/* Display the success or error message */}
            {message && <span className={styles.message}>{message}</span>}

            <form onSubmit={handlesubmit}>
                <div className={styles.namelabel}>
                    <label>Name</label>
                </div>
                <div className={styles.labelandinputname}>
                    <input
                        type='text'
                        name='username'
                        value={formdata.username}
                        onChange={handlechange}
                        className={styles.inputfiled}
                        required
                        placeholder='Raybit Tech'
                    />
                </div>

                <div className={styles.emaillabel}>
                    <label>Email</label>
                </div>
                <div className={styles.lableandinputemail}>
                    <input
                        type='email'
                        name='email'
                        value={formdata.email}
                        onChange={handlechange}
                        required
                        placeholder='Raybit@gmail.com'
                    />
                </div>

                <div className={styles.passwordlabel}>
                    <label>Password</label>
                </div>
                <div className={styles.labelandinputpassword}>
                    <input
                        type='password'
                        name='password'
                        value={formdata.password}
                        onChange={handlechange}
                        required
                        placeholder='.......'
                    />
                    <div className={styles.eyelogo}>
                        <img className={styles.eyeimage} src={eyelogo} alt="Eye Logo" />
                    </div>
                </div>

                <div className={styles.checkbox}>
                    <input type='checkbox' />
                </div>
                <div className={styles.terms}>
                    I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>
                </div>

                <div className={styles.button}>
                    <button type="submit">Submit</button>
                </div>
                <div className={styles.linktologin}>
                    <span>Already have an account?</span>
                    <a href='/login'>Login</a>
                </div>
            </form>
        </>
    );
}

export default Signup;
