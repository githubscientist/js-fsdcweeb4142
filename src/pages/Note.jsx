import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import instance from "../instances/instance";
import { useDispatch, useSelector } from "react-redux";

const Note = () => {
    const { id } = useParams();

    const fetchNote = async () => {
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        
    }, []);

  return (
      <div>
          
    </div>
  )
}

export default Note;