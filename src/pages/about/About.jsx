import React from "react";
import styles from "./About.module.scss";
import { Title } from "../../components/layout/Title";
const About = () => {
  return (
    <div className={styles.About} id="about">
      <Title title={"About Me"}></Title>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Error veritatis ex in similique cum assumenda minus
        perferendis, aut eius ducimus, impedit voluptatibus ea alias
        esse quibusdam inventore, recusandae fugiat iusto!
      </p>
    </div>
  );
};

export default About;
