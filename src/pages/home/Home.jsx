// Import React modules
import React from "react";
// Import npm packages

import Container from "react-bootstrap/Container";

import styles from "./Home.module.scss";
import { BsArrowDownShort } from "react-icons/bs";
import { Link } from "react-router-dom";

import About from "../about/About";
import { Services } from "../service/Services";
import { Project } from "../project/Project";
import { Contact } from "../contact/Contact";

const Home = () => {
  return (
    <Container>
      <section className={styles.heroSection}>
        <figure className={styles.imageHero}>
          <img src="/hero.webp" alt="" />
        </figure>
        <div>
          <h1>my name is Zeynab</h1>

          <p>
            i'm front end dveloper , and study it for more detail
            scroll down go to section read about me
          </p>
        </div>
        <span className={styles.arrowDownIcon}>
          <BsArrowDownShort />
        </span>
        <About />
        <Services />
        <Project />
        <Contact />
      </section>
    </Container>
  );
};

export default Home;
