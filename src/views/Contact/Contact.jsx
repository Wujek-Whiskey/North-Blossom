import React from 'react'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <header className={styles.content}>
      <h1 className={styles.header}>kontakt</h1>
      <div className={styles.line} />
      <div className={styles.footer}>
        <div className={styles.footer__contact}>
          <div className={styles.footer__contact_item}>
            <span className={styles.description}>social</span>
            <span className={styles.description}>portoflio</span>
          </div>
        </div>
        <div className={styles.footer__contact}>
          <div className={styles.footer__contact_item}>
            <span className={styles.description}>
              <div className={styles.container}>
                <a
                  href={'https://www.facebook.com/kamil.klawikowski.547'}
                  className={styles.social}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className={styles.inner}>
                    <span className={styles.inner__link}>
                      <span className={styles.social__link}>facebook</span>
                    </span>
                    <span className={styles.inner__link} aria-hidden="true">
                      <span className={styles.social__link}>facebook</span>
                    </span>
                  </div>
                </a>
                <a
                  href={'https://www.instagram.com/wujekfinlandia/'}
                  className={styles.social}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className={styles.inner}>
                    <span className={styles.inner__link}>
                      <span className={styles.social__link}>instagram</span>
                    </span>
                    <span className={styles.inner__link} aria-hidden="true">
                      <span className={styles.social__link}>instagram</span>
                    </span>
                  </div>
                </a>
              </div>
            </span>
            <span className={styles.description}>
              <div className={styles.container}>
                <a
                  href={'https://www.behance.net/kamilklawiko'}
                  className={styles.social}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className={styles.inner}>
                    <span className={styles.inner__link}>
                      <span className={styles.social__link}>behance</span>
                    </span>
                    <span className={styles.inner__link} aria-hidden="true">
                      <span className={styles.social__link}>behance</span>
                    </span>
                  </div>
                </a>
                <a
                  href={'https://github.com/Wujek-Whiskey'}
                  className={styles.social}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                  <div className={styles.inner}>
                    <span className={styles.inner__link}>
                      <span className={styles.social__link}>github</span>
                    </span>
                    <span className={styles.inner__link} aria-hidden="true">
                      <span className={styles.social__link}>github</span>
                    </span>
                  </div>
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Contact
