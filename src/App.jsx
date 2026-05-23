import { DragDropProvider } from '@dnd-kit/react';
import { useState } from 'react';
import SortableItem from './SortableItem';
import { isSortable } from '@dnd-kit/react/sortable';
import { useEffect } from 'react';

const App = () => {

  const [newFruit, setNewFruit] = useState('');

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');

    // parse the saved items from string to js object
    if (savedItems) {
      return JSON.parse(savedItems);
    }

    // default items
    return [];
  });

  useEffect(() => {
    // save the items to local storage whenever they change
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItem = (event) => {
    event.preventDefault();

    if (newFruit.trim() === '') return;

    // calcualte a new id for the item
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;

    // create a new item object
    const newItem = {
      id: newId,
      content: newFruit.trim()
    };

    setItems((items) => [...items, newItem]);

    setNewFruit('');
  }
  
  return (
    <div>
      <h1>Fruits</h1>

      <DragDropProvider
        onDragEnd={
          (event) => {
            if (event.canceled) return;

            const { source } = event.operation;

            if (isSortable(source)) {
              const { initialIndex, index } = source;

              if (initialIndex !== index) {
                setItems((items) => {
                  const newItems = [...items];

                  const [removed] = newItems.splice(initialIndex, 1);
                  newItems.splice(index, 0, removed);

                  return newItems;
                })
              }
            }
          }
        }
      >
        <ul>
          {
            items.map((item, index) => (
              <SortableItem
                key={item.id}
                id={item.id}
                index={ index }
              >
                {item.content}
              </SortableItem>
            ))
          }
        </ul>
      </DragDropProvider>

      <form
        style={{ marginTop: "16px", marginLeft: "42px" }}
        onSubmit={ handleAddItem}
      >
        <input
          placeholder='Add a fruit'
          style={{ padding: "8px", marginRight: "8px" }}
          value={newFruit}
          onChange={(event) => setNewFruit(event.target.value)}
        />
        <button type='submit' style={{ padding: "8px" }}
        >Add</button>
      </form>
    </div>
  )
}

export default App;