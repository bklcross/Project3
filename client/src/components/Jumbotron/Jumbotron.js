import React from 'react';
import { Button } from 'reactstrap';
import "./Jumbotron.css";

const Jumbo = (props) => {
    return (
        <div> 
          {/* This jumbotron component is from reacetrap and being used as part of Jumbo which is  */}
          <div id="jumbotron">
            <div id="jumboText" className="wow fadeInUp">
                {/* If the client wants the video to be the background instead of pictures, uncomment the code below and comment out the pciture link in CSS file. */}
                {/* <video id="bg-video" autoPlay="true" loop="loop" preload="metadata" muted="muted">
                <source src="https://gcs-vimeo.akamaized.net/exp=1523608978~acl=%2A%2F708213662.mp4%2A~hmac=c97ace9c9f547d7150b8575d45650116de618b2e7e6b5c44491dea2bd0d98da5/vimeo-prod-skyfire-std-us/01/1512/8/207561527/708213662.mp4" type="video/ogg" />
                </video> */}
                <h1 className="display-3" id="jumboh">Building Intimate Relationships</h1>
                <p className="lead">Getting to the heart of relationships.</p>
                <hr className="my-2" />
                <p className="lead">It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </div>
          </div>
        </div>
    );
}
export default Jumbo;