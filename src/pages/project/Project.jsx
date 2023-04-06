import React from "react";
import styles from "./Project.module.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Title } from "../../components/layout/Title";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

export const Project = () => {
  AOS.init();
  return (
    <div className={styles.Project} id="project">
      <Title title={"Project"}></Title>
      <section
        className="d-flex flex-column justify-content-center flex-md-row flex-md-wrap
      align-items-center"
      >
        {/* box-1 */}
        <Card
          style={{ margin: "15px" }}
          className="col-md-5"
          data-aos="fade-up"
        >
          <Card.Img variant="top" src="/cryptoapp.avif" />
          <Card.Body>
            <Card.Title>cryptocurrency</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">more detail</Button>
          </Card.Body>
        </Card>
        {/* box-2 */}
        <Card
          style={{ margin: "15px" }}
          className="col-md-5"
          data-aos="fade-up"
        >
          <Card.Img variant="top" src="/uberapp.avif" />
          <Card.Body>
            <Card.Title>Uber app</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">more detail</Button>
          </Card.Body>
        </Card>
        {/* box-3 */}
        <Card
          style={{ margin: "15px" }}
          className="col-md-5"
          data-aos="fade-up"
        >
          <Card.Img variant="top" src="/foodapp.avif" />
          <Card.Body>
            <Card.Title>Food App</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">more detail</Button>
          </Card.Body>
        </Card>
        {/* box-4 */}
        <Card
          style={{ margin: "15px" }}
          className="col-md-5"
          data-aos="fade-up"
        >
          <Card.Img variant="top" src="/porfolioapp.jpg" />
          <Card.Body>
            <Card.Title>Portfolio App</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">more detail</Button>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};
