"use client";

import React, { useEffect, useRef } from 'react';
import styles from "./Body.module.css";
import { FaHtml5, FaCss3, FaGit, FaGithub, FaJs, FaReact, FaNodeJs, FaMicrochip, FaRaspberryPi } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { SiArduino, SiKicad, SiMongodb } from 'react-icons/si';

const Body = () => {
  const starContainerRef = useRef(null);

  useEffect(() => {
    const container = starContainerRef.current;
    if (!container) return;

    container.innerHTML = '';

    // Create 200 regular stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = styles.star;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--duration', `${Math.random() * 5 + 2}s`);
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    // Create 25 shooting stars
    for (let i = 0; i < 25; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = styles.shootingStar;
      const startEdge = Math.random() > 0.5 ? 'top' : 'left';
      if (startEdge === 'top') {
        shootingStar.style.left = `${Math.random() * 100}vw`;
        shootingStar.style.top = '0';
        shootingStar.style.width = `${Math.random() * 300 + 100}px`;
      } else {
        shootingStar.style.left = '0';
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.width = `${Math.random() * 300 + 100}px`;
        shootingStar.style.transform = 'rotate(90deg)';
      }
      shootingStar.style.setProperty('--duration', `${Math.random() * 5 + 3}s`);
      shootingStar.style.animationDelay = `${Math.random() * 20}s`;
      container.appendChild(shootingStar);
    }
  }, []);

  return (
    <div>
      {/* Star Background */}
      <div ref={starContainerRef} className={styles.starBackground}></div>

      {/* Main Content */}
      <main className={styles.main}>
        {/* About Section */}
        <section id="about" className={styles.section}>
          <h1 className={styles.section__heading}>Hi, I am Dilip</h1>
          <h2 className={styles.section__subheading}>Software Developer</h2>
          <p className={styles.section__paragraph}>
          Passionate developer specializing in web, Android, and hardware development.
          I build beautiful, functional applications.
        </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.section__heading}>Skills</h2>
          <ul className={styles.skills__list}>
            {[
              { icon: <FaHtml5 />, name: "HTML5" },
              { icon: <FaCss3 />, name: "CSS3" },
              { icon: <FaJs />, name: "JavaScript" },
              { icon: <FaReact />, name: "React" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <FaFlutter />, name: "Flutter" },
              { icon: <SiMongodb />, name: "Mongodb" },

              { icon: <FaGit />, name: "Git" },
              { icon: <FaGithub />, name: "GitHub" },
            ].map((skill, index) => (
              <li key={index} className={styles.skills__listItem}>
                <span className={styles.skill__icon}>{skill.icon}</span>
                <span className={styles.skill__name}>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>


        {/* Experience Section */}
<section id="experience" className={styles.section}>
  <h2 className={styles.section__heading}>Experience</h2>

  <div className={styles.projects__grid}>

    {/* Internship */}
    <div className={styles.project__card}>
      <div className={styles.project__header}>
        <h3 className={styles.project__title}>
          Intern – Akrabhi Software Pvt. Ltd.
        </h3>
        <span className={styles.tech__tag}>Jun 2024 – Sep 2024</span>
      </div>


        <ul className={styles.project__description}>
  <li>Developed a full-stack productivity tool for bookmark management</li>
  <li>Designed RESTful APIs and handled backend logic</li>
  <li>Worked with databases for data storage and retrieval</li>
</ul>     


      <div className={styles.project__tech}>
        <span className={styles.tech__tag}>React</span>
        <span className={styles.tech__tag}>Node.js</span>
        <span className={styles.tech__tag}>MongoDB</span>
      </div>
    </div>

    {/* Freelancing */}
<div className={styles.project__card}>
  <div className={styles.project__header}>
    <h3 className={styles.project__title}>
      Freelance Developer
    </h3>
    <span className={styles.tech__tag}>Oct 2025 – Present</span>
  </div>

  <ul className={styles.project__description}>
    <li>Designed IoT controllers using ESP32 with multiple relay outputs</li>
    <li>Built Raspberry Pi HAT PCB for automation systems</li>
    <li>Worked on PCB fabrication and hardware integration</li>
  </ul>

  <div className={styles.project__tech}>
    <span className={styles.tech__tag}>ESP32</span>
    <span className={styles.tech__tag}>Raspberry Pi</span>
    <span className={styles.tech__tag}>KiCad</span>
  </div>
</div>


      <div className={styles.project__tech}>
        <span className={styles.tech__tag}>ESP32</span>
        <span className={styles.tech__tag}>Raspberry Pi</span>
        <span className={styles.tech__tag}>KiCad</span>
      </div>
    </div>

  {/* Open Source */}
<div className={styles.project__card}>
  <div className={styles.project__header}>
    <h3 className={styles.project__title}>
      Open Source Contributor – Chingu
    </h3>
    <span className={styles.tech__tag}>Jan 2024 – Feb 2024</span>
  </div>

  <ul className={styles.project__description}>
    <li>Contributed to a task management application</li>
    <li>Collaborated with global developers using Git</li>
  </ul>

  <div className={styles.project__tech}>
    <span className={styles.tech__tag}>React</span>
    <span className={styles.tech__tag}>Git</span>
  </div>
</div>
 
</section>

        {/* Projects Section */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.section__heading}>My Projects</h2>
          <div className={styles.projects__grid}>
            {[
              {
                title: "Paylert",
                description: "UPI payment announcer app",
                link: "https://vapilidya.vercel.app/paylert",
                tech: ["Flutter", "TTS", "Firebase"],
                screenshot: "/images/paylert-s1.png"
              },
              {
                title: "Hisab",
                description: "Digital khata book for shopkeepers to track transactions and manage product lists",
                link: "https://vapilidya.vercel.app/",
                tech: ["Flutter", "Hive", "PDF"],
                screenshot: "/images/hisab-s1.png"
              },
              {
                title: "Taraju",
                description: "Smart weight scale with Bluetooth and built-in calculator",
                link: "https://vapilidya.vercel.app/",
                tech: ["Flutter", "BLE", "PDF"],
                screenshot: "/images/taraju-s1.png"
              }
            ].map((project, index) => (
              <div key={index} className={styles.project__card}>
                <div className={styles.project__screenshotContainer}>
                  {project.screenshot ? (
                    <img
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      className={styles.project__screenshot}
                    />
                  ) : (
                    <div className={styles.project__placeholder}>No Screenshot</div>
                  )}
                </div>
                <div className={styles.project__header}>
                  <h3 className={styles.project__title}>{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.project__link}
                  >
                    View Project →
                  </a>
                </div>
                <p className={styles.project__description}>{project.description}</p>
                <div className={styles.project__tech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.tech__tag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

<ul className={styles.skills__list}>
  {[
    {
      text: "Analog IC Design Hackathon – Excellent Rating",
      link: "https://github.com/dilipboidya/LNA_IITH_HACKATHON"
    },
    {
      text: "Mixed Signal Design Marathon – Excellent Category",
      link: "https://github.com/dilipboidya/boost-converter"
    },
    {
      text: "Buck Converter Design – Very Good Category",
      link: "https://github.com/dilipboidya/buck-converter"
    }
  ].map((item, index) => (
    
    <li key={index} className={styles.skills__listItem}>
  <span className={styles.skill__name}>{item.text}</span>

  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.project__link}
  >
    View Code →
  </a>
</li>
  ))}
</ul>


        <section id="hardware-skills" className={styles.section}>
          <h2 className={styles.section__heading}>Hardware Skills</h2>
          <ul className={styles.skills__list}>
            {[
              { icon: <FaMicrochip />, name: "ESP32" },
              { icon: <FaMicrochip />, name: "ESP12F" },
              { icon: <SiArduino />, name: "Arduino Uno" },
              { icon: <FaRaspberryPi />, name: "Raspberry Pi" },
             
              { icon: <SiKicad />, name: "KiCad" }
            ].map((skill, index) => (
              <li key={index} className={styles.skills__listItem}>
                <span className={styles.skill__icon}>{skill.icon}</span>
                <span className={styles.skill__name}>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>
        

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
  <h2 className={styles.section__heading}>Contact Me</h2>

  <div className={styles.contact__wrapper}>
    
    {/* Left: Form */}
    <form
      action={process.env.NEXT_PUBLIC_FORMSPREE}
      method="POST"
      className={styles.contact__form}
    >
      <input type="text" name="name" placeholder="Your Name" required className={styles.form__input} />
      <input type="email" name="email" placeholder="Your Email" required className={styles.form__input} />
      <textarea name="message" placeholder="Your Message" required rows={5} className={styles.form__textarea}></textarea>
      <button type="submit" className={styles.form__button}>
        Send Message
      </button>
    </form>

    {/* Right: CV */}
    <div className={styles.cv__section}>
      <h3 className={styles.section__subheading}>My Resume</h3>

      <p className={styles.section__paragraph}>
        Download my resume to know more about my experience, projects, and skills.
      </p>

      <a
        href="/dilip_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.form__button}
      >
        Download CV
      </a>
    </div>

  </div>
</section>
      </main>
    </div>
  );
};

export default Body;