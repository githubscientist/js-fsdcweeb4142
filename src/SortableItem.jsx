import { useSortable} from '@dnd-kit/react/sortable';

const SortableItem = ({ id, index, children }) => {
    const { ref } = useSortable({
        id, index
    });

  return (
      <li
          ref={ref}
          style={{
              listStyle: 'none',
              padding: "12px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: "white",
              cursor: "grab"
          }}
      >
          { children }
    </li>
  )
}

export default SortableItem;