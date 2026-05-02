import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [fetchData, setFetchData] = useState(0);

  const recipes = [
  ];

  // useEffect without dependency list
  // this runs first time when the component is rendered
  // and every time when the component is re-rendered -> whenever any state changes
  useEffect(() => {
    fetch(`https://69f59849fb098eb7f0b55d6a.mockapi.io/recipes`)
      .then((response) => {
        console.log('fetching recipes...');
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(error => console.log(error));
  })

  return (
    <>
      <h1>Recipes</h1>
      <button onClick={() => setFetchData(fetchData + 1)}>Fetch Data</button>
      <ul>
        {
          recipes
            .map((recipe, index) => {
              return <li key={index}>
                <div className="recipe-card">
                  <header>
                    <h2>{recipe.name}</h2>
                    <span className="material-symbols-outlined"
                      style={{
                        "fontVariationSettings":
                          `'FILL' ${recipe.isFavourite ? 1 : 0},
                        'wght' 400,
                        'GRAD' 0,
                        'opsz' 24`,
                        fontSize: '32px',
                      }}>
                      favorite
                    </span>
                  </header>
                  <hr></hr>
                  <p><strong>Author:</strong> {recipe.author}</p>
                  <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
                  <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                  <p><strong>Ingredients:</strong></p>
                  <ul>
                    {
                      recipe.ingredients.map((ingredient, idx) => {
                        return <li key={idx}>{ingredient}</li>
                      })
                    }
                  </ul>
                </div>
              </li>
            }
            )
        }
      </ul >
    </>
  )
}

export default App;