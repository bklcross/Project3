import React, { Component } from "react";
import { Col, Row } from "components/Grid";
import { Input, TextArea, FormBtn } from "components/Form";

class ContactForm extends Component {
    state={
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(event);
        // this.handleInputChange(this.state);
        if (this.state.firstName && this.state.lastName && this.state.email) {
            this.setState({
                firstName: "",
                lastName: "",
                email: "",
                message: ""
            }, () => {
                console.log(this.state);
            });
        }
        // .catch(err => console.log(err));
        // console.log(this.state);
    };

    render () {
        return (
        <Row>
          <Col size="md-6">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name*"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name*"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email Address*"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="message"
                placeholder="Your Message"
              />
              <p><i>* Required Field</i></p>
              <FormBtn
                // disabled={!(this.state.firstName && this.state.lastName)}
                onClick={e => this.handleFormSubmit(e)}
              >
                Send
              </FormBtn>
            </form>
          </Col>
        </Row>
        )
    }
}

export default ContactForm;