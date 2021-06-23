import React from 'react';
import profilePic from "./images/profile-picture.png"

function About() {
    return (
        <div className="content my-5">
        <div className="container my-3 p-3 border border border-primary bg-light">
          <div className="d-flex row">
            <div className="align-items-baseline col-lg-12 text-primary">
              <h1 className="display-4 text-center text-lg-left">About Me</h1>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-3">
              <div className="text-center">
                <figure className="figure">
                  <img
                    src={profilePic}
                    className="img-fluid img-thumbnail figure-img rounded"
                    alt="Greg Scott Headshot"
                  />
                  <figcaption className="figure-caption">Greg Scott</figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-9 text-secondary">
              <p className="lead">
                I've been a high school science teacher for 9 years. I'm currently
                working on developing the skills and knowledge needed to be a full
                stack web developer and make a change to a new field.
              </p>
              <p className="lead">
                I'm excited about the problem solving nature of coding in
                conjuction with the creative element. I really enjoy identifying
                and solving problems while getting also getting satisfaction out
                of creating a useful product for people.
              </p>
              <p className="lead">
                In my spare time I enjoy rock climbing, camping, seeing live music
                and going to the park with my dog.
              </p>
              <ul className="lead">
                  <h4>Technical Skills</h4>
                  <li>Browser Based Technologies (HTML5, CSS, JavaScript, jQuery, Bootstrap, React.js)</li>
                  <li>Databases (MySQL, MongoDB)</li>
                  <li>Server Side Development (MERN Stack, Progressive Web Applications)</li>
                  <li>Deployment/Command-Line Fundamentals (Heroku, Git)</li>
                  <li>API Interaction (API, JSON, AJAX)</li>
                  <li>Quality Assurance (Unit Testing, Linting, Continuous Integration)</li>
              </ul>
              <ul className="lead">
                  <h4>Soft Skills</h4>
                  <li>Teamwork and Collaboration</li>
                  <li>Team Leadership Experience</li>
                  <li>Clear Communication</li>
                  <li>Life-long Learner</li>
                  <li>Problem Solver</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;