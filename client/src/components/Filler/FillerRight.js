import React from "react";
import { Row } from "components/Grid";
import "./Filler.css";


const FillerRight = (props) => (
   <div id="filler" className="fillerRight">
    <Row>
        {props.children}
    </Row>
   </div>
);

export default FillerRight;