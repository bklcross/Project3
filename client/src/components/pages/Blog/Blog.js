import React, {Component} from "react"
import "./BlogItems/Blog.css"
import { Button } from 'semantic-ui-react'
import { Row } from '../../Grid/Row';



class Blog extends Component {
  render() {
    return(
     <div>
      <div className="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
        {/* Row and Col are part of the Grid package and the props are "pre-defined". The size prop for the col is similar to if not the same as bootstrap. Style override might require creating a div that nests the row. */}
        <Row>
            <div className="col-md-5" id="thirdBlog">
                <img src="https://images.unsplash.com/photo-1496098868818-75736fc02eeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7812dba20298669a5208331af3bf5c5&auto=format&fit=crop&w=800&q=60" alt="profile pic"></img>
            </div>
        </Row>
        <Row>
            <div className="col-md-8">
            <article>
            <h2><i>Third Freaking Blog!</i></h2>
                <p class="blogText">Self-disclosure is a touchy subject among therapists. Some therapists never self-disclose, while others feel stifled by having a rigid boundary around self-disclosure. As I consider self-disclosure in therapy, 
                  I ask myself, “When is self-disclosure appropriate?” “How does self-disclosure deepen the therapist-client connection?"
                  But, as soon as I ask these questions, I realize that their counterparts should also be asked:  “How do I know if self-disclosure is inappropriate? “How can self-disclosure hinder the therapist-client relationship?”
                  Self-disclosure is complicated.
                <br />
                <br />
                  Recently, I was supervising a group of therapists, and the conversation turned to self-disclosure. It became clear to me that self-disclosure tends to be an all-encompassing term for what is really a nuanced process 
                  of self-revelation that includes degrees. From our group conversation, I was able to identify three separate degrees of self-disclosure:  The normalizing statement, the personal story, and the reactive response.
                <br />
                <br />
                1|  The normalizing statement
                An example of a normalizing statement is when a client tells a story, and the therapist says, “If I were in that situation, I might feel x, y, or z.  Do any of these fit for you?"
                <br />
                <br />
                In this example, the therapist is using personal identification to serve as normalization. The truth is, the “I” isn’t necessary; it could easily be replaced with “most people I know,” or “several clients I’ve worked with.”
                <br />
                <br />
                The purpose of this type of disclosure to to help clients feel supported. As a form of self-disclosure, the normalizing statement is relatively low risk in terms of potential consquences to the client, or the therapeutic relationship.
                <br />
                <br />
                2| The personal story
                Typically, a therapist shares a personal story in order to challenge or validate a client’s’ conclusion, or to expand the client’s perspective. For example, if the client is anxious about requesting a raise at work, the therapist would share a story about when she requested a raise, or one relevant to the client’s anxiety about asking for a raise.
                <br />
                <br />
                The personal story is a common form of self-disclosure. It involves the therapist revealing inconsequential information with a therapeutic purpose. Like the normalizing statement, the personal story is unlikely to be an imposition on the client. The potential exists, however, that the story will not have the same meaning for the client, or that the client will find a point of disagreement with the therapist's interpretation. This could emphasize difference between the therapist and client, or lead the client to challenge the therapist.
                              
                </p>
            </article>
            </div>
        </Row>
        </div>
        <div className="row wow fadeInUp" data-wow-duration="2s" id="introBox" data-wow-delay="0.6s">
        {/* Row and Col are part of the Grid package and the props are "pre-defined". The size prop for the col is similar to if not the same as bootstrap. Style override might require creating a div that nests the row. */}
        <Row>
            <div className="col-md-5" id="secondBlog">
                <img src="https://images.unsplash.com/photo-1519427658477-aaac2cb5d4e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c798109419cbb9a5b46ebc371d7230f4&auto=format&fit=crop&w=800&q=60" alt="profile pic"></img>
            </div>
        </Row>
        <br />
        <br />
        <Row>
            <div className="col-md-8">
            <article>
                <h2><i>Second Blog!</i></h2>
                <p class="blogText">Self-disclosure is a touchy subject among therapists. Some therapists never self-disclose, while others feel stifled by having a rigid boundary around self-disclosure. As I consider self-disclosure in therapy, 
                  I ask myself, “When is self-disclosure appropriate?” “How does self-disclosure deepen the therapist-client connection?"
                  But, as soon as I ask these questions, I realize that their counterparts should also be asked:  “How do I know if self-disclosure is inappropriate? “How can self-disclosure hinder the therapist-client relationship?”
                  Self-disclosure is complicated.
                <br />
                <br />
                  Recently, I was supervising a group of therapists, and the conversation turned to self-disclosure. It became clear to me that self-disclosure tends to be an all-encompassing term for what is really a nuanced process 
                  of self-revelation that includes degrees. From our group conversation, I was able to identify three separate degrees of self-disclosure:  The normalizing statement, the personal story, and the reactive response.
                <br />
                <br />
                1|  The normalizing statement
                An example of a normalizing statement is when a client tells a story, and the therapist says, “If I were in that situation, I might feel x, y, or z.  Do any of these fit for you?"
                <br />
                <br />
                In this example, the therapist is using personal identification to serve as normalization. The truth is, the “I” isn’t necessary; it could easily be replaced with “most people I know,” or “several clients I’ve worked with.”
                <br />
                <br />
                The purpose of this type of disclosure to to help clients feel supported. As a form of self-disclosure, the normalizing statement is relatively low risk in terms of potential consquences to the client, or the therapeutic relationship.
                <br />
                <br />
                2| The personal story
                Typically, a therapist shares a personal story in order to challenge or validate a client’s’ conclusion, or to expand the client’s perspective. For example, if the client is anxious about requesting a raise at work, the therapist would share a story about when she requested a raise, or one relevant to the client’s anxiety about asking for a raise.
                <br />
                <br />
                The personal story is a common form of self-disclosure. It involves the therapist revealing inconsequential information with a therapeutic purpose. Like the normalizing statement, the personal story is unlikely to be an imposition on the client. The potential exists, however, that the story will not have the same meaning for the client, or that the client will find a point of disagreement with the therapist's interpretation. This could emphasize difference between the therapist and client, or lead the client to challenge the therapist.
                              
                </p>
            </article>
            </div>
        </Row>
      </div>
      <div className="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
        {/* Row and Col are part of the Grid package and the props are "pre-defined". The size prop for the col is similar to if not the same as bootstrap. Style override might require creating a div that nests the row. */}
        <Row>
            <div className="col-md-5" id="firstBlog">
                <img src="https://images.unsplash.com/photo-1522093243371-296c79a66df4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5df6bb1f7e73b7621f64a4da294fea0&auto=format&fit=crop&w=800&q=60" alt="profile pic"></img>
            </div>
        </Row>
        <br />
        <br />
        <Row>
            <div className="col-md-8">
            <article>
                <h2><i>First Blog!</i></h2>
                <p class="blogText">Self-disclosure is a touchy subject among therapists. Some therapists never self-disclose, while others feel stifled by having a rigid boundary around self-disclosure. As I consider self-disclosure in therapy, 
                  I ask myself, “When is self-disclosure appropriate?” “How does self-disclosure deepen the therapist-client connection?"
                  But, as soon as I ask these questions, I realize that their counterparts should also be asked:  “How do I know if self-disclosure is inappropriate? “How can self-disclosure hinder the therapist-client relationship?”
                  Self-disclosure is complicated.
                <br />
                <br />
                  Recently, I was supervising a group of therapists, and the conversation turned to self-disclosure. It became clear to me that self-disclosure tends to be an all-encompassing term for what is really a nuanced process 
                  of self-revelation that includes degrees. From our group conversation, I was able to identify three separate degrees of self-disclosure:  The normalizing statement, the personal story, and the reactive response.
                <br />
                <br />
                1|  The normalizing statement
                An example of a normalizing statement is when a client tells a story, and the therapist says, “If I were in that situation, I might feel x, y, or z.  Do any of these fit for you?"
                <br />
                <br />
                In this example, the therapist is using personal identification to serve as normalization. The truth is, the “I” isn’t necessary; it could easily be replaced with “most people I know,” or “several clients I’ve worked with.”
                <br />
                <br />
                The purpose of this type of disclosure to to help clients feel supported. As a form of self-disclosure, the normalizing statement is relatively low risk in terms of potential consquences to the client, or the therapeutic relationship.
                <br />
                <br />
                2| The personal story
                Typically, a therapist shares a personal story in order to challenge or validate a client’s’ conclusion, or to expand the client’s perspective. For example, if the client is anxious about requesting a raise at work, the therapist would share a story about when she requested a raise, or one relevant to the client’s anxiety about asking for a raise.
                <br />
                <br />
                The personal story is a common form of self-disclosure. It involves the therapist revealing inconsequential information with a therapeutic purpose. Like the normalizing statement, the personal story is unlikely to be an imposition on the client. The potential exists, however, that the story will not have the same meaning for the client, or that the client will find a point of disagreement with the therapist's interpretation. This could emphasize difference between the therapist and client, or lead the client to challenge the therapist.
                              
                </p>
            </article>
            <br />
            <br />
            </div>
        </Row>
      </div>
    </div> 
    )
  }
}


export default Blog;