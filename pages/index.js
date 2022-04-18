
import Head from 'next/head'
import styles from '/styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Bishrel's CV</title>
        <link href="styles/Home.module.css" type="text/css" rel="stylesheet"></link>
      </Head>
      <div className={styles.container}>

        <div className={styles.left}>

        <div className={styles.name}>
        <h1>BISHREL ENKHJARGAL</h1>
      </div>
      <div className= {styles.major}>
        Full Stack Developer _____________
      </div>
      <div className={styles.cv}>
        <h1>CV.</h1>
      </div>
      <div className={styles.comment}>
        <p>I aspire to be imaginative and creative at everything I do.</p>
      </div>
      <div className = {styles.photo}>
        <img src = '/bishrel.jpg'/>
      </div>
      <div className={styles.phone}></div>
      <div className={styles.getInTouch}>
          <p>_______GET IN TOUCH</p>
        </div>
        <div className={styles.phone1}>
          <p>+976 89820886</p>
        </div>

        <div className={styles.svg}>
        <svg xmlns="http://www.w3.org/2000/svg " width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
        </div>
        <div className={styles.mail}>
          <p>ebishka08@gmail.com  </p>
        </div>

        <div className={styles.svg2}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
            </svg>
        </div>

      </div>  

      <div className={styles.right}>

        <div className={styles.personalInfo}>
          <p>____________________   Personal Information</p>
        </div>

        <div className={styles.skill}>
          <p> ________ SKILL</p>
        </div>

        <div className={styles.language}>
          <p>LANGUAGE</p>
        </div>

        <div className={styles.skills}>
          <ul>
            <li>Analysis</li>
            <li>Design and Coding</li>
            <li>Contenting Creating</li>
            <li>Managing Editor</li>
            <li>SEO</li>
          </ul>
        </div>
        
        <div className={styles.comment1}>
        </div>

        <div className={styles.comment2}>
        <p><strong>A focused IT graduate with a 2:1 degree, specialising in Web Development.</strong></p>
        </div>

        <div className={styles.comment3}>
        <p>A focused IT graduate with a 2:1 degree, specialising in Web Development. A focused IT graduate with a 2:1 degree, specialising in Web Development graduate with a 2:1 degree, specialising in Web Development.
        </p>
        </div>

        <div className={styles.education}>
          <p>EDUCATION ______________________</p>
        </div>

        <div className={styles.year}>
          <p>2018-2022</p>
        </div>

        <div className={styles.num} >
          <p><strong>National University Of Mongolia </strong>
          Bachelor in Information Technology
          </p>
        </div>

        <div className={styles.num2} >
          <p><strong>Columbia University </strong>
            Masters in Psychology
          </p>
        </div>

        <div className={styles.year2}>
          <p>2023-2025</p>
        </div>

        <div className={styles.languages}>
          <ul>
            <li>English</li>
            <li>Japanese</li>
            <li>Mongolian</li>
          </ul>
        </div>
        

      </div>  

      </div>
    </div>
  )
}
