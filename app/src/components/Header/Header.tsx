import React, { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>
    </header>
  )
}

export default Header
