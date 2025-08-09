import './Company.css'
import { Col, Container, Row } from 'react-bootstrap';

function Company({ companydata }) {
    const Data = companydata[0];

    return (
        <div className="companycard">
            <div className="main-content">
                <Row className="align-items-center">
                    {/* Left Column: Logo, Duration, Company Name, Role */}
                    <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
                        <div className="header d-flex justify-content-center align-items-center mb-2">
                            <img style={{ width: 50, height: 50 }} src={Data.img} alt="" />
                            <span style={{ marginLeft: 15, fontFamily: 'Audiowide' }}>{Data.duration}</span>
                        </div>
                        <span style={{ fontWeight: 'bold', fontFamily: 'Audiowide', display: 'block' }}>{Data.name}</span>
                        <p className="heading" style={{ marginTop: 5 }}>{Data.role}</p>
                    </Col>

                    {/* Right Column: Skills */}
                    <Col xs={12} md={6}>
                        <div className="d-flex justify-content-center mb-2">
                            <span className="" style={{ fontWeight: 'bolder', fontSize: 18, fontFamily: 'Audiowide' }}>
                                Skills
                            </span>
                        </div>
                        <Container>
                            <Row xs={3} md={3} className="justify-content-center gx-2 gy-2">
                                {Data.skills.map((item, idx) => (
                                    <Col key={idx} className="d-flex justify-content-center">
                                        <div className="categories">
                                            <span style={{ fontWeight: 'bold', padding: 5, textAlign: 'center', paddingLeft: 10, paddingRight: 10 }}>
                                                {item.sname}
                                            </span>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Company;
