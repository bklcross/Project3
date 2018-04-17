import React from "react";
import MoreButton from '../MoreButton/MoreButton';
import { Col, Row } from "components/Grid";
import "./IntroBox.css";
// import AOS from "aos";
import { Image } from 'semantic-ui-react';

const IntroBox = () => {

    return(
      <div className="row" id="introBox">
        {/* Row and Col are part of the Grid package and the props are "pre-defined". The size prop for the col is similar to if not the same as bootstrap. Style override might require creating a div that nests the row. */}
        <Row>
            <Col size="md-4">
                <img src="https://images.unsplash.com/photo-1505906960586-b2f5793971ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=84f63bfcb360745c5008c9f6e59e3345&auto=format&fit=crop&w=1414&q=80"></img>
            </Col>
            <Col size="md-4">
            <article id="intro">
                <h1>Greetings!</h1>
                <p>I'm freaking the best therapist in San Diego. Don't even think about checking out other clinics. You're gonna just was time and money doing so.
                    I can save your marriage, your family, your life bros. So when you're done wasting your time going to different websites, give me a call.
                </p>
                <MoreButton />
            </article>
            </Col>
        </Row>
      </div>
    )
}

export default IntroBox;
