import React from 'react'
import styles from './Homepage.module.scss'
import Image from '@assets/images/wallpaper/wallpaper.jpg'

const styled = {
  background: `url(${Image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}

const Homepage = () => {
  return (
    <>
      <header className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className={styles.header}>north blossom</h1>
          <span className={styles.text}>
            Specjalizuję się w projektowaniu i tworzeniu solidnych aplikacji
            internetowych, wychodząc na przeciw z masą pomysłów i rozwiązań.
          </span>
        </div>
        <div className={styles.wrapper} style={styled}>
          <div className={styles.footer__text}>
            <span className={styles.description}>&copy; 2022</span>
            <span className={`${styles.description} ${styles.btn}`}>i</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Homepage
