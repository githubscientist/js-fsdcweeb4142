function Header(props){

    return (
        <>
            <h1>Hello { props.name  }! You are { props.age } years old!</h1>
        </>
    )
}

export default Header;