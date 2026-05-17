import { createContext } from "react";
import Child1 from "./components/Child1";

// 1. create a context
export const MessageContext = createContext();

const App = () => {
  // parent component which has the data
  const message = "Hello from App component";

  // 2. Provide the context value to the child components
  return (
    <MessageContext.Provider value={message}>
      <div>
        <Child1 />
      </div>
    </MessageContext.Provider>
  )
}

export default App;