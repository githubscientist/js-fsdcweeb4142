import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import { useDispatch, useSelector } from "react-redux";
import { fetchNoteByID, selectLoadingNote, selectNote, selectNoteError } from "../redux/features/noteSlice";

const Note = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // get the states via selectors
  const note = useSelector(selectNote);
  const loading = useSelector(selectLoadingNote);
  const error = useSelector(selectNoteError);

  const navigate = useNavigate();

    useEffect(() => {
      if (id) dispatch(fetchNoteByID(id));
    }, [dispatch, id]);

  return (
    <div>
        {
          loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : note ? (
              <div>
                {note.description}
                <p>Created At: {note.createdAt}</p>
                <button onClick={() => navigate(-1)}>Back to <strong>All Notes</strong></button>
              </div>
            ) : (<p>No note found</p>
          )
        }
    </div>
  )
}

export default Note;