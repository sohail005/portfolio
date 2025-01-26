import './App.css';
import { useEffect } from 'react';
import Animated3dbox from './Components/AnimatedBox/Animated3dbox';
import { Col, Row } from 'react-bootstrap';
import SkillsCompo from './Components/Skills/SkillsCompo';
import Skillitem from './Components/SkillsCard/skillitem';
import Experience from './Components/Experience/Experience';
import Company from './Components/Companies/Company';
import ProjectButton from './Components/ProjectBtttonConatiner/ProjectButton';
import Project from './Components/ProjectBtttonConatiner/Project';

const frontendData = [
  { id: 0, name: 'React', img: require('./Assets/react.png') },
  { id: 1, name: 'CSS', img: require('./Assets/css.png') },
  { id: 2, name: 'HTML', img: require('./Assets/html.png') },
  { id: 3, name: 'Redux', img: require('./Assets/redux.png') },
  { id: 4, name: 'JavaScript', img: require('./Assets/javascript.png') },
  { id: 4, name: 'Bootstrap', img: require('./Assets/bootstrap.png') },

]
const backendData = [
  { id: 0, name: 'Node jS', img: require('./Assets/nodejs.png') },
  { id: 1, name: 'Express Js', img: require('./Assets/express.png') },
  { id: 2, name: 'MongoDB', img: require('./Assets/mongodb.png') },
  { id: 3, name: 'Firebase', img: require('./Assets/firebase.png') },
  { id: 3, name: 'Python', img: require('./Assets/python.png') },
  { id: 3, name: 'Azure', img: require('./Assets/azure.png') },
]
const mobileApp = [
  { id: 0, name: 'Android Studio', img: require('./Assets/Android_Studio.png') },
  { id: 1, name: 'Xcode', img: require('./Assets/xcode.png') },
  { id: 2, name: 'Mit inv', img: require('./Assets/mit.png') },
  { id: 2, name: 'XML', img: require('./Assets/xml.png') },
  { id: 4, name: 'Flutter Flow', img: require('./Assets/flutter.png') },

]
const others = [
  { id: 0, name: 'Git', img: require('./Assets/git.png') },
  { id: 1, name: 'GitHub', img: require('./Assets/github.png') },
  { id: 2, name: 'VS Code', img: require('./Assets/vscode.png') },
  { id: 2, name: 'Postman', img: require('./Assets/postman.png') },
  { id: 2, name: 'Figma', img: require('./Assets/figma.png') },
  { id: 4, name: 'Tailwind', img: require('./Assets/tailwind-css.png') },
]
const mpsdata = [
  {
    id: 1, name: 'Mufeed Products and Services Pvt Ltd.', img: require('./Assets/mps.png'),
    duration: 'Feb 2022 - Nov 2023', role: 'FullStack Developer',
    skills: [{ sname: 'React' }, { sname: 'React Native' }, { sname: 'HTML' }, { sname: 'CSS' }, { sname: 'Javascript' }, { sname: 'Firebase' }, { sname: 'MongoDB' }, { sname: 'Nodejs' }, { sname: 'Express.js' }]
  }
]
const revalsysdata = [
  {
    id: 1, name: 'Revalsys Technologies India Pvt Ltd.', img: require('./Assets/reval.jpg'),
    duration: 'Dec 2021 - Present', role: 'React Native Developer',
    skills: [{ sname: 'React Native' }, { sname: 'HTML' }, { sname: 'CSS' }, { sname: 'Javascript' }, { sname: 'Nodejs' }, { sname: 'Azure' }, { sname: 'Firebase' },]
  }
]

