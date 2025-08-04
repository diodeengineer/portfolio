
// Header.js
import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.header__title}>Dilip Boidya</h1>
        <nav className={styles.header__nav}>
          <ul className={styles.header__navList}>
            <li className={styles.header__navItem}>
              <a href="#about" className={styles.header__navLink}>About</a>
            </li>
            <li className={styles.header__navItem}>
              <a href="#skills" className={styles.header__navLink}>Skills</a>
            </li>
            <li className={styles.header__navItem}>
              <a href="#projects" className={styles.header__navLink}>Projects</a>
            </li>
            <li className={styles.header__navItem}>
              <a href="#contact" className={styles.header__navLink}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header