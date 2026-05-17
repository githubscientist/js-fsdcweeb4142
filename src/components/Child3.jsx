import { useContext } from "react";
import { MessageContext } from "../App";

const Child3 = () => {
    // Child3 component which needs the data from App component
    const message = useContext(MessageContext);
    console.log(message);

    return (
        <div>Child3</div>
    )
}

export default Child3;