const projectsdata = [
  { id: 5, name: 'Finecart', playstoreurl: "https://play.google.com/store/apps/details?id=com.retail.center.io&pcampaignid=web_share", img: "https://play-lh.googleusercontent.com/dRmXZ9KOrIV3ysgByLlUDf32JTG8-fC5sEr9D7XeXjSLpP1OjYMlsgYekqx0xQzteuY=s96-rw" },
  { id: 0, name: 'Hopp', playstoreurl: "https://play.google.com/store/apps/details?id=com.Revalsys.warantech.HoppCustomer&pcampaignid=web_share", img: "https://play-lh.googleusercontent.com/65rwHxXRvvzoJG6iETMINnUgeQqYq0JUUVUCP8AHMARnUVGYOXVNqSL4FRyWCOUxnDY=w480-h960-rw" },
  {
    id: 1, name: 'Hopp-Partner', playstoreurl: "https://play.google.com/store/apps/details?id=com.Revalsys.warantech.HOPPDriver&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/GOMusFUPLSJCgpplOT8-i2qRqR_EGjNLelEO2MDsnzI6C0Y8gRPy-iqLhImfM0JoEQ=w480-h960-rw"
  },
  {
    id: 2, name: 'Reval Retail', playstoreurl: "https://play.google.com/store/apps/details?id=com.revalretail&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/DE372GJhBmpnz9xdn3wRcdpFqV5z2NzkZQ2Ro6EDPxkbnD-vzC8t9q6ezeqGoAkLUT0=w480-h960-rw"
  },
  {
    id: 3, name: 'RevalOmni Dashboard', playstoreurl: "https://play.google.com/store/apps/details?id=com.masterwsi&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/ACPopRcdWwcEgdhg8yvN1Tp6FF2xfzskkqWP6OmGhgvjWOZOaBCCD7T5t4FnaFdDiYL3=w480-h960-rw"
  },
]

function App() {
  //document.body.style.overflow = 'scroll';///
  useEffect(() => {
    // Prevent text selection globally
    const preventTextSelection = (event) => {
      event.preventDefault();
    };

    // Attach listeners to block selection
    document.addEventListener('selectstart', preventTextSelection);
    document.addEventListener('mousedown', preventTextSelection);
    document.body.addEventListener("pointermove", (e)=>{
      const { currentTarget: el, clientX: x, clientY: y } = e;
      const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
      el.style.setProperty('--posX',  x-l-w/2);
      el.style.setProperty('--posY',  y-t-h/2);
    })
    // Cleanup listeners on component unmount
    return () => {
      document.removeEventListener('selectstart', preventTextSelection);
      document.removeEventListener('mousedown', preventTextSelection);
    };
  }, []);
  return (
    <div className='bgimg'>
      {/* Header with name and linkes*/}
      {/* <Header /> */}
      {/* Header with name and linkes*/}



      <Row style={{ alignItems: 'center', justifyContent: 'center' }}  >
        <Col xs={0}>
          <div className="d-flex justify-content-center"><Animated3dbox /></div>
        </Col>
        <Col xs={0}>
          <div className="introtext text-center ">Hi, I'm</div>
          <div className="introtext text-center ">A FullStack Developer</div>
          <div className="introtext text-center basedin ">Based In India.</div>
        </Col>
      </Row>

      <div className="d-flex justify-content-center" style={{ marginTop: 20, marginBottom: 40 }}>
        <SkillsCompo />
      </div>
      <h5 className="d-flex justify-content-center skillsdecpt">Here are some of my skills on which i have been working on for the past 3 years.</h5>

      <Row style={{ alignItems: 'center', justifyContent: 'center', }}  >
        <Col xs={0}>
          <div className="d-flex justify-content-center">
            <Skillitem title='Frontend' SkillData={frontendData} />
          </div>
        </Col>
        <Col xs={0} style={{}}>
          <div className="d-flex justify-content-center">
            <Skillitem title='Backend' SkillData={backendData} />
          </div>
        </Col>
        <Col xs={0}>
          <div className="d-flex justify-content-center">
            <Skillitem title='Android & Ios' SkillData={mobileApp} />
          </div>
        </Col>
        <Col xs={0}>
          <div className="d-flex justify-content-center">
            <Skillitem title='Others' SkillData={others} />
          </div>
        </Col>


      </Row>

      <div className="d-flex justify-content-center">
        <Experience />
      </div>
      <h5 className="d-flex justify-content-center skillsdecpt">My Work experience as a software engineer and working on different companies and projects.</h5>
      <Row style={{ alignItems: 'center', justifyContent: 'center', }}  >
        <Col xs={0}>
          <div className="d-flex justify-content-center">
            <Company companydata={mpsdata} />
          </div>
        </Col>
        <Col xs={0} style={{}}>
          <div className="d-flex justify-content-center">
            <Company companydata={revalsysdata} />
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <ProjectButton />
      </div>
      <h5 className="d-flex justify-content-center skillsdecpt">I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</h5>
      <Row style={{ alignItems: 'center', justifyContent: 'center', }}  >
        <Col xs={0}>
          <div className="d-flex justify-content-center">
            <Project projectData={projectsdata} />
          </div>
        </Col>
      </Row>


    </div>
  );
}

export default App;
