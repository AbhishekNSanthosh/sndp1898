import React from 'react'
import styles from './Updates.module.css'
import { FaRocket } from "react-icons/fa";

export const Updates = () => {
  const data = [
    "ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട് 114 ആമത് വാർഷിക പൊതുയോഗത്തിൽ ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട്",
    "ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട് 114 ആമത് വാർഷിക പൊതുയോഗത്തിൽ ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട്",
    "ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട് 114 ആമത് വാർഷിക പൊതുയോഗത്തിൽ ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട്",
    "ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട് 114 ആമത് വാർഷിക പൊതുയോഗത്തിൽ ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട്",
    "ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട് 114 ആമത് വാർഷിക പൊതുയോഗത്തിൽ ജനറൽ സെക്രട്ടറിയുടെ റിപ്പോർട്ട്",
  ]
  return (
    <div className={styles.updatesContainer}>
      <div className={styles.updatesWrap}>
        <div className={styles.updatesTitle}>
          <span className={styles.title}>Latest updates</span>
        </div>
        <div className={styles.updatesBox}>
          {data.map((item, index) => (
            <div key={index} className={styles.updatesRow}>
              <div className={styles.iconContainer}>
                <FaRocket />
              </div>
              <span className={styles.updatesTxt}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
