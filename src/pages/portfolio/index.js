import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col,Modal, Button } from "react-bootstrap";
import { dataportfolio } from "../../content_option";


export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [titleMessage, setTitleMessage] = useState("");

  const handleClick = (data) => {
    if (data.link === "#" || !data.link) {
      setModalMessage(`${data.desctiption} - Not Live Right Now`);
      setTitleMessage(`${data.title}`);
      setShowModal(true);
    } else {
      window.open(data.link, "_blank");
    }
  };


  return (
    <HelmetProvider>
      <Container className="portfolio-container">
        <Helmet>  
          <meta charSet="utf-8" />
          <title>Portfolio | My Work</title>
          <meta name="description" content="Showcasing my best projects" />
        </Helmet>

        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-3 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="portfolio-grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <div className="overlay" onClick={() => handleClick(data)} style={{ cursor: "pointer" }}>
              <img src={data.img} alt="" className="portfolio-image" />
                <div className="overlay-content">
                  <p>{data.desctiption}</p>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{titleMessage}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </HelmetProvider>
  );
};
