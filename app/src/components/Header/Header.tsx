import React, { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dashboard</h1>

      <dl className={styles.card}>
        <dt>Available Balance</dt>
        <dd className={styles.amount}>
          <sup>€</sup>2500,53
        </dd>
        <dt hidden>Currency</dt>
        <dd className={styles.currency}>EUR</dd>
      </dl>
    </header>
  )
}

export default Header
