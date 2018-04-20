import React from "react";
import { Container, Row, Col } from "../Grid";
import "./BlogPreview.css";

export const BlogPreview = props => (
    <Container>
        <Row>
            <div className="blog1">
                <img src="https://images.unsplash.com/photo-1496098868818-75736fc02eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7812dba20298669a5208331af3bf5c5&auto=format&fit=crop&w=800&q=60" width="100%" height="100%" alt="pic1"></img>
                <Col size="md-8">
                    <h3 className="blogTitle"><i>Blog #1</i></h3>
                    <p className="blogSummary">This is a blog about blogs</p>
                    <p className="arrow">&#x2192;</p>
                {/* <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a> */}
                </Col>
            </div>
            <div className="blog2">
                <img src="https://images.unsplash.com/photo-1519427658477-aaac2cb5d4e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c798109419cbb9a5b46ebc371d7230f4&auto=format&fit=crop&w=800&q=60" alt="pic2"></img>
                <Col size="md-8">
                    <h3 className="blogTitle"><i>Blog #2</i></h3>
                    <p className="blogSummary">This is a blog about blogs</p>
                    <p className="arrow">&#x2192;</p>
                {/* <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a> */}
                </Col>
            </div>
            <div className="blog3">
                <img src="https://images.unsplash.com/photo-1522093243371-296c79a66df4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5df6bb1f7e73b7621f64a4da294fea0&auto=format&fit=crop&w=800&q=60" alt="pic3"></img>
                <Col size="md-8">
                    <h3 className="blogTitle"><i>Blog #3</i></h3>
                    <p className="blogSummary">This is a blog about blogs</p>
                    <p className="arrow">&#x2192;</p>
                {/* <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to recipe!</a> */}
                </Col>
            </div>
      </Row>
    </Container>
);