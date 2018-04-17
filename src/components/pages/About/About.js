import React, {Component} from "react"
import { Col, Row } from "components/Grid"
import AboutImg from "./AboutItems/AboutImg"
import AboutText from "./AboutItems/AboutText"


class About extends Component {
  render() { 
    return (
      <div className="about_background">
        <Row>
          <AboutImg />
          <AboutText />
        </Row>
      </div>
    )
  }
}

export default About;
