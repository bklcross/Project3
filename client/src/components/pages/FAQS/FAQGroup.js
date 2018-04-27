import React from "react";
import {Panel} from 'react-bootstrap';
import { Row } from "components/Grid";

const FAQGroup = () => {

    return(
    <div>
    <Row>
     <div className="col-5 col-md-8">
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">1. Why should I go to therapy? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>You should go to therapy because everyone should go to therapy. Life is hard, and life’s struggles can leave marks on us that 
          continue to hurt us long after they’ve passed. Therapy is a way of prioritizing yourself and your needs, and it’s an active step in the 
          lifelong journey of healing and restoration. There is no shame in loving and caring for yourself and your loved ones.</Panel.Body>
      </Panel>
     </div>
     </Row>
     <Row>
      <div className="col-5 col-md-8">
       <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">What is your fee and what is a sliding scale? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>A sliding scale means that the fee you pay depends on your needs: what sort of services you need, the length of sessions, and, 
          most importantly, what you can afford to pay. My sliding scale is $60-$120, and I will work with you to determine a fee that works best 
          for you while meeting your needs.</Panel.Body>
       </Panel>
      </div>
     </Row>
     <Row>
      <div className="col-5 col-md-8">
       <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">3. What do you mean by free consultation? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>A consultation is not a therapy session! In therapy, a good therapeutic relationship is one of the best predictors for 
          therapeutic success, and the decision of choosing the right therapist is incredibly important. So I offer a free in-person thirty
          minute consultation for any potential client to decide if I’m what they’re looking for, no (financial or otherwise) strings attached.</Panel.Body>
       </Panel>
      </div>
     </Row>
     <Row>
      <div className="col-5 col-md-8">
       <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">4. Do you take insurance? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>Unfortunately, at this time, I am not taking insurance.</Panel.Body>
       </Panel>
      </div>
     </Row>
     <Row>
      <div className="col-5 col-md-8">
       <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">5. What makes you qualified to be my therapist? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>Good question! I graduated with my Bachelor’s with summa cum laude at UCSD, and worked in the mental health field 
          before receiving my Master’s in Marriage and Family Therapy at SDSU. I have years of experience working in various therapeutic 
          contexts - working with couples, children, families, and individuals dealing with relationship distress, anxiety, depression, 
          grief, addiction, parenting issues, and other various mental health disorders. I am trained in Emotionally Focused Therapy, 
          Cognitive Behavioral Therapy, and Solution Focused Brief Therapy, amongst other modalities. I also offer services in English, 
          Korean, and Spanish. I have many qualifications and trainings that make me an effective therapist, but ultimately, only you 
          can decide if I should have the privilege of being your therapist.</Panel.Body>
       </Panel>
      </div>
     </Row>
     <Row>
      <div className="col-5 col-md-8">
       <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">6. How often do I have to come to therapy, and for how long? </Panel.Title>
        </Panel.Heading>
        <Panel.Body>Therapy normally consists of weekly sessions, which last between 50-80 minutes. Every client has different 
          individual needs, so we can decide together what would work best for you.</Panel.Body>
       </Panel>
      </div>
     </Row>
    </div>
    )
}

export default FAQGroup;
