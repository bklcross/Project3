import React, {Component} from "react"
import "./BlogItems/Blog.css"
import { Button } from 'semantic-ui-react'



class Blog extends Component {
  render() { 
    return (
      <div>
        <h1>Jessica's Blog Posts</h1>

        <form className="textarea">
          <textarea></textarea>
        </form>

        <div>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>

      </div>
    )
  }
}

export default Blog;