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
                <div className="col-lg-4 py-2">
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
                            <Card.Link href="https://devsync-project-3.herokuapp.com/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/DevSync" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
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
                            <Card.Link href="https://apple-tart-97413.herokuapp.com/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/Destination-Goals" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={Spyglass} alt="Spyglass" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Spyglass</Card.Title>
                            <Card.Text>
                                Travel planning app used to find information about countries so you can plan your trip
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>JavaScript, Semantic UI, Rest Countries API, Currency Converter API</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>used the currency converter API to create the currency converter</p>
                            </Card.Text>
                            <Card.Link href="https://gabel35.github.io/Spyglass/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/Spyglass" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div> 
           </div>
           
           <div className="row">
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={EatBurger} alt="Eat Da Burger" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Eat da Burger</Card.Title>
                            <Card.Text>
                                Create, Read, Update, and Delete "burgers" from an SQL database
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>MySQL, Node.js, Express, Handlebars, ORM, MVC structure, HTML, CSS</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                            </Card.Text>
                            <Card.Link href="https://fast-thicket-43734.herokuapp.com/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/burger-eater" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={EmployDir} alt="Employee Directory" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Employee Directory</Card.Title>
                            <Card.Text>
                                Keep track of employees and their information by searching, filtering, and sorting with this React App
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>React, Random User API, JavaScript, HTML, CSS </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                            </Card.Text>
                            <Card.Link href="https://gtscott90.github.io/employee-directory/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/employee-directory" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={DayPlanner} alt="Day Planner" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Day Planner</Card.Title>
                            <Card.Text>
                                A simple day calendar showing past, present, and future hour blocks to help you schedule your day
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies:  </span>Bootstrap, Moment.js, JQuery, FontAwesome, HTML, CSS, Local Storage</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                            </Card.Text>
                            <Card.Link href="https://gtscott90.github.io/day-planner/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/day-planner" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={WorkoutTracker} alt="Workout Tracker" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Workout Tracker</Card.Title>
                            <Card.Text>
                                Create, Read, and Update different kinds of workouts in a Mongo Database to track types of exercise, minutes of exercise, and pounds lifted, then view your data on a userfriendly dashboard
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>MongoDB, Mongoose, JavaScript, HTML, CSS</p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                            </Card.Text>
                            <Card.Link href="https://stormy-river-80275.herokuapp.com/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/workout-tracker" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4 py-2">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={PassGen} alt="Password Generator" style={{width: "318px", height:"210px"}}/>
                        <Card.Body>
                            <Card.Title>Password Generator</Card.Title>
                            <Card.Text>
                            Generates a random password based on user specification of length and inclusion of special characters.
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Technologies: </span>JavaScript, HTML, CSS </p>
                            </Card.Text>
                            <Card.Text>
                            <p><span className="font-weight-bold">Role: </span>Sole Author</p>
                            </Card.Text>
                            <Card.Link href="https://gtscott90.github.io/password-generator/" target="_blank">Deployed App</Card.Link>
                            <Card.Link href="https://github.com/gtscott90/password-generator" target="_blank">Github</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
       </div>   
    </div>
    );
  }
  
  export default Portfolio;