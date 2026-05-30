import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import { useDispatch, useSelector } from "react-redux";
import { selectNote, setNote } from "../redux/features/noteSlice";
import noteServices from "../services/noteServices";

const Note = () => {
    const { id } = useParams();
    const note = useSelector(selectNote);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchNote = async () => {
        try {
            const response = await noteServices.getNotesById(id);
            dispatch(setNote(response.data));
        } catch (error) {
            dispatch(setNote(null));
        }
    }

    useEffect(() => {
        fetchNote();
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