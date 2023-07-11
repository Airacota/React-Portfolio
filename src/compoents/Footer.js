import { Row, Container, Col } from "react-bootstrap";
import logo from '../assets/img/logo.png'
import linkdin from '../assets/img/linkdin.png'
import facebook from '../assets/img/facebook.png'
import github from '../assets/img/github.png'


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                    <a href="https://www.linkedin.com/"><img src={linkdin} alt="" /></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                    <a href="https://github.com/"><img src={github} alt="" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}