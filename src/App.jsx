import { DragDropProvider } from '@dnd-kit/react';
import { useState } from 'react';
import SortableItem from './SortableItem';
import { isSortable } from '@dnd-kit/react/sortable';

const App = () => {

  const [items, setItems] = useState([
    { id: 1, content: 'Apple' },
    { id: 2, content: 'Banana' },
    { id: 3, content: 'Cherry' },
    { id: 4, content: 'Orange' },
    { id: 5, content: 'Grapes' },
  ]);
  
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
    </div>
  )
}

export default App;