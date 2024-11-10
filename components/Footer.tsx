import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import style from '@/app/style/footer.module.css'

const Footer = () => {
  return (
    <div className={style.footerwrapper}>
      <footer className={style.footer}>
        <div className={style.container}>
          <a className={style.logo}>
            <span className={style.logotext}>KS</span>
          </a>
          <p className={style.copyright}>
            © 2024 KULSUM SHAIKH —
          </p>
          <span className={style.sociallinks}>
            <Link href={'https://www.linkedin.com/in/kulsum-shaikh-725ab22a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='_blank'>
              <FaLinkedin className={style.socialiconlinkedin} />
            </Link>
            <Link href={'https://github.com/KulsumShaikh16'} target='_blank'>
              <FaGithub className={style.socialicongithub}/>
            </Link>
            <Link href={'mailto:kulsumshaikh1605@gmail.com'} target='_blank'>
              <MdEmail className={style.socialiconemail} />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer