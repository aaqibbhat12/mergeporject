import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../assets/images/Logo.png';
import styles from '../../Pages/ResetPassword/Resetpassword.module.css';
import eyelogo from '../../assets/images/logo1.png';

const Resetpassword = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    const [formdata, setformdata] = useState({
        newpassword: '',
        confirmnewpassword: ''
    });

    const [message, setMessage] = useState('');

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value
        });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (formdata.newpassword !== formdata.confirmnewpassword) {
            setMessage('New password and confirm password must be the same.');
            return;
        }

        try {
            const response = await axios.post(`https://raybit-tasks.onrender.com/user2/reset-password?token=${token}`, {
                newPassword: formdata.newpassword
            });

            if (response.status === 200) {
                setMessage('Password reset successfully! You can now login.');
            } else {
                setMessage('Unexpected response from the server.');
            }

        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setMessage(error.response.data.error);
            } else {
                setMessage('Password reset failed. Please try again.');
            }
            console.error('Error during password reset:', error);
        }
    };

    return (
        <>
            <div className={styles.starlogo}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.guidance}>Guidance</div>
            <div className={styles.Resetpassword}>Reset your password</div>

            {message && <span className={styles.message}>{message}</span>}

            <form onSubmit={handlesubmit}>
                <div className={styles.passwordlabel}>
                    <label>Enter New Password</label>
                </div>
                <div className={styles.labelandinputpassword}>
                    <input
                        type='password'
                        name='newpassword'
                        value={formdata.newpassword}
                        onChange={handlechange}
                        required
                        placeholder='.......'
                    />
                    <div className={styles.eyelogo}>
                        <img className={styles.eyeimage} src={eyelogo} alt="Eye" />
                    </div>
                </div>
                <div className={styles.confrompasswordlabel}>
                    <label>Confirm New Password</label>
                </div>
                <div className={styles.labelandinputconformpassword}>
                    <input
                        type='password'
                        name='confirmnewpassword'
                        value={formdata.confirmnewpassword}
                        onChange={handlechange}
                        required
                        placeholder='.......'
                    />
                    <div className={styles.conformeyelogo}>
                        <img className={styles.eyeimage} src={eyelogo} alt="Eye" />
                    </div>
                </div>
                <div className={styles.buttonsave}>
                    <button type="submit">Save password & login</button>
                </div>
            </form>
        </>
    );
};

export default Resetpassword;
