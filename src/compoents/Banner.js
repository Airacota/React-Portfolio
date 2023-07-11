import { Container, Row, Col } from "react-bootstrap";
import guy from "../assets/img/Random_guy.jpg"


export const Banner = () => {

return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Web Portfolio</span>
            <h1> Judah Miller, A Web devloper in training</h1>
            <p>An aspiring web developer yearning to improve and master anything related web development or coding </p>
          </Col>


          <Col xs={12} md={6} xl={5}>
             <img src={guy} alt="picture of Judah" />
          </Col >
        </Row>
      </Container>
    </section>
  )
}