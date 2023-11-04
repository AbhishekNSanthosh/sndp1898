import React from 'react'
import styles from './Home.module.css'
import { Navbar } from '../components/Navbar/Navbar'
import TopBar from '../components/TopBar/TopBar'

export const Home = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
    </div>
  )
}
