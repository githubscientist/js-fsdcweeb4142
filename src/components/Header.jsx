// child component

// 3. receive the function from parent as props
function Header(props){
    let name = 'Krish';
    let age = 25;

    // 4. execute the function from child component
    // 5. also, we can pass the data to the function in the parent component
    props.receiveChildData(name, age);

    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}

export default Header;