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
                I'm gaining proficiency in HTML, CSS, Bootstrap, Javascript and
                more. I'm excited about the problem solving nature of coding in
                conjuction with the creative element. I really enjoy identifying
                and solving problems while getting also getting satisfaction out
                of creating a useful product for people.
              </p>
              <p className="lead">
                In my spare time I enjoy rock climbing, camping, seeing live music
                and going to the park with my dog.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;