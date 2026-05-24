import { useContext } from "react";
import { ReactionsContext } from "./contexts/ReactionsStore";

const App = () => {

  // use the context to get the state and dispatch function
  const { likes, setLikes } = useContext(ReactionsContext);

  const { user, setUser } = useContext(ReactionsContext);

  console.log(user);

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={() => setLikes({ 
        type: "LIKE"
      })}>Like</button>
    </div>
  )
}

export default App;