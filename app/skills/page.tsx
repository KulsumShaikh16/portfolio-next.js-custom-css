// app/components/Skills.js
'use client';

import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/app/style/skills.module.css';

const Skills = () => (
  <div>
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>MY SKILLS</h1>
        </div>

        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>HTML</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '100%' }}></div>
              </div>
              <p className={styles.percentage}>100%</p>
            </div>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>CSS</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '85%' }}></div>
              </div>
              <p className={styles.percentage}>85%</p>
            </div>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>TypeScript/JavaScript</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '60%' }}></div>
              </div>
              <p className={styles.percentage}>60%</p>
            </div>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>WordPress</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '85%' }}></div>
              </div>
              <p className={styles.percentage}>85%</p>
            </div>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>Node.js</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '40%' }}></div>
              </div>
              <p className={styles.percentage}>40%</p>
            </div>
          </div>

          <div className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <div className={styles.iconContainer}>
                <FaCheckCircle className={styles.icon} />
              </div>
              <h2 className={styles.skillName}>Tailwind CSS</h2>
            </div>
            <div className={styles.progressContainer}>
              <div className={styles.progressWrapper}>
                <div className={styles.progressBar} style={{ width: '50%' }}></div>
              </div>
              <p className={styles.percentage}>50%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
