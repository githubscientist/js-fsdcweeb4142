// parent component
import Header from './components/Header';

function App() {

    // 1. create a function in the parent component
    // to receive the data from the child component
    const receiveChildData = (name, age) => {
        console.log(`Hello ${name}! You are ${age} years old!`);
    }

    // 2. pass the function receiveChildData as props
    return (
        <>
            <Header receiveChildData={receiveChildData} />
        </>
    )
}

export default App;