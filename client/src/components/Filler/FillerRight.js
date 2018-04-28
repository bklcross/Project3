import React from "react";
import { Row } from "../../components/Grid";
import "./Filler.css";


const FillerRight = (props) => (
   <div id="filler" className="fillerRight wow fadeIn" data-wow-delay="1.2s">
    <Row>
        {props.children}
    </Row>
   </div>
);

export default FillerRight;