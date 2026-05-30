import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/noteSlice";
import instance from "../instances/instance";
import { Link } from "react-router";

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
              <li key={note.id}>
                <Link to={`/dashboard/notes/${note.id}`}>{note.description}</Link>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Notes;