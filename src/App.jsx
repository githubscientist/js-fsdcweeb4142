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

  // const list = [<li>Biryani</li>];

  const list = [];

  recipes.forEach(recipe => {
    list.push(
      <li>{recipe}</li>
    )
  });

  console.log(list);

  return (
    <>
      <h1>Recipes</h1>
      <ul>
        {list}
      </ul>
    </>
  )
}

export default App;