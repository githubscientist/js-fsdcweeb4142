import { useDispatch, useSelector } from "react-redux";
import { selectLikes, setLikes } from "./redux/features/reactionSlice";

const App = () => {

  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const handleLikes = () => {
    dispatch(setLikes());
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLikes}>Like</button>
    </div>
  )
}

export default App;