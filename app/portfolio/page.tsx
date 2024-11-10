import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/style/portfolio.module.css';

const Portfolio = () => {
  return (
    <div className={styles.portfolioSection}>
      <section>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>MY PROJECTS</h1>
            <p className={styles.description}>
              This section showcases a selection of my recent projects, demonstrating my skills in Front-End Development. Each project reflects my commitment to delivering high-quality solutions and creative problem-solving. From building dynamic web applications to solving real-world problems through innovative design and development, these projects represent my ability to turn ideas into functional, user-centered products. Feel free to explore the details of each project, including the technologies used, challenges faced, and the impact of the final product. These projects exhibit my adaptability and passion for building engaging digital experiences.
            </p>
          </div>
          <div className={styles.projectGrid}>
            
            {/* Project 1 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer} data-aos="flip-right">
                <Image
                  alt="Password Generator"
                  className={styles.projectImage}
                  src="/pass-gen.png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Random Password Generator Project</h2>
                  <h1 className={styles.projectTitle}>Password Generator</h1>
                  <p className={styles.projectDescription}>
                    A tool built with HTML, CSS, and JavaScript that allows users to create secure, randomized passwords.
                  </p>
                  <Link href="https://random-password-generate-sepia.vercel.app" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Resume Builder"
                  className={styles.projectImage}
                  src="/dynamic-resume.png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Dynamic Resume Builder</h2>
                  <h1 className={styles.projectTitle}>Resume Builder</h1>
                  <p className={styles.projectDescription}>
                    A web application to create professional, personalized resumes using HTML, CSS, JavaScript, and TypeScript.
                  </p>
                  <Link href="https://dynamic-resume-16.vercel.app" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Portfolio Website"
                  className={styles.projectImage}
                  src="/portfolio-website .png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Portfolio Website</h2>
                  <h1 className={styles.projectTitle}>Responsive Portfolio</h1>
                  <p className={styles.projectDescription}>
                    The website serves as a digital portfolio.
                  </p>
                  <Link href="https://portfolio-website-kulsumshaikh.vercel.app" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Calculator"
                  className={styles.projectImage}
                  src="/calculator.png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Digital Calculator Project</h2>
                  <h1 className={styles.projectTitle}>Digital Calculator</h1>
                  <p className={styles.projectDescription}>
                    The Digital Calculator App is a simple, yet fully functional calculator built using HTML, CSS, and JavaScript.
                  </p>
                  <Link href="https://digital-calculator-aad2.vercel.app" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Tech Force"
                  className={styles.projectImage}
                  src="/tech-force.png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Educational Website</h2>
                  <h1 className={styles.projectTitle}>Tech Force Pakistan</h1>
                  <p className={styles.projectDescription}>
                    This project demonstrates my ability to build an educational platform that combines a clean design with interactive elements.
                  </p>
                  <Link href="https://github.com/KulsumShaikh16/tech-force-website.git" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  alt="Legal Advisory"
                  className={styles.projectImage}
                  src="/legal.png"
                  width={600}
                  height={300}
                />
                <div className={styles.projectOverlay}>
                  <h2 className={styles.projectSubtitle}>Legal Advisory Website</h2>
                  <h1 className={styles.projectTitle}>Legal Aid Agency</h1>
                  <p className={styles.projectDescription}>
                    The Legal Advisory Website is a professional platform developed using HTML and CSS, aimed at providing legal information.
                  </p>
                  <Link href="https://github.com/KulsumShaikh16/legal-Advisory-main.git" target='_blank'>
                    <p className={styles.projectLink}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
