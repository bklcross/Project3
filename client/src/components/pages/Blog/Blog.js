import React, {Component} from "react"
import BlogImg from "./BlogItems/BlogImg"
// import BlogTitle from "./BlogItems/BlogTitle"
import BlogText from "./BlogItems/BlogText"


class Blog extends Component {
  render() { 
    return (
      <div>
        {/* <BlogTitle/> */}
        <BlogImg/>
        <BlogText/>
      </div>
    )
  }
}

export default Blog;