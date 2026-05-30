import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/noteSlice";
import instance from "../instances/instance";

const Notes = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    instance
      .get('/notes')
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