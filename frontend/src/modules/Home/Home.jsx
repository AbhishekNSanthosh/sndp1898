import React from 'react'
import styles from './Home.module.css'
import { Navbar } from '../components/Navbar/Navbar'
import { TopBar } from '../components/TopBar/TopBar'
import { Banner } from '../components/Banner/Banner'
import { Events } from '../components/Events/Events'
import { Updates } from '../components/Updates/Updates'

export const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Banner />
      <section>
        <div className={styles.section}>
          <div className={styles.eventsSection}>
            <Events />
          </div>
          <div className={styles.updatesSection}>
            <Updates />
          </div>
        </div>
      </section>
    </div>
  )
}
