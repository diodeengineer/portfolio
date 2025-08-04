
// Body.js
import React from 'react';
import styles from "./Body.module.css";
import { FaHtml5,  FaCss3, FaGit, FaGithub, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { configDotenv } from 'dotenv';

configDotenv()

const formspree = process.env.NEXT_PUBLIC_FORMSPREE;


const Body = () => {
  return (
    <div>
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h1 className={styles.section__heading}>Hi, I am Dilip</h1>
          <h2 className={styles.section__subheading}>Software Developer</h2>
          <p className={styles.section__paragraph}>I am a passionate developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.</p>
        </section>

        <section id="skills" className={styles.section}>
          <h2 className={styles.section__heading}>Skills</h2>
          <ul className={styles.skills__list}>
            <li className={styles.skills__listItem}>
              <FaHtml5 className={styles.skill__icon} />
              <span className={styles.skill__name}>HTML5</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaCss3 className={styles.skill__icon} />
              <span className={styles.skill__name}>CSS3</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaJs className={styles.skill__icon} />
              <span className={styles.skill__name}>JavaScript</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaReact className={styles.skill__icon} />
              <span className={styles.skill__name}>React</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaNodeJs className={styles.skill__icon} />
              <span className={styles.skill__name}>Node.js</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaGit className={styles.skill__icon} />
              <span className={styles.skill__name}>Git</span>
            </li>
            <li className={styles.skills__listItem}>
              <FaGithub className={styles.skill__icon} />
              <span className={styles.skill__name}>GitHub</span>
            </li>
          </ul>
        </section>


         <section id="skills" className={styles.section}>
          <h2 className={styles.section__heading}>Hardware Skills</h2>
          <ul className={styles.skills__list}>
            <li className={styles.skills__listItem}>
             
              <span className={styles.skill__name}>KiCad</span>
            </li>

              <li className={styles.skills__listItem}>
             
              <span className={styles.skill__name}>Soldering</span>
            </li>
         </ul>
         </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.section__heading}>Experience</h2>
          <div className={styles.experience__job}>
            <h3 className={styles.experience__jobTitle}>Software Developer Intern <span className={styles.experience__date}>[January 2025 - July 2025]</span></h3>
            <p className={styles.experience__company}>Company Name</p>
            <ul className={styles.experience__list}>
              <li className={styles.experience__listItem}>Describe your first major responsibility or achievement here.</li>
              <li className={styles.experience__listItem}>Describe a second key achievement, e.g., Collaborated with a team of 5 developers...</li>
              <li className={styles.experience__listItem}>Describe a third contribution, e.g., Gained hands-on experience with...</li>
            </ul>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.section__heading}>Projects</h2>
          <p className={styles.section__paragraph}>I have worked on various projects that showcase my skills and creativity. Here are a few highlights:</p>
          <ul className={styles.section__list}>
            <li className={styles.section__listItem}>Project A - A web application that...</li>
            <li className={styles.section__listItem}>Project B - A mobile app that...</li>
            <li className={styles.section__listItem}>Project C - A tool for...</li>
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h2 className={styles.section__heading}>Contact Me</h2>
          <p className={styles.section__paragraph}>
            Feel free to reach out directly using the form below. I will get back to you as soon as possible.
          </p>

          <form action={formspree} method="POST" className={styles.contact__form}>
            <div className={styles.form__group}>
              <label htmlFor="name" className={styles.form__label}>Name</label>
              <input type="text" id="name" name="name" required className={styles.form__input} />
            </div>
            
            <div className={styles.form__group}>
              <label htmlFor="email" className={styles.form__label}>Email</label>
              <input type="email" id="email" name="email" required className={styles.form__input} />
            </div>

            <div className={styles.form__group}>
              <label htmlFor="message" className={styles.form__label}>Message</label>
              <textarea id="message" name="message" rows="5" required className={styles.form__textarea}></textarea>
            </div>

            <button type="submit" className={styles.form__button}>Send Message</button>
          </form>
        </section>

      </main>
      <div className={styles.cvContainer}>
        <a href="/cv.pdf" className={styles.cvLink} target="_blank" download>
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default Body;