import React from 'react';
import { Card } from 'react-bootstrap'
import Spyglass from "./images/spyglass.png"
import DayPlanner from "./images/dayplanner.png"
import PassGen from "./images/passwordGenerator.png"
import DestinationGoals from "./images/destination-goals.png"
import EatBurger from "./images/eat-da-burger.png"
import DevSync from "./images/devsync.png"
import EmployDir from "./images/employeedirectory.png"
import WorkoutTracker from "./images/workout-tracker.png"

function Portfolio() {
    return (
        
        <div className="content my-5">
        <div className="container my-3 p-3 border border border-primary bg-light">
            <div className="d-flex row">
                <div className="align-items-baseline col-lg-12 text-primary">
                    <h1 className="display-4 text-center text-lg-left">Portfolio</h1>
                </div>
            </div>
            <hr />
           <div className="row">
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={DevSync} alt="DevSync" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>DevSync</Card.Title>
                            <Card.Text>
                                Social networking and job search app for web developers
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>React, Redux, React Hooks, Express, NoSQL (MongoDB), Mongoose, Material UI, JavaScript</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>used Github Jobs API to create the jobsearch page, used React for the landing page, peer code review</p>
                            </Card.Text>
                            <Card.Link href="https://devsync-project-3.herokuapp.com/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/DevSync">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={DestinationGoals} alt="Destination: Goals" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Destination: Goals</Card.Title>
                            <Card.Text>
                                Goal setting/tracking app to help break goals into achievable steps and calendar them
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>MySQL, Sequelize, Express, Node.js, Passport, Bcrypt, Handlebars, JavaScript, JQuery, Heroku, CSS, Semantic UI, Bootstrap, Moment.js</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>wrote the logic to get each goal to appear on the calendar based on the frequency at which user wants to work on their goal, peer code review</p>
                            </Card.Text>
                            <Card.Link href="https://apple-tart-97413.herokuapp.com/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/Destination-Goals">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Spyglass} alt="Spyglass" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Spyglass</Card.Title>
                            <Card.Text>
                                descrioption placeholder
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span> </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span> </p>
                            </Card.Text>
                            <Card.Link href="https://gabel35.github.io/Spyglass/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/Spyglass">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div> 
           </div>
           <hr />
           <div className="row">
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={DayPlanner} alt="Day Planner" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Day Planner</Card.Title>
                            <Card.Text>
                                descrioption placeholder
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span> </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author </p>
                            </Card.Text>
                            <Card.Link href="https://gtscott90.github.io/day-planner/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/day-planner">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={EatBurger} alt="Eat Da Burger" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Eat da Burger</Card.Title>
                            <Card.Text>
                                descrioption placeholder
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span> </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author </p>
                            </Card.Text>
                            <Card.Link href="https://fast-thicket-43734.herokuapp.com/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/burger-eater">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={EmployDir} alt="Employee Directory" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Employee Directory</Card.Title>
                            <Card.Text>
                                descrioption placeholder
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span> </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author </p>
                            </Card.Text>
                            <Card.Link href="https://gtscott90.github.io/employee-directory/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/employee-directory">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-4">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={WorkoutTracker} alt="Workout Tracker" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Workout Tracker</Card.Title>
                            <Card.Text>
                                descrioption placeholder
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span> </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author </p>
                            </Card.Text>
                            <Card.Link href="https://stormy-river-80275.herokuapp.com/">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/workout-tracker">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PassGen} alt="Password Generator" style={{width: "286px", height:"180px"}}/>
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                        Generates a random password based on user specification of length and inclusion of special characters.
                        </Card.Text>
                        <Card.Text>
                        <p><span className="font-weight-bold">Technologies: </span> </p>
                        </Card.Text>
                        <Card.Text>
                        <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                        </Card.Text>
                        <Card.Link href="https://gtscott90.github.io/password-generator/">Deployed App</Card.Link>
                        <Card.Link href="https://github.com/gtscott90/password-generator">Github</Card.Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
       </div>   
    </div>
    );
  }
  
  export default Portfolio;