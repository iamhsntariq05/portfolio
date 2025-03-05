import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio } from "../../content_option";

export const Portfolio = () => {
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
              <div className="overlay">
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
    </HelmetProvider>
  );
};
