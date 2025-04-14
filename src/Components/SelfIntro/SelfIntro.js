import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid"  id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
              I am a dedicated <span style={{color: "#0A81AB" , fontStyle:"italic"}}>MERN</span> (MongoDB, Express.js, React.js, Node.js) Full Stack Developer with over 3+ years of experience in building responsive and scalable web applications. I specialize in front-end development using React.js, creating dynamic and reusable components with state management through Redux and Context API.
              <br/>
              <br/>
              On the back end, I develop secure and efficient  <span style={{color: "#0A81AB" , fontStyle:"italic"}}>RESTful APIs</span> with Node.js and Express.js, handling authentication, authorization, and real-time communication using WebSockets. My expertise in MongoDB includes designing complex data structures and optimizing performance with Mongoose. 
              <br/>
              <br/>
              I am experienced in translating UI/UX designs from Figma and Sketch into high-quality code, focusing on performance optimization through lazy loading, code splitting, and SSR with  <span style={{color: "#0A81AB" , fontStyle:"italic"}}>Next.js</span>. Passionate about learning and collaborating in agile environments, I am committed to delivering high-quality user experiences and scalable applications.
            </p>
          </Col>
        
        </Row>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Work <span className="purple"> Experience </span>
            </h1>

            <h3 style={{textAlign:"left",fontSize:22,color: "#0A81AB" }}>Osk It Solution </h3>
            <p style={{textAlign:"left"}}>Frontend Developer | 07/2023 - Present</p>
            <p className="home-about-body" style={{paddingTop:0}}>
              <ul>
                <li>Develop and maintain responsive web applications using React and Typescript.</li>
                <li>Worked closely with backend developers to integrate RESTful APIs.</li>
                <li>Optimize application performance by implementing best practices and code optimization techniques.</li>
                <li>Conduct code reviews and provide constructive feedback to junior developers.</li>
                <li>Participate in Agile ceremonies, including sprint planning, stand-ups, and retrospectives.</li>
                <li>Led the frontend development of a major project, resulting in a 30% increase in user engagement.</li>
              </ul>
            </p>

            <h3 style={{textAlign:"left",fontSize:22,color: "#0A81AB" }}>Pratiksham Softwares Pvt. Ltd</h3>
            <p style={{textAlign:"left"}}>Frontend Developer | 06/2022 - 07/2023</p>
            <p className="home-about-body" style={{paddingTop:0}}>
              <ul>
                <li>Developed and maintained dynamic React.js components for production applications.</li>
                <li>Optimized performance and user experience across different devices and browsers.</li>
                <li>Worked closely with backend developers and designers to deliver pixel-perfect UIs.</li>
                <li>Contributed to the successful launch of a new feature that increased user retention by 15%</li>
              </ul>
            </p>
            <p style={{textAlign:"left"}}>Web Developer (Intern)</p>
            <p className="home-about-body" style={{paddingTop:0}}>
              <ul>
                <li>Assisted in developing and maintaining client-side applications using React.</li>
                <li>Collaborate with UX/UI designers to implement user-friendly interfaces.</li>
                <li>Utilized version control systems (Git) for collaborative development.</li>
                <li>Contributed to code reviews and team discussions, ensuring high-quality code standards.</li>
              </ul>
            </p>
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
