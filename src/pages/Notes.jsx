import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes, selectLoadingNotes, selectNotes, selectNotesError } from "../redux/features/noteSlice";
import instance from "../instances/instance";
import { Link } from "react-router";
import noteServices from "../services/noteServices";

const Notes = () => {
  const notes = useSelector(selectNotes);
  const loading = useSelector(selectLoadingNotes);
  const error = useSelector(selectNotesError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <div>
      <h3>Notes</h3>
      <ul>
        {
          loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : notes.length === 0 ? (
            <p>No notes found.</p>
              ) : (
                  notes
                  .map(note => (
                    <li key={note.id}>
                      <Link to={`/dashboard/notes/${note.id}`}>{note.description}</Link>
                    </li>
                  ))
                )
        }
      </ul>
    </div>
  )
}

export default Notes;