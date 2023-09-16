import React, {useState} from "react";

export default function TaskList ({
    tasks, onChangeTask, onDeleteTask
}){
    return (
        <div>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <Task
                            task= {task}
                            onChanged={onChangeTask}
                            onDeleted={onDeleteTask}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


const Task = ({
    task, onChanged, onDeleted
}) => {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;

    if(isEditing) {
        taskContent = (
            <>
                <input
                    value = {task.text}
                    onChange={e => {
                        onChanged({
                            ...task, text: e.target.value
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)
                }>Save</button>
            </>
        );
    }else{
        taskContent=(
            <>
            {task.text}
            <button onClick={()=> setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={task.done}
                onChange={e=>{
                    onChanged({
                        ...task, done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button onClick={() => 
            onDeleted(task.id)}>Delete</button>
        </label>
    )
}