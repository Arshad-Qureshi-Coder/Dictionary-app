import React, {useState} from "react";

const AddTask = ({onAddTask}) =>{
     const [text, setText] = useState('');
    return (
        <>
        <div>
            <input
                type="text"
                placeholder="Add Task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={()=> {
                setText('');
                onAddTask(text);
            }}>Add</button>

        </div>

        </>
    )
}

export default AddTask;