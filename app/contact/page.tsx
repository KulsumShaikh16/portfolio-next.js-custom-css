'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import style from '@/app/style/contact.module.css'

export default function Component() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section className={style.contactsection}>
        <div className={style.container}>
          <div className={style.header}>
            <h1>Contact Me</h1>
            <p>Feel Free to Contact</p>
          </div>
          
          <div className={style.formcontainer}>
            <form action="https://formspree.io/f/mrbgbqry" method="POST" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <div className={style.formgroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={style.formgroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={style.formgroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div className={style.formgroup}>
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}