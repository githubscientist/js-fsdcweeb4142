import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotes, setNotes } from "../redux/features/noteSlice";
import instance from "../instances/instance";
import { Link } from "react-router";
import noteServices from "../services/noteServices";

const Notes = () => {
  const notes = useSelector(selectNotes);
  const dispatch = useDispatch();

  const fetchNotes = async () => {
    try {
      const response = await noteServices.getNotes();
      dispatch(setNotes(response.data));
    } catch (error) {
      dispatch(setNotes([]));
    }
  }

  useEffect(() => {
    fetchNotes();
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