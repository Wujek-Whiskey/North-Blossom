import React from 'react'
import styles from './Biography.module.scss'

import { Profile } from '@utils/images'

const Biography = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <p className={styles.content__text}>
          Cześć, Mam na imię Kamil. Kreatywny sposób podejścia do pracy to moja
          specjalność. Z wielkim entuzjazmem podchodze do tworzenia identyﬁkacji
          wizualnej marki.
        </p>
        <h1 className={styles.content__header}>biografia</h1>
        <div className={styles.content__line} />
        <p className={styles.content__text}>
          Od dziecka uwielbiam obserwować nocne niebo w poszukiwaniu harmonii.
          Interesuję się historią oraz astronomią. Uważam, że w prostocie tkwi
          to całe piękno.
        </p>
      </div>
      <div className={styles.wrapper__content}>
        <img className={styles.content__image} src={Profile} alt="me" />
        <p className={styles.content__text}>
          Wielki fan serii gier Assassin&apos;s Creed oraz Counter Strike.
          Wieczorami przepadam za słuchaniem spokojnych utworów. Wolnych
          chwilach spędzam czas z przyjaciółmi.
        </p>
      </div>
    </header>
  )
}

export default Biography
