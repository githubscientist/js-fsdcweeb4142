import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import { useDispatch, useSelector } from "react-redux";
import { selectNote, setNote } from "../redux/features/noteSlice";

const Note = () => {
    const { id } = useParams();
    const note = useSelector(selectNote);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        instance
            .get(`/notes/${id}`)
            .then(response => dispatch(setNote(response.data)));
    }, []);

  return (
      <div>
          <p>{note?.description}</p>
          <p><strong>CreatedAt:</strong> {note?.createdAt}</p>
          <button onClick={() => navigate(-1)}>
              Back to All Notes
          </button>
    </div>
  )
}

export default Note;