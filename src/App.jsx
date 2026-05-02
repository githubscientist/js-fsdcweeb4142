const App = () => {

  const recipes = [
    'Biryani',
    'Pulao',
    'Fried Rice',
    'Noodles',
    'Pasta',
    'Pizza',
    'Burger',
    'Sandwich',
    'Salad',
    'Soup'
  ];

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {
          recipes
            .map((recipe, index) => {
              return <li key={index}>{recipe}</li>
            }
            )
        }
      </ul>
    </>
  )
}

export default App;