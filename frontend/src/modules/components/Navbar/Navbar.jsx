import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../../assets/logo.svg'
import navbarMenu from '../../utils/helpers'

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.navLeft}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.navRight}>
          {navbarMenu.map((menuItem, index) => (
            <div className={styles.navBox}>
              <span key={index} className={styles.navLink}>{menuItem}</span>
            </div>
          ))}
          <button className={styles.loginBtn}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
