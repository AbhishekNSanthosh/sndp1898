import React from 'react'
import styles from './Event.module.css'
import event from '../../../assets/event.png'

export const Events = () => {
  const events = [
    event,
    event,
    event,
    event,
  ]
  return (
    <div className={styles.eventsContainer}>
      <div className={styles.eventsWrapper}>
        <div className={styles.titleBox}>
          <span className={styles.title}>Events</span>
        </div>
        <div className={styles.eventsBox}>
          {events.map((img, index) => (
            <img src={img} alt="" className={styles.eventItem} />
          ))}
        </div>
      </div>
    </div>
  )
}
