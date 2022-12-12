import React from 'react'
import styles from './Homepage.module.scss'

const Homepage = () => {
  return (
    <header className={styles.content}>
      <h1 className={styles.header}>projektuje ~ programuje</h1>
      <p className={styles.description}>
        Specjalizuję się w projektowaniu i tworzeniu solidnych aplikacji
        internetowych, wychodząc na przeciw z masą pomysłów i rozwiązań.
      </p>
    </header>
  )
}

export default Homepage
