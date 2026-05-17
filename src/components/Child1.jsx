import Child2 from "./Child2";

const Child1 = ({ message }) => {
    return (
        <div>
            <Child2
                message={message}
            />
        </div>
    )
}

export default Child1;