import React from 'react'
import styles from '../Navbar/Navbar.module.css'
import image from '../../assets/images/Vector (2).png'

const Navbar = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.button}>
                    <button>Consult</button>
                </div>
                <div className={styles.msg}>
                    <span className={styles.msg3}>3</span>
                    <img src={image} alt='' />
                </div>
            </div>
        </>
    )
}

export default Navbar