import React from "react";
import { Row } from "components/Grid";
import "./Filler.css";


const FillerCenter = (props) => (
   <div id="filler" className="fillerCenter">
    <Row>
        {props.children}
    </Row>
   </div>
);

export default FillerCenter;