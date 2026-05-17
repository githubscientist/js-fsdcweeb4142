import Child1 from "./components/Child1";

const App = () => {
  // parent component which has the data
  const message = "Hello from App component";

  return (
    <div>
      <Child1
        message={message}
      />
    </div>
  )
}

export default App;