import React from 'react'
import styles from './TopBar.module.css'
import { FaFacebookF, FaInstagram, FaMailchimp, FaPhone, FaWhatsapp } from 'react-icons/fa';

export const TopBar = () => {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBarWrapper}>
        <div className={styles.topBarLeft}>
          <FaFacebookF className={styles.topIcon} />
          <FaInstagram className={styles.topIcon} />
          <FaWhatsapp className={styles.topIcon} />
          <FaPhone className={styles.topIcon} />

        </div>
        <div className={styles.topBarCenter}>
          <span className={styles.topBarTag}>
            One caste, one religion, one god for humankind
          </span>
        </div>
        <div className={styles.topBarRight}>
          <span className={styles.topBarTxt}>
            Donate ?
          </span>
        </div>
      </div>
    </div>
  )
}
