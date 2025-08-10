import './App.css';
import { useRef } from 'react';
import Animated3dbox from './Components/AnimatedBox/Animated3dbox';
import { Col, Row } from 'react-bootstrap';
import Skillitem from './Components/SkillsCard/skillitem';
import Experience from './Components/Experience/Experience';
import Company from './Components/Companies/Company';
import ProjectButton from './Components/ProjectBtttonConatiner/ProjectButton';
import Project from './Components/ProjectBtttonConatiner/Project';
import { motion } from 'framer-motion';
import { backendData, espiritsdata, frontendData, mobileApp, mpsdata, others, projectsdata, revalsysdata, tabs } from './Data';

function App() {
  const windowWidth = useRef(window.innerWidth);

  return (
    <div className='bgimg' style={{ width: windowWidth.current, flex: 1, overflow: 'hidden' }}>

      {/* Animated Tabs UI */}
      {/* <div className="tab-container d-flex justify-content-center mt-3">
        <motion.div className="d-flex gap-3">
          {tabs.map(tab => (
            <motion.div
              key={tab}
              className="tab-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                borderBottom: '3px solid transparent',
                color: '#333',
                fontWeight: 'normal',
              }}
            >
              {tab}
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      {/* Home Section */}
      <Row className="align-items-center justify-content-center mt-5">
        {/* <Col xs={12} md={6}> */}
        <Animated3dbox />
        {/* </Col> */}

        <Col xs={12} md={6} className="text-center">
          <motion.div className="introtext" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Hi, I'm
          </motion.div>
          <motion.div className="introtext" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            A FullStack Developer
          </motion.div>
          <motion.div className="introtext basedin" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            Based In India.
          </motion.div>
        </Col>
      </Row>

      {/* Skills Section */}
      <motion.h5
        className="d-flex justify-content-center skillsdecpt"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: 'easeOut' }}
      >
        Here are some of my skills on which I have been working on for the past 4 years.
      </motion.h5>


      <Row className="skillscontainer text-center g-4">
        {[
          { title: "Frontend", data: frontendData },
          { title: "Backend", data: backendData },
          { title: "Android & iOS", data: mobileApp },
          { title: "Others", data: others },
        ].map((item, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            lg={6}
            className="d-flex justify-content-center"
          >
            <Skillitem title={item.title} SkillData={item.data} />
          </Col>
        ))}
      </Row>






      {/* Experience Section */}
      <div className="d-flex justify-content-center my-4">
        <Experience />
      </div>
      <h5 className="d-flex justify-content-center skillsdecpt">
        My work experience as a software engineer across different companies and projects.
      </h5>
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
          <Company companydata={mpsdata} />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
          <Company companydata={revalsysdata} />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center mb-4">
          <Company companydata={espiritsdata} />
        </Col>
      </Row>


      {/* Projects Section */}
      <div className="d-flex justify-content-center my-4">
        <ProjectButton />
      </div>
      <h5 className="d-flex justify-content-center skillsdecpt">
        I have worked on a wide range of projects — from web apps to Android and iOS apps.
      </h5>
      <div className="d-flex justify-content-center">
        <Project projectData={projectsdata} />
      </div>
    </div>
  );
}

export default App;
