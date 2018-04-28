import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import axios from "axios";


class ContactForm extends Component {
    state={
        inquiries: [],
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    };

    loadInquiries = () => {
      API.getInquiries()
        .then(res =>
          this.setState({ inquiries: res.data, firstName: "", lastName: "", email: "", message: "" })
        )
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // this.handleInputChange(this.state);
        // if (this.state.firstName && this.state.lastName && this.state.email) {
        //   API.saveInquiry({
        //     firstName: this.state.firstName,
        //     lastName: this.state.lastName,
        //     email: this.state.email,
        //     message: this.state.message
        //   })
        axios.post("/api/contact",
              {
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: this.state.email,
              message: this.state.message
            }).then(this.loadInquiries)
            // .then((res) => this.loadInquiries())
            .catch(err => console.log(err));
    };

    render () {
        return (
        <Row>
          <Col size="md-6">
            <form className="wow fadeIn" method="POST" action ="contact">
              <Input
                value={this.state.firstName}
                onChange={e => this.handleInputChange(e)}
                name="firstName"
                placeholder="First Name*"
              />
              <Input
                value={this.state.lastName}
                onChange={e => this.handleInputChange(e)}
                name="lastName"
                placeholder="Last Name*"
              />
              <Input
                value={this.state.email}
                onChange={e => this.handleInputChange(e)}
                name="email"
                placeholder="Email Address*"
              />
              <TextArea
                value={this.state.message}
                onChange={e => this.handleInputChange(e)}
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