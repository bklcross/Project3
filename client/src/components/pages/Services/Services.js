import React, {Component} from "react"
import ServiceTitle from "./ServiceItems/ServiceTitle"
import "./Service.css"
import { Col, Row } from "components/Grid";
import Cancer from "./Img/Cancer.jpg"
import Identity from "./Img/Identity.jpg"
import Couples from "./Img/Couples.jpg"
import Culture from "./Img/Cultural.jpg"



class Services extends Component {
  state = {
    culture: {image: Culture, alt:"Multicultural_img", title:"Multicultural Couples", text:"Every individual creates and embodies their own unique culture, depending on where they come from, how they were raised, the experiences they’ve lived through, and countless other factors. When you include a partner in the mix, there is always some level of blending of cultures and identities, whether you and your partner are from the same culture or not. I can support you and your partner to create and develop a harmonious and unique culture that will support your relationship to thrive."},
    couples: {image: Couples, alt:"Couples_img", title:"Couples therapy", text:"Relationships are hard work. A relationship means learning how to live successfully as a unit, rather than as an individual. And sometimes that means the person that you’ve chosen to know the deepest and most intimate parts of you can be the one who hurts you the most. Couples therapy can help couples break out of destructive cycles to reconnect with each other and themselves. Learn about yourself and your partner, and how you can be in an enriching and nurturing relationship as your most intimate and vulnerable self."},
    identity: {image: Identity, alt:"Asian_Americal_Identity_img", title:"Asian American Identity", text:"Model minority myth, perpetual foreigner syndrome, microaggressions, family conflicts between different generations, and “where are you really from?” If you’ve ever had to deal with any of these insidious issues, you know how taxing they can be on your mental health. Use therapy to learn how to cope with issues that are so specific to your experience, and begin to live a life of peace and harmony in your own unique cultural context."},
    cancer: {image: Cancer, alt:"Families_Dealing_With_Cancer", title:"Families Dealing With Cancer", text:"it’s scary, destructive, and devastating. And cancer doesn’t just affect the individual with the diagnosis, it affects the entire family. How are expectations for your kids different now that you’ve been diagnosed? Or how is a family member’s diagnosis changing how you interact with them? Cancer can be powerful, but it doesn’t have to control your family. Therapy can help regain control over how the cancer affects the relationships that are the dearest to you."}
  }

  render() {
    
    const ServiceCard = ({image, alt, title, text}) => {
      return (
      <div className="col-md-2">
        <div class="card mb-3 servicecard">
          <img src={image} alt={alt}/> 
          <div class="card-body">
              <h4 class="card-title">{title}</h4>
              <p class="card-text">{text}</p>
          </div>
        </div>
      </div>
      )
    }

    return (
      <div className="servicecontainer">
        <Row>
        <div>
          <ServiceTitle />
        </div>
        </Row>
        <Row>
          <ServiceCard image={this.state.culture.image} alt={this.state.culture.alt} title={this.state.culture.title} text={this.state.culture.text}/>
          <ServiceCard image={this.state.couples.image} alt={this.state.couples.alt} title={this.state.couples.title} text={this.state.couples.text}/>
          <ServiceCard image={this.state.identity.image} alt={this.state.identity.alt} title={this.state.identity.title} text={this.state.identity.text}/>
          <ServiceCard image={this.state.cancer.image} alt={this.state.cancer.alt} title={this.state.cancer.title} text={this.state.cancer.text}/>
        </Row>
      </div>
    )
  }
}

export default Services; 