import React from 'react'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'
import style from '@/app/style/header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <span className={style.logotext}>K<span className={style.logohighlight}>S</span></span>
        </div>
        <nav className={style.nav}>
          <Link href='/' className={style.navlink}>Home</Link>
          <Link href='/about' className={style.navlink}>About</Link>
          <Link href='/skills' className={style.navlink}>Skills</Link>
          <Link href='/portfolio' className={style.navlink}>Portfolio</Link>
          <Link href='/contact' className={style.navlink}>Contact</Link>
        </nav>
        <Link href={'./cv.pdf'} target='_blank'>
          <button className={style.downloadbutton}>
            Download CV
            <FaDownload className={style.downloadicon} />
          </button>
        </Link>
      </div>
    </header>
  )
}

export default Header