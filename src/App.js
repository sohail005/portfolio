import './App.css';
import { useRef } from 'react';
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
]
const mobileApp = [
  { id: 0, name: 'Android', img: require('./Assets/Android_Studio.png') },
  { id: 1, name: 'Xcode', img: require('./Assets/xcode.png') },
  { id: 2, name: 'Mit', img: require('./Assets/mit.png') },
  { id: 2, name: 'XML', img: require('./Assets/xml.png') },
  { id: 4, name: 'Flutter', img: require('./Assets/flutter.png') },

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
  { id: 0, name: 'Finecart', playstoreurl: "https://play.google.com/store/apps/details?id=com.retail.center.io&pcampaignid=web_share", img: "https://play-lh.googleusercontent.com/dRmXZ9KOrIV3ysgByLlUDf32JTG8-fC5sEr9D7XeXjSLpP1OjYMlsgYekqx0xQzteuY=s96-rw" },
  { id: 1, name: 'Hopp', playstoreurl: "https://play.google.com/store/apps/details?id=com.Revalsys.warantech.HoppCustomer&pcampaignid=web_share", img: "https://play-lh.googleusercontent.com/65rwHxXRvvzoJG6iETMINnUgeQqYq0JUUVUCP8AHMARnUVGYOXVNqSL4FRyWCOUxnDY=w480-h960-rw" },
  {
    id: 2, name: 'Hopp-Partner', playstoreurl: "https://play.google.com/store/apps/details?id=com.Revalsys.warantech.HOPPDriver&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/GOMusFUPLSJCgpplOT8-i2qRqR_EGjNLelEO2MDsnzI6C0Y8gRPy-iqLhImfM0JoEQ=w480-h960-rw"
  },
  {
    id: 3, name: 'Reval Retail', playstoreurl: "https://play.google.com/store/apps/details?id=com.revalretail&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/DE372GJhBmpnz9xdn3wRcdpFqV5z2NzkZQ2Ro6EDPxkbnD-vzC8t9q6ezeqGoAkLUT0=w480-h960-rw"
  },
  {
    id: 4, name: 'RevalOmni Dashboard', playstoreurl: "https://play.google.com/store/apps/details?id=com.masterwsi&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/ACPopRcdWwcEgdhg8yvN1Tp6FF2xfzskkqWP6OmGhgvjWOZOaBCCD7T5t4FnaFdDiYL3=w480-h960-rw"
  },
  {
    id: 5, name: 'Reval ESS', playstoreurl: "https://play.google.com/store/apps/details?id=com.revaless&hl=en",
    img: "https://play-lh.googleusercontent.com/PZsZzBt_BforgPaps1wry9HbuIwThsfNghCCMvLOVG1iA8qV-5Gh0pnUGzRSt5QbVOo5=w480-h960-rw"
  },
  {
    id: 6, name: 'Hopp(ios)', playstoreurl: "https://apps.apple.com/in/app/hopp-company/id1527763771",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/3f/b4/d6/3fb4d6f4-7130-0849-b8e9-9e84838de4a2/AppIcon-0-0-1x_U007epad-0-10-0-85-220.png/460x0w.webp"
  },
  {
    id: 7, name: 'Hopp Partner (ios)', playstoreurl: "https://apps.apple.com/in/app/hopp-partner/id1527779025",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f4/dc/f8/f4dcf8d4-2b24-3aa1-1ae3-611a7365700a/AppIcon-0-0-1x_U007epad-0-9-0-85-220.png/460x0w.webp"
  },
  {
    id: 7, name: 'Revalsys Authenticator', playstoreurl: "https://play.google.com/store/apps/details?id=com.revalnotification&pcampaignid=web_share",
    img: "https://play-lh.googleusercontent.com/KEQmiTIYsjlwCK0IU0jPqqQMqc90LGQHAPlA1Cir6u8F2jgZS3GbQ0DAY8W1vbhBcZY=w480-h960-rw"
  },
]

function App() {
  //document.body.style.overflow = 'scroll';
  const windowWidth = useRef(window.innerWidth);
  return (
    <div className='bgimg' style={{ width: windowWidth, flex: 1, overflow: 'hidden' }}>
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
      <div className="d-flex justify-content-center">
        <Project projectData={projectsdata} />
      </div>

    </div>
  );
}

export default App;
