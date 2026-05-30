import axios from "axios";
import { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  axios
    .get('https://6a1a6c00bc2f94475492321c.mockapi.io/notes')
    .then(response => {
      setNotes(response.data);
    });

  return (
    <div>
      <h3>Notes</h3>
      <ul>
        {
          notes
            .map(note => (
              <li key={note.id}>{ note.description }</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Notes;