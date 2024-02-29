import React from 'react'
import './Company.css'
import { Col, Container, Row } from 'react-bootstrap';
function Company({ companydata }) {
    const Data = companydata[0]
    console.log("Data", Data.skills);
    return (
        <div class="companycard">
            <div class="main-content">
                <div class="header">
                    <img style={{ width: 50, height: 50 }} src={Data.img} alt="" />
                    <span style={{ marginLeft: 15, fontFamily: 'monospace' }}>{Data.duration}</span>
                </div>
                <span style={{ fontWeight: 'bold', fontFamily: 'monospace' }}>{Data.name}</span>

                <p class="heading">{Data.role}</p>
                <div class="d-flex justify-content-center">
                    <span className='' style={{ fontWeight: 'bolder',marginBottom:5,fontSize:18,fontFamily: 'monospace' }}>Skills</span>

                </div>
                <Container>
                    <Row xs={3} md={3}>
                        {Data.skills.map((item) => {
                            return (
                                <Col xs={0}>
                                    <div className="categories">
                                        <span style={{ fontWeight: 'bold', fontFamily: 'monospace',padding:5,textAlign:'center',paddingLeft:10,paddingRight:10 }}>{item.sname}</span>
                                    </div>
                                </Col>

                            )
                        })
                        }
                    </Row>
                </Container>

            </div>
            {/* <div class="footer">
  by Harsh Gupta
</div> */}
        </div>
    )
}

export default Company