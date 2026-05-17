import Child3 from "./Child3";

const Child2 = ({ message }) => {
    return (
        <div>
            <Child3
                message={message}
            />
        </div>
    )
}

export default Child2;