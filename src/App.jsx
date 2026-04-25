// updating a normal variable does not cause re-rendering of the component
// re-rendering means that the component will be re-evaluated and the UI will be updated with the new values

const App = () => {
  let likes = 0;

  const likeHandler = () => {
    // update the likes variable
    likes++; // or likes = likes + 1;
    console.log(likes); // this will log the updated value of likes
  };

  // when the like button is clicked, it will call likeHandler function
  return (
    <>
      <h1>Likes: {likes}</h1>
      <button onClick={likeHandler}>Like</button>
    </>
  )
}

export default App;