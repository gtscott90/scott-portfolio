import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
const phone = <FontAwesomeIcon icon={faPhone} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />

// TODO: write handlesubmit function
// TODO: FontAwesome

function Contact() {
    return (
        <div className="content my-5">
        <div className="container my-3 p-3 border border border-primary bg-light">
            <div className="d-flex row">
                <div className="align-items-baseline col-lg-12 text-primary">
                    <h1 className="display-4 text-center text-lg-left">Contact Me</h1>
                </div>
            </div>
            <hr />
<section className="mb-4">

    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>

    <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST" /*ref="form" onSubmit={this.handleSubmit}*/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
 
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control" />
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Send</button>

            </form>

            
        </div>

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li> {location}
                    <p>Brooklyn, NY, USA</p>
                </li>

                <li>{phone}
                    <p>(937) 974-2843</p>
                </li>

                <li>
                    {envelope}
                    <p>gtscott90@gmail.com</p>
                </li>
            </ul>
        </div>
        

    </div>

</section>


        </div>
    </div>
    );
  }
  
  export default Contact;