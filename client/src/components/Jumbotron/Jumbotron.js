import React from 'react';
import { Button } from 'reactstrap';
import "./Jumbotron.css";

const Jumbo = (props) => {
    return (
        <div> 
          {/* This jumbotron component is from reacetrap and being used as part of Jumbo which is  */}
          <div className="jumbotron">
            <div>
                {/* If the client wants the video to be the background instead of pictures, uncomment the code below and comment out the pciture link in CSS file. */}
                {/* <video id="bg-video" autoPlay="true" loop="loop" preload="metadata" muted="muted">
                <source src="https://gcs-vimeo.akamaized.net/exp=1523608978~acl=%2A%2F708213662.mp4%2A~hmac=c97ace9c9f547d7150b8575d45650116de618b2e7e6b5c44491dea2bd0d98da5/vimeo-prod-skyfire-std-us/01/1512/8/207561527/708213662.mp4" type="video/ogg" />
                </video> */}
                <h1 className="display-3" id="jumboh">Jessica Ko Therapy</h1>
                <hr className="my-2" />
                {/* <p className="lead">My mission is to be an ambassador for healing and restoration by collaborating with couples and individuals to find wholeness and newness. I partner with clients to find identity, confidence, and comfort in their relationships and in themselves. And I work to foster the understanding of personal and relational history, culture, and contexts to breathe life into the present. </p> */}

            </div>
          </div>
        </div>
    );
}
export default Jumbo;