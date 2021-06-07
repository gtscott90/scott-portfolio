import React from 'react';
import Spyglass from "./images/spyglass.png"
import DayPlanner from "./images/dayplanner.png"
import PassGen from "./images/passwordGenerator.png"
import DestinationGoals from "./images/destination-goals.png"
import EatBurger from "./images/eat-da-burger.png"
import DevSync from "./images/devsync.png"

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
                <div className="col-lg-3">
                    <figure className="text-center"><img src={DevSync} alt="DevSync" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://devsync-project-3.herokuapp.com/">DevSync</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/gtscott90/Project-3">Github Repository</a></figcaption>
                    </figure>
                </div>
                <div className="col-lg-3">
                    <figure className="text-center"><img src={Spyglass} alt="Spyglass" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://gabel35.github.io/Spyglass/">Spyglass</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/gabel35/Spyglass">Github Repository</a></figcaption>
                    </figure>
                </div>
                <div className="col-lg-3">
                    <figure className="text-center"><img src={DestinationGoals} alt="Destination: Goals" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://apple-tart-97413.herokuapp.com/">Destination: Goals</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/jacquelinerodney/project2">Github Repository</a></figcaption>
                    </figure>
                </div>
                <div className="col-lg-3">
                    <figure className="text-center"><img src={DayPlanner} alt="Day Planner Icon" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://gtscott90.github.io/day-planner/">Day Planner</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/gtscott90/day-planner">Github Repository</a></figcaption>
                    </figure>
                </div>
           </div>

           <div className="row">
                <div className="col-lg-3">
                    <figure className="text-center"><img src={EatBurger} alt="Eat Da Burger" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://fast-thicket-43734.herokuapp.com/">Eat Da Burger!</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/gtscott90/burger-eater">Github Repository</a></figcaption>
                    </figure>
                </div>
                <div className="col-lg-3">
                    <figure className="text-center"><img src={PassGen} alt="Password Generator" style={{width: "150px"}}/> 
                        <figcaption className="text-center"><a href="https://gtscott90.github.io/password-generator/">Password Generator</a></figcaption>
                        <figcaption className="text-center"><a href="https://github.com/gtscott90/password-generator">Github Repository</a></figcaption>
                    </figure>
                </div>
            </div>
       </div>   
    </div>
    );
  }
  
  export default Portfolio;