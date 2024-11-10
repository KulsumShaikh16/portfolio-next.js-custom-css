'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import style from '@/app/style/about.module.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <section className={style.aboutsection}>
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.title}>
              ABOUT ME
            </h1>
            <p className={style.description} data-aos="fade-up">
              Hi, I am <b>Kulsum Shaikh</b>, a dedicated front-end developer with a passion for creating visually stunning and highly functional websites. While I am just starting my professional journey, my enthusiasm for web development drives me to continuously learn and improve my skills every day.
            </p>
            <p className={style.description} data-aos="fade-up">
              I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly exploring new technologies and frameworks to stay up-to-date with the latest trends in web development. My goal is to build responsive, user-friendly websites that offer a seamless experience across all devices.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About