import React from 'react'
import styles from './Works.module.scss'
import {
  Image_Work_01,
  Image_Work_02,
  Image_Work_03,
  Image_Work_04,
  Image_Work_05,
  Image_Work_06,
  Image_Work_07,
  Image_Work_08,
  Image_Work_09,
  Image_Work_10,
  Image_Work_11,
  Image_Work_12,
  Image_Work_13,
  Image_Work_14,
  Image_Work_15,
  Image_Work_16,
  Image_Work_17,
  Image_Work_18,
  Image_Work_19,
  Image_Work_20,
} from '@utils/images'

const works = [
  {
    name: '01',
    src: Image_Work_01,
    date: '2022',
  },
  {
    name: '02',
    src: Image_Work_02,
    date: '2022',
  },
  {
    name: '03',
    src: Image_Work_03,
    date: '2022',
  },
  {
    name: '04',
    src: Image_Work_04,
    date: '2022',
  },
  {
    name: '05',
    src: Image_Work_05,
    date: '2022',
  },
  {
    name: '06',
    src: Image_Work_06,
    date: '2022',
  },
  {
    name: '07',
    src: Image_Work_07,
    date: '2022',
  },
  {
    name: '08',
    src: Image_Work_08,
    date: '2022',
  },
  {
    name: '09',
    src: Image_Work_09,
    date: '2021',
  },
  {
    name: '10',
    src: Image_Work_10,
    date: '2021',
  },
  {
    name: '11',
    src: Image_Work_11,
    date: '2021',
  },
  {
    name: '12',
    src: Image_Work_12,
    date: '2021',
  },
  {
    name: '13',
    src: Image_Work_13,
    date: '2021',
  },
  {
    name: '14',
    src: Image_Work_14,
    date: '2021',
  },
  {
    name: '15',
    src: Image_Work_15,
    date: '2021',
  },
  {
    name: '16',
    src: Image_Work_16,
    date: '2021',
  },
  {
    name: '17',
    src: Image_Work_17,
    date: '2021',
  },
  {
    name: '18',
    src: Image_Work_18,
    date: '2021',
  },
  {
    name: '19',
    src: Image_Work_19,
    date: '2021',
  },
  {
    name: '20',
    src: Image_Work_20,
    date: '2021',
  },
]

const Works = () => {
  const worksList = works.map((work) => (
    <React.Fragment key={work.name}>
      <div className={styles.card__work}>
        <img
          className={styles.card__work_image}
          src={work.src}
          alt={work.name}
        />
        <div className={styles.card__work_content}>
          <span className={styles.card__work_header}>{work.name}</span>
          <span className={styles.card__work_date}>{work.date}</span>
        </div>
      </div>
    </React.Fragment>
  ))

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.wrapper__header}>realizacje</h1>
      <div className={styles.wrapper__line} />
      <div className={styles.wrapper__content}>{worksList}</div>
    </header>
  )
}

export default Works
