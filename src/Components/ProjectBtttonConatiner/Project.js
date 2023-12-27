import React from 'react'
import './Project.css'
import { Container, Row } from 'react-bootstrap'
function Project({ projectData }) {

    return (
        <div class="projectCard">
            <div class="projectCard2">
                <Container>
                    <Row xs={2} md={2}>
                        {projectData.map((item, index) => {
                            return (
                                <a key={index} href={item.playstoreurl} class="d-flex justify-content align-items-center text-decoration-none">
                                    <img style={{ width: 45, height: 45, margin: 10, borderRadius: 10 }}
                                        src={item.img} alt="" />
                                    <h6>{item.name}</h6>
                                </a>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Project