import React from "react";

class Header extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <h1>Hello { this.props.name }! You are { this.props.age } years old!</h1>
            </>
        )
    }
}

export default Header;