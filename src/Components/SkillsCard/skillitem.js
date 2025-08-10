import './skillitem.css';
import { Col, Container, Row } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Skillitem({ title, SkillData }) {
    return (
        <div className="skillitemcard">
            <div className="img-container">
                <div className="description">
                    {/* Animated Title */}
                    <motion.span
                        className="skillitemcardtitle"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                        {title}
                    </motion.span>

                    {/* Animated Divider */}
                    <motion.div
                        className="divider"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                        style={{ originX: 0 }}
                    ></motion.div>

                    <Container>
                        <Row className="gx-8 gy-4 justify-content-center">
                            {SkillData.map((item, idx) => (
                                <Col
                                    key={idx}
                                    xs={6}
                                    sm={4}
                                    md={3}
                                    lg={3}
                                    className="d-flex justify-content-center"
                                >
                                    <motion.div
                                        className="skillitemcardcontainercard"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.4, duration: 0.4 }}
                                    >
                                        <img src={item.img} className="skill-icon" alt={item.name} />
                                        <p className="skillname">{item.name}</p>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>

                    </Container>

                </div>
            </div>
        </div>
    );
}

export default Skillitem;
