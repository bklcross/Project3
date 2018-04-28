// import React, {Component} from "react"
// import { Row } from "../../Grid"
// import { Accordion, Icon } from 'semantic-ui-react'

// class FAQs extends Component {
//   state = {
//     q1: {index: 1, question: "1. Why should I go to therapy?", answer: "You should go to therapy because everyone should go to therapy. Life is hard, and life’s struggles can leave marks on us that continue to hurt us long after they’ve passed. Therapy is a way of prioritizing yourself and your needs, and it’s an active step in the lifelong journey of healing and restoration. There is no shame in loving and caring for yourself and your loved ones."},
//     q2: {index: 2, question: "2. What is your fee and what is a sliding scale?", answer: "A sliding scale means that the fee you pay depends on your needs: what sort of services you need, the length of sessions, and, most importantly, what you can afford to pay. My sliding scale is $60-$120, and I will work with you to determine a fee that works best for you while meeting your needs."},
//     q3: {index: 3, question: "3. What do you mean by free consultation?", answer: "A consultation is not a therapy session! In therapy, a good therapeutic relationship is one of the best predictors for therapeutic success, and the decision of choosing the right therapist is incredibly important. So I offer a free in-person thirty minute consultation for any potential client to decide if I’m what they’re looking for, no (financial or otherwise) strings attached."},
//     q4: {index: 4, question: "4. Do you take insurance?", answer: "Unfortunately, at this time, I am not taking insurance."},
//     q5: {index: 5, question: "5. What makes you qualified to be my therapist?", answer: "Good question! I graduated with my Bachelor’s with summa cum laude at UCSD, and worked in the mental health field before receiving my Master’s in Marriage and Family Therapy at SDSU. I have years of experience working in various therapeutic contexts - working with couples, children, families, and individuals dealing with relationship distress, anxiety, depression, grief, addiction, parenting issues, and other various mental health disorders. I am trained in Emotionally Focused Therapy, Cognitive Behavioral Therapy, and Solution Focused Brief Therapy, amongst other modalities. I also offer services in English, Korean, and Spanish. I have many qualifications and trainings that make me an effective therapist, but ultimately, only you can decide if I should have the privilege of being your therapist."},
//     q6: {index: 6, question: "6. How often do I have to come to therapy, and for how long?", answer: "Therapy normally consists of weekly sessions, which last between 50-80 minutes. Every client has different individual needs, so we can decide together what would work best for you."},
//     activeIndex: 0
//   }

//   handleClick = (e, titleProps) => {
//     const { index } = titleProps
//     const { activeIndex } = this.state
//     const newIndex = activeIndex === index ? -1 : index

//     this.setState({ activeIndex: newIndex })
//   }

//   render() {
//     const { activeIndex } = this.state

    
//   const FAQCard = ({question, answer, index}) => {
//     return (
//       <Accordion styled>
//         <Accordion.Title active={activeIndex === {index}} index={{index}} onClick={this.handleClick}>
//           <Icon name='dropdown' />{question}
//         </Accordion.Title>
//         <Accordion.Content active={activeIndex === {index}}>
//           <p>{answer}</p>
//         </Accordion.Content>
//       </Accordion>
//     )
//   }

//   return (
//     <div className="FAQcontainer">
//       <h1 className="FAQtitle">Frequently Asked Qestions</h1>
//       <FAQCard question={this.state.q1.question} answer={this.state.q1.answer} />
//       <FAQCard question={this.state.q2.question} answer={this.state.q2.answer} />
//       <FAQCard question={this.state.q3.question} answer={this.state.q3.answer} />
//       <FAQCard question={this.state.q4.question} answer={this.state.q4.answer} />
//       <FAQCard question={this.state.q5.question} answer={this.state.q5.answer} />
//       <FAQCard question={this.state.q6.question} answer={this.state.q6.answer} />
//   </div>
//     )
//   }
// }

// export default FAQs;





import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import "./FAQs.css"

export default class FAQs extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div className="FAQcontainer">
      <h1 className="FAQtitle">Frequently Asked Questions</h1>
      <div className="FAQcontent">
      <Accordion styled>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          1. Why should I go to therapy?
          </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            You should go to therapy because everyone should go to therapy. Life is hard, and life’s struggles can leave marks on us that continue to hurt us long after they’ve passed. Therapy is a way of prioritizing yourself and your needs, and it’s an active step in the lifelong journey of healing and restoration. There is no shame in loving and caring for yourself and your loved ones.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
          2. What is your fee and what is a sliding scale?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            A sliding scale means that the fee you pay depends on your needs: what sort of services you need, the length of sessions, and, most importantly, what you can afford to pay. My sliding scale is $60-$120, and I will work with you to determine a fee that works best for you while meeting your needs.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          3. What do you mean by free consultation?
          </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            A consultation is not a therapy session! In therapy, a good therapeutic relationship is one of the best predictors for therapeutic success, and the decision of choosing the right therapist is incredibly important. So I offer a free in-person thirty minute consultation for any potential client to decide if I’m what they’re looking for, no (financial or otherwise) strings attached.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          4. Do you take insurance?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
          Unfortunately, at this time, I am not taking insurance.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          5. What makes you qualified to be my therapist?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Good question! I graduated with my Bachelor’s with summa cum laude at UCSD, and worked in the mental health field before receiving my Master’s in Marriage and Family Therapy at SDSU. I have years of experience working in various therapeutic contexts - working with couples, children, families, and individuals dealing with relationship distress, anxiety, depression, grief, addiction, parenting issues, and other various mental health disorders. I am trained in Emotionally Focused Therapy, Cognitive Behavioral Therapy, and Solution Focused Brief Therapy, amongst other modalities. I also offer services in English, Korean, and Spanish. I have many qualifications and trainings that make me an effective therapist, but ultimately, only you can decide if I should have the privilege of being your therapist.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
          6. How often do I have to come to therapy, and for how long?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            Therapy normally consists of weekly sessions, which last between 50-80 minutes. Every client has different individual needs, so we can decide together what would work best for you.
          </p>
        </Accordion.Content>
      </Accordion>
      </div>
    </div>
    )
  }
}