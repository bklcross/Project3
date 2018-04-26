import React from "react";
// import MoreButton from '../MoreButton/MoreButton';
import { Col, Row } from "components/Grid";
import "./SummaryRow.css";
// import AOS from "aos";

const SummaryRow = () => {

    // AOS.init()

    return(
      <div className="row" id="serviceSummary">
          <Row>
            <Col size="md-2">
                <article data-aos="fade-up" data-aos-delay="3000">
                    <h2>Multicultural Couples</h2>
                    <p> I can support you and your partner to create and develop a harmonious and unique culture that will support your relationship to thrive.</p>
                </article>
            </Col>
            <Col size="md-2">
                <article>
                    <h2>Couples Therapy</h2>
                    <p>Learn about yourself and your partner, and how you can be in an enriching and nurturing relationship as your most intimate and vulnerable self.</p>
                </article>
            </Col>
            <Col size="md-2">
                <article>
                    <h2>Asian American Issues</h2>
                    <p>Use therapy to learn how to cope with issues that are so specific to your experience, and begin to live a life of peace and harmony in your own unique cultural context.</p>
                </article>
            </Col>
            <Col size="md-2">
                <article>
                    <h2>Families Dealing with Cancer</h2>
                    <p>Therapy can help regain control over how the cancer affects the relationships that are the dearest to you.</p>
                </article>
            </Col>
         </Row>
      </div>
    )
}

export default SummaryRow;
