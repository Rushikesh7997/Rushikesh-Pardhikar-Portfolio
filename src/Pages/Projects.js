import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading" style={{textAlign:"center"}}>
          My Creative <strong className="purple">Portfolio</strong> Section
        </h1>
        <p style={{ color: "white", textAlign:"center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/blog%20app.PNG?raw=true"
              title="Blog App (MERN)"
              description="I built a full-stack blog app using React.js, CSS, Node.js, and Express.js with a clean and responsive design. The front end, developed with React.js and styled using CSS, ensures a smooth user experience across devices. The back end, powered by Node.js and Express.js, handles user authentication, post creation, editing, and deletion with secure JWT-based authentication. I used MongoDB with Mongoose for efficient data management."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | Node | Express | JWT | MongoDB "
              link="https://blog-web-app-frontend.onrender.com/"
              a="https://github.com/Rushikesh7997/blog-web-app"
            />
        </Col>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/bitcash.PNG?raw=true"
              title="Bitcash Admin"
              description="I developed a BitCash Admin Panel using React.js, Redux, and REST APIs to efficiently track and manage Bitcoin transactions for users. The panel provides real-time data on user balances, transaction history, and market trends through secure API integration. Redux handles state management, ensuring smooth data flow and quick updates. The user-friendly interface, built with React.js, allows admins to monitor transactions, flag suspicious activity, and generate detailed reports. "
              techD="React | Redux | Html | Javascript | Css "
              link="https://bitcash.co.in/"
              a="#"
            />
        </Col>

        <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/youtube-clone.PNG?raw=true"
              title="Youtube clone"
              description="I build a Frontend Project of Youtube Clone. This is a React-based web application that fetches data from the YouTube Data API v3 to display videos, categories, and related content. The project mimics some of the core functionalities of YouTube, such as browsing videos by category, viewing video details, and exploring recommended videos."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | API | Responsive "
              link="https://blog-web-app-frontend.onrender.com"
              a="https://github.com/Rushikesh7997/youtube_react"
            />
          </Col>
  
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/note%20app.PNG?raw=true"
              title="Notes App"
              description="I developed a note-taking app using React.js, HTML, and CSS to provide a simple and intuitive user experience. The app allows users to create, edit, and delete notes with real-time updates using React's state management. I used CSS to design a clean, responsive interface that works smoothly across different devices."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React"
              link="https://todo-app-react-4mpv.onrender.com/"
              a="https://github.com/Rushikesh7997/Todo-App-React"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Rushikesh7997/Sreenshots/blob/main/Tie-tac-toe%20game%201.PNG?raw=true"
              title="Tic-Tac-Toe"
              description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players.It is Mind refreshing game It is created with the help of JavaScript Html and Css."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://dainty-semifreddo-4e54b0.netlify.app/"
              a="https://github.com/Rushikesh7997/Tic-Tac-Toe"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
