

// Footer.js
import styles from './Footer.module.css';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; 
import { configDotenv } from 'dotenv';

configDotenv();
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN;
const github = process.env.NEXT_PUBLIC_GITHUB;
const mailto = process.env.NEXT_PUBLIC_MAILTO;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copyright}>
        © {new Date().getFullYear()} Dilip. All rights reserved.
      </p>
      <div className={styles.footer__links}>
        <a 
          href={github}
          target="_blank" 
          rel="noopener noreferrer" 
       
          className={styles.footer__iconLink}
        >
          <FaGithub className={styles.footer__icon} />
          
        </a>
        <a 
          href={linkedin}
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.footer__iconLink}

        >
          <FaLinkedinIn className={styles.footer__iconLink} />
          
        </a>
 
        <a 
          href={mailto}
          className={styles.footer__iconLink}
        
        >
          <FaEnvelope className={styles.footer__icon} />
        </a>
        
      </div>
    </footer>
  );
}