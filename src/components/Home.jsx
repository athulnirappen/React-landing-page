import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
      <Container>
        <Row>
          <Col lg={6} className="pt-5 mt-4">
            <h5 className="text-red" style={{ color: "red" }}>
              BEST DESTINATIONS AROUND THE WORLD
            </h5>
            <h1 className="fw-bold pt-2">
              Travel,enjoy
              <br /> and live a new <br />
              and full life
            </h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <button className="btn btn-warning text-white">
              Find Out More
            </button>
          </Col>
          <Col lg={6}  className="pt-5 mt-4">
            <div>
              <img
                
                src="https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.webp?b=1&s=170667a&w=0&k=20&c=5GzLPeGwuRzNU4mqEMeBZpA4-t-24anqz2cqfqTyND4="
                alt="no-img"
                className='img-fluid rounded'
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Home
