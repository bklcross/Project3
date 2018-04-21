<<<<<<< HEAD
import React from "react";

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <p>
contact page
    </p>
  </div>
);
=======
import React, { Component } from "react";
import ImageContainer from "../../ImageContainer/ImageContainer";
import FillerCenter from "../../Filler/FillerCenter";
import { Col } from "components/Grid";
import ContactForm from '../../ContactForm/ContactForm';


class Contact extends Component {

  onSubmit = fields => {
    console.log(fields);
  };

  render () {
    return(
      <div>
        <ImageContainer />
        <FillerCenter>
          <Col size="md-8">
            <h3>Contact</h3>
            <p>Please feel free to call us to discuss your upcoming project! For inquiries about employment, 
              subcontracting for us, or information about our current project, please use the form below 
              so we can connect you to the best person to help you.</p>
          </Col>
        </FillerCenter>
        <br />
        <ContactForm onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}
>>>>>>> master

export default Contact;
