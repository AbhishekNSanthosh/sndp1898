import React from 'react'
import styles from './Banner.module.css'
import bannerimg from '../../../assets/banner1.png'

export const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={bannerimg} alt="" className={styles.banner} />
    </div>
  )
}
