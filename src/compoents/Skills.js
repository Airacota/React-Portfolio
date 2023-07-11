import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import css from "../assets/img/css.png"
import java from "../assets/img/javascript.png"
import Python from "../assets/img/python.png"
import html from "../assets/img/html.png"
import Csharp from "../assets/img/c#.png"
import sql from "../assets/img/sql.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Below are a bunch of skills I have a solid grasp on during my time at WakeTech</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                
                                <div className="item">
                                    <img src={css} alt="image of skill" />
                                    <h4>Css</h4>
                                 </div>

                                 <div className="item">
                                    <img src={java} alt="image of skill" />
                                    <h4>Javascript</h4>
                                 </div>

                                 <div className="item">
                                    <img src={Python} alt="image of skill" />
                                    <h4>Python</h4>
                                 </div>

                                 <div className="item">
                                    <img src={html} alt="image of skill" />
                                    <h4>Html</h4>
                                 </div>

                                 <div className="item">
                                    <img src={sql} alt="image of skill" />
                                    <h4>Sql</h4>
                                 </div>

                                 <div className="item">
                                    <img src={Csharp} alt="image of skill" />
                                    <h4>C#</h4>
                                 </div>

                               
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}