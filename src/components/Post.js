import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { redirect } from "react-router";
import withRouter from "../hoc/withRouter";
import Pokeball from "../pokeball.png";

class Post extends Component {
  // state = {
  //   // id: null,
  //   post: null,
  // };
  // componentDidMount() {
  //   const { post_id } = this.props.params;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + post_id)
  //     .then((response) => {
  //       this.setState({ post: response.data });
  //       console.log(response);
  //     });
  // this.setState({ id: post_id });
  // identify what the route param is from the component
  // console.log(this.props);
  // console.log(post_id);
  // }

  // handleClick = () => {
  //   this.props.deletePost(this.props.post.id);
  // };

  render() {
    console.log(redirect);
    console.log(this.props);
    // const post = this.state.post ? (
    const post = this.props.post ? (
      <div style={{ marginTop: "50px" }} className="post card">
        <img src={Pokeball} alt="A pokeball" />
        <div className="card-content">
          <h4 className="center red-text">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button
              className="btn grey delete"
              onClick={() => {
                this.props.deletePost(this.props.id);
              }}
            >
              Delete Post
            </button>
          </div>
          {/* <h4 className="center red-text">{this.state.post.title}</h4>
          <p>{this.state.post.body}</p> */}
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container home">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps, "ownProps");
  const id = ownProps.id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({ type: "DELETE_POST", payload: id }),
  };
};

// export default connect(mapStateToProps)(Post);
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
