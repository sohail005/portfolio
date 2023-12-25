import React from 'react'
import './skillitem.css'
import { Col, Container, Row } from 'react-bootstrap'
function Skillitem({ title, SkillData }) {
    console.log(SkillData);
    return (
        <div className="skillitemcard">
            <div className="img-container">
                <div className="img"></div>

                <div className="description">
                    <span className="skillitemcardtitle">
                        {title}
                    </span>
                    <Container>
                        <Row xs={3} md={2}>
                            {SkillData.map((item) => {
                                return (
                                    <Col>
                                        <div style={{}} className="skillitemcardcontainer">
                                            <div className="skillitemcardcontainercard">
                                                <div style={{ flexDirection: 'column', textAlign: 'center' }} className="">
                                                    <img src={item.img} style={{ width: 35, height: 35, marginTop: 18 }} alt="" />
                                                    <p className='skillname'>{item.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}


                        </Row>
                    </Container>
                    {/*  */}

                </div>





            </div>

        </div>
    )
}

export default Skillitem