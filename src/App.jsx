import React, { Component } from 'react'
import { GrLike, GrDislike } from "react-icons/gr";

export class App extends Component {

  state = {
    likes: 0,
    dislikes: 0
  }

  handleLike = () => {
    this.setState({
      ...this.state,
      likes: this.state.likes + 1
    })
  }

  handleDislike = () => {
    this.setState({
      ...this.state,
      dislikes: this.state.dislikes + 1
    })
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleLike}
        >
          <GrLike
            style={{
              color: "black",
              fontSize: "30px",
              padding: "5px"
            }}
          />
          {this.state.likes}
        </button>
        &nbsp;
        <button
          onClick={this.handleDislike}
        >
          <GrDislike
            style={{
              color: "black",
              fontSize: "30px",
              padding: "5px"
            }}
          />
          {this.state.dislikes}
        </button>
      </>
    )
  }
}

export default App;