
import { ProjectCard } from "./ProjectCard"
import { Col, Nav, Tab, Row, Container } from "react-bootstrap";

import projectimg1 from "../assets/img/JavaPic.png"
import projectimg2 from "../assets/img/cPic.jpg"
import projectimg3 from "../assets/img/Firstweb.jpg"


export const Projects = () => {

    const projects =[
        {
            title: "Javascript Project",
            description: "",
            imgUrl: projectimg1,
        }
       
    ]

    const projects2 =[
      
        {
            title: "C# project",
            description: "",
            imgUrl: projectimg2,
        }
      
       
    ]

    const projects3 =[
       
        {
            title: "Website",
            description: "",
            imgUrl: projectimg3,
        },
       
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects</h2>
                        <p>All Projects below are from the first year of a web development program at WakeTech</p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Project 2</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Project 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row> Above a snipit of Javascript code for a Resume Builder</Tab.Pane>
                                
                                <Tab.Pane eventKey='second'>
                                <Row>
                                        {
                                            projects2.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>above is some c# code for a school Project </Tab.Pane>
                                
                                <Tab.Pane eventKey='third'>
                                <Row>
                                        {
                                            projects3.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                    key={index}
                                                    {...projects}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>Above is one of the first-ever Websites I built for a school project</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
        
    )
}