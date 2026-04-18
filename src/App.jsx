import React from "react";
import Header from "./components/Header";

// class component
class App extends React.Component {
    render() {
        let name = 'Krish';
        let age = 25;

        return (
            <>
                <Header name={name} age={age} />
            </>
        )
    }
}

export default App;