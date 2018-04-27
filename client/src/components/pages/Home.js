import React, { Component } from "react";
import SummaryRow from '../ServiceSummary/SummaryRow';
import Jumbo from '../Jumbotron/Jumbotron';
import IntroBox from "../IntroBox/IntroBox";
import FillerRight from "../Filler/FillerRight";
import FillerCenter from "../Filler/FillerCenter";
import { BlogPreview } from "../BlogList/BlogPreview"
import { Col } from "../../components/Grid";
import { Link } from "react-router-dom";
import HomeContact from '../homeContact/HomeContact';

class Home extends Component {
  state = {
    thumbnail: "",
    title: "",
    summary: ""
  }

  render() {
    return(
      <div>
        <Jumbo />
        <SummaryRow />
        <FillerRight>
          <Col size="md-12">
            <Link to="services">
              <p id="viewServices"><i><u>View Our Services  &#x2192;</u></i></p>
            </Link>
          </Col>
        </FillerRight>
        <IntroBox />
        <FillerCenter>
          <Col size="md-8">
            <h3>Read the Latest Blogs</h3>
            <p>I regularly write blogs that may be of value to you and your life.
              I invite you to check back often or to join our email list to receive notice of new blogs.</p>
          </Col>
        </FillerCenter>
        <BlogPreview />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <HomeContact />
  </div>
);
  }
}

export default Home;