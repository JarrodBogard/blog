import axios from "axios";
import React, { Component } from "react";
import withRouter from "../hoc/withRouter";
import Pokeball from "../pokeball.png";

class Post extends Component {
  state = {
    // id: null,
    post: null,
  };
  componentDidMount() {
    const { post_id } = this.props.params;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + post_id)
      .then((response) => {
        this.setState({ post: response.data });
        console.log(response);
      });
    // this.setState({ id: post_id });
    // identify what the route param is from the component
    // console.log(this.props);
    // console.log(post_id);
  }
  render() {
    const post = this.state.post ? (
      <div style={{ marginTop: "50px" }} className="post card">
        <img src={Pokeball} alt="A pokeball" />
        <div className="card-content">
          <h4 className="center red-text">{this.state.post.title}</h4>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container home">{post}</div>;
  }
}

export default withRouter(Post);
