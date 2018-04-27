import React from "react";
import { Col, Row } from "../../components/Grid";
import "./SummaryRow.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SummaryRow = () => {

    // AOS.init()

    return(
      <div className="row" id="serviceSummary">
          <Row>
            <div className="col-12 col-lg-2 wow fadeInLeft">
                <article data-aos="fade-up" data-aos-delay="3000" id="blog1">
                    <h2>Multicultural Couples</h2>
                   <p> I can support you and your partner to create and develop a harmonious
                       and unique culture that will support your relationship to thrive.</p>
                </article>
            </div>
            <div className="col-12 col-lg-2 wow fadeInLeft" data-wow-delay="0.4s">
                <article>
                    <h2>Couples Therapy</h2>
                   <p>Learn about yourself and your partner, and how you can be in an enriching
                    and nurturing relationship as your most intimate and vulnerable self.</p>
                </article>
            </div>
            <div className="col-12 col-lg-2 wow fadeInLeft" data-wow-delay="0.8s">
                <article>
                   <h2>Asian American Issues</h2>
                   <p>Use therapy to learn how to cope with issues that are so specific to your
                   experience, and begin to live a life of peace and harmony in your own unique cultural context.</p>
                </article>
            </div>
            <div className="col-12 col-lg-2 wow fadeInLeft" data-wow-delay="1.0s">
                <article>
                <h2>Families Dealing with Cancer</h2>
                   <p>Therapy can help regain control over how the cancer affects the
                    relationships that are the dearest to you.</p>
                </article>
            </div>
         </Row>
      </div>
    )
}

export default SummaryRow;
