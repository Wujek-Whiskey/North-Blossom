import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Brand } from '@utils/images/'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const navigate = useNavigate()
  const [menuVisibility, setMenuVisibility] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize())

    return () => {
      window.removeEventListener('resize', handleResize())
    }
  }, [])

  const style = {
    transform: 'rotate(180deg)',
    transition: 'transform 0.8s',
    color: '#EEF0F2',
  }

  const styleColor = { color: '#EEF0F2' }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <span onClick={() => navigate('/')} className={styles.nav__brand}>
          <img src={Brand} alt={''} />
        </span>
        <div
          className={styles.nav__inner}
          onClick={() =>
            windowWidth < 900 ? setMenuVisibility(!menuVisibility) : null
          }
          onMouseEnter={() => setMenuVisibility(true)}
          onMouseLeave={() => setMenuVisibility(false)}
        >
          <svg
            style={menuVisibility ? style : null}
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
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className={styles.inner}>
            <span className={styles.inner__link}>
              <span
                style={menuVisibility ? styleColor : null}
                className={styles.nav__link}
              >
                menu
              </span>
            </span>
            <span className={styles.inner__link} aria-hidden="true">
              <span
                style={menuVisibility ? styleColor : null}
                className={styles.nav__link}
              >
                menu
              </span>
            </span>
          </div>
          <div
            className={styles.nav__dropdown}
            style={
              menuVisibility
                ? { display: 'flex', transform: 'translateY(0)' }
                : null
            }
          >
            <span className={styles.nav__header}>North Blossom</span>
            <ul className={styles.nav__list}>
              <li className={styles.list__item}>
                <Link to={'/'} className={styles.list__link}>
                  <svg
                    style={menuVisibility ? style : null}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                  start
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/realizacje'} className={styles.list__link}>
                  <svg
                    style={menuVisibility ? style : null}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                  realizacje
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/biografia'} className={styles.list__link}>
                  <svg
                    style={menuVisibility ? style : null}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                  biografia
                </Link>
              </li>
              <li className={styles.list__item}>
                <Link to={'/kontakt'} className={styles.list__link}>
                  <svg
                    style={menuVisibility ? style : null}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="0.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25"
                    />
                  </svg>
                  kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
