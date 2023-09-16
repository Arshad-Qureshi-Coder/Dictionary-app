import React,{useReducer} from "react";


const Reducer = (state, action)=>{
    if (action.type === 'INCR') {
        state = state+1;
    }
    if (state > 0 && action.type === 'DECR') {
        state = state-1;
    }
    return state;

}

const UseReducer = () =>{
    const initialState = 0;
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <>
        <div>
            <h1>{state}</h1>
            <div>
                <button onClick={()=> dispatch({type: 'INCR'})}>+</button>
                <button onClick={()=> dispatch({type: 'DECR'})}>-</button>
            </div>
        </div>
        
        </>
    )
}

export default UseReducer;