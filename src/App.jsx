import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  const [recipes, setRecipes] = useState([]);

  // useEffect with a dependency list
  // runs first time when the component is rendered
  // and will not run during re-rendering of the component
  useEffect(() => {
    axios.get(`https://69f59849fb098eb7f0b55d6a.mockapi.io/recipes`)
      .then((data) => {
        setRecipes(data.data);
      })
      .catch(error => console.log(error));
  }, []);

  console.log(recipes);

  return (
    <>
      <h1>Recipes</h1>
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