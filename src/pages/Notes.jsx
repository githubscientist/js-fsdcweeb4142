import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/noteSlice";

const Notes = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://6a1a6c00bc2f94475492321c.mockapi.io/notes')
      .then(response => {
        dispatch(setNotes(response.data));
      });
  }, []);

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