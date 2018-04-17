import React from "react";
import { Col, Row } from "components/Grid"
import Portrait from "../Img/Portrait.jpg"
import "../About.css"


const AboutImg = () => (
    
        <Col size="md-6">
        <img src={Portrait} alt={"About_Me_Portrait"} className="about_me_img"/> 
        </Col>
    
)

export default AboutImg