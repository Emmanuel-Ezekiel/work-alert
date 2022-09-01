import React from 'react';
import styles from "./style.module.css";
import NavBar from "../../components/Navbar/index";
import Image from "../../assets/HeroGraphics (1).svg";
import { Data } from "./Data";


const Hero  = () => {

  console.log("here", Data)
  return (
    <>
      <section className={styles.section}>
        <div className={styles.divider}>
          <div className={styles.circle}></div>
        </div>

        <NavBar />

        <div className={styles.heroContainer}>
          <div className={styles.heroTextConatiner}>
            <span>Save time by building fast with Boldo Template</span>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First <br /> mover advantage innovator success
              deployment non-disclosure.
            </p>
            <div className={styles.heroButtonContainer}>
              <button className={styles.heroBtn}>Buy template</button>
              <button className={styles.heroBtn2}>Explore</button>
            </div>
          </div>
          <div className={styles.heroChartConatiner}>
            <img src={Image} alt="" />
          </div>
        </div>

        <div className={styles.sponsLogo}>
          {Data.map((item) => (
            <div key={item.id} className={styles.Logo}>
              <img src={item.image} alt="" />
              <img src={item.image2} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;