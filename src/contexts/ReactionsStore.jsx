import { createContext, useReducer, useState } from "react";

const reducer = (state, action) => {
  // the current state is in -> state
  // has to return the new state
  if (action.type === 'LIKE') {
    // we know that the like button is clicked
    // so we want to increase the current state by 1 and return it
    return state + 1;
  }
}

// create a context
export const ReactionsContext = createContext();

const ReactionsStore = ({ children }) => {
  const [likes, setLikes] = useReducer(reducer, 0);
  
  const [user, setUser] = useState({
    name: "Sathish",
    isLoggedIn: true
  });

  return (
    <ReactionsContext.Provider value={{ likes, setLikes, user, setUser }}>
        {children}
    </ReactionsContext.Provider>
  )
}

export default ReactionsStore;