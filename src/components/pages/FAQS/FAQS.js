import React from "react";
import FAQGroup from "../FAQS/FAQGroup.js"
import "./FAQS.css";


const FAQS = () => (
  <div>
  <div id="faqsBackground">
            <p className="display-3" id="faqs">Frequently Asked Questions</p>
        </div>
    <p>
		<FAQGroup/>

    </p>
  </div>
);

export default FAQS;
