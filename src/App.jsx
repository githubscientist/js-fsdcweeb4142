import Header from './components/Header';

function App() {
    let name = 'Krish';
    let age = 25;

    return (
        <>
            <Header name={name} age={age} />
        </>
    )
}

export default App;