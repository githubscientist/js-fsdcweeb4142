import { useDispatch, useSelector } from "react-redux";
import { selectLikes, setDislikes, setLikes } from "./redux/features/reactionSlice";

const App = () => {

  const likes = useSelector(selectLikes);
  const dispatch = useDispatch();

  const handleLikes = () => {
    dispatch(setLikes());
  }

  const handleDislikes = () => {
    dispatch(setDislikes());
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLikes}>Like</button> &nbsp;
      <button onClick={handleDislikes}>Dislike</button>
    </div>
  )
}

export default App;