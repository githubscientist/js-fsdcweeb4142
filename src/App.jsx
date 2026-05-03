import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./components/Todo";

const App = () => {

  const [todos, setTodos] = useState([]);

  // 3. with dependencies list
  useEffect(() => {
    // runs when the component is rendered for the first time alone.
    axios.get(`https://69f6d332a72f01a951b98c80.mockapi.io/todos`)
      .then(response => setTodos(response.data));
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {
          todos
            .map(todo => {
              return <Todo
                key={todo.id}
                todo={todo}
              />
            })
        }
      </ul>
    </>
  )
}

export default App;