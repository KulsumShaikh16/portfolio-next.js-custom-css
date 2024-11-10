'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import AOS from 'aos'
import 'aos/dist/aos.css'
import style  from'@/app/style/hero.module.css'
import About from './about/page'
import Portfolio from './portfolio/page'
import Contact from './contact/page'
import Skills from './skills/page'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <section className={style.herosection}>
        <div className={style.container}>
          <div className={style.content}>
            <h1 className={style.title}>
              I am
              <br className={style.titlebreak} />
              <span className={style.highlight}>
                <Typewriter
                  options={{
                    strings: ['Front-End Developer', 'WordPress Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className={style.description}>
              Highly motivated and enthusiastic front-end developer with a strong desire to learn and grow in the field. Proficient in HTML, CSS, and JavaScript, with a solid understanding of front-end development principles and best practices. Looking for an opportunity to apply my skills and knowledge in a real-world setting and continue developing my skills as a front-end developer
            </p>
            <div className={style.buttongroup}>
              <Link href={"https://wa.me/03353200000"} target='_blank'>
                <button className={style.buttonprimary}>
                  Contact
                </button>
              </Link>
              <Link href={'mailto:kulsumshaikh1605@gmail.com'} target='_blank'>
                <button className={style.buttonsecondary}>
                  Email
                </button>
              </Link>
            </div>
          </div>
          <div className={style.imagecontainer}>
            <Image 
              className={style.heroimage} 
              data-aos="fade-up-left"
              alt="hero"
              width={500}
              height={500}
              src="/background.jpg"
            />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Hero