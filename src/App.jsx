import React, { Component } from 'react';

export class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 0
        }
    }

    handleLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <>
                <h1>Likes: {this.state.likes}</h1>
                <button onClick={this.handleLike}>Like</button>
            </>
        )
    }
}

export default App;