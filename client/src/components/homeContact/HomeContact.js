import React from "react";
import "./HomeContact.css";
import { Button } from 'reactstrap';
import MoreButton from '../MoreButton/MoreButton';
import { Link } from "react-router-dom";

const HomeContact = () => {

    return(
        <div id="homeContactBackground">
            <div className="colorLayer wow fadeInDown">
                <i className="far fa-map fa-5x"></i>
                <h3 className="display-3" id="connectWithMe">Connect with me!</h3>
                <hr />
                <Link to="/contact">
                    <Button color="secondary">More</Button>
                </Link>
            </div>
        </div>
    );
};

export default HomeContact;