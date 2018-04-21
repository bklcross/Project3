import React from "react";
import { Row } from "components/Grid";
import "./Filler.css";

// Filler components are used when there needs to be a div with mostly white blank space with
// a tiny bit of element such as "Learn More" link and etc.
const FillerCenter = (props) => (
   <div id="filler" className="fillerCenter">
    <Row>
        {props.children}
    </Row>
   </div>
);

export default FillerCenter;