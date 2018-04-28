import React from "react";
import { Row } from "../../components/Grid";
import "./Filler.css";


const FillerLeft = (props) => (
   <div id="filler" className="fillerLeft">
    <Row>
        {props.children}
    </Row>
   </div>
);

export default FillerLeft;