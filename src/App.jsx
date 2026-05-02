import './App.css';

const App = () => {

  const recipes = [
    {
      name: 'Pasta',
      ingredients: ['Pasta', 'Tomato Sauce', 'Cheese'],
      author: 'John Doe',
      cookingTime: '30 minutes',
      difficulty: 'Easy',
      isFavourite: true
    },
    {
      name: 'Chicken Curry',
      ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'],
      author: 'Jane Smith',
      cookingTime: '45 minutes',
      difficulty: 'Medium',
      isFavourite: false
    },
    {
      name: 'Chocolate Cake',
      ingredients: ['Flour', 'Sugar', 'Cocoa Powder', 'Eggs'],
      author: 'Emily Johnson',
      cookingTime: '1 hour',
      difficulty: 'Hard',
      isFavourite: false
    }
  ];

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