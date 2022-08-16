import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state);
    // console.log(count)
    const data = useSelector((state) => state);
    // console.log(data)
    const dispatch = useDispatch();
    function cl() {
        dispatch({
            type: "Inc"
        })
    }
    function Ap() {
        dispatch({
            type: 'get'
        })
    }
    return (
        <div>
            {/* {count} */}
            <button onClick={cl}>Inc</button>
            <h1>Kapil</h1>
            <hr></hr>
            <button onClick={Ap}>get</button>
        </div>
    )
}
export default Counter
