import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import Pokeball from "../pokeball.png";

class Home extends Component {
  //   state = {
  //     posts: [],
  //   };
  //   componentDidMount() {
  //     axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //       //   console.log(response.data);
  //       this.setState({
  //         posts: response.data.slice(0, 10),
  //       });
  //     });
  //   }

  //   componentDidUpdate() {
  //     console.log(this.state.posts);
  //   }

  render() {
    // console.log(this.props);
    // const { posts } = this.state;
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map((post, index) => {
        return (
          <div
            onClick={() => {
              this.props.handleId(post.id);
            }}
            className="post card"
            key={post.id + index}
          >
            <img src={Pokeball} alt="A pokeball" />
            <div className="card-content">
              <Link to={"/posts/" + post.id}>
                {/* <Link to={"/" + post.id}> */}
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts available</div>
    );

    return (
      <div className="container home">
        <h4 className="center blue-text">Home</h4>
        {postsList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);
