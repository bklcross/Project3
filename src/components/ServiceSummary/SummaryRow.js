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
            <Col size="md-3">
                <article data-aos="fade-up" data-aos-delay="3000">
                    <h1>Family Counseling</h1>
                    <p> While over 70 % of counselors say they provide couples counseling, only 11 % have specific training in providing help
                    for couple issues.Our counselors are specially trained in providing a high level of care.Your marriage is worth it. </p>
                </article>
            </Col>
            <Col size="md-3">
                <article>
                    <h1>Marriage</h1>
                    <p>Discernment Counseling is a research based approach to helping couples where one (or both) of you are questioning the 
                    commitment to stay married and one (or both) of you aren’t sure you have the motivation to work hard in marriage counseling to fix your problems.</p>
                </article>
            </Col>
            <Col size="md-3">
                <article>
                    <h1>Group</h1>
                    <p>Working on our issues in a small group of others who have similar issues while guided by professional counselors has proven to be highly 
                        effective for experiencing change for a number of issues – often more effective than individual or couples counseling. Come explore the 
                        many options we have for group therapy.</p>
                </article>
            </Col>
         </Row>
      </div>
    )
}

export default SummaryRow;