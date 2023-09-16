import React, {useReducer} from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";


// function for taskReducer
    const taskReducer = (tasks, action) => {
        switch(action.type){
            case 'ADDED': {
                return [...tasks, {
                    id: action.id,
                    text: action.text,
                    done: false
                }];
            }
            case 'CHANGED': {
                return tasks.map(t => {
                    if(t.id === action.task.id){
                        return action.task;
                    }else{
                        return t;
                    }
                });
            }
            case 'DELETED': {
                return tasks.filter(t=> 
                    t.id !== action.id);
            }
            default:{
                throw Error('Unknown action:'+ action.type);
            }
        }
    }

    let nextId = 3;
    const initialState = [
        { id: 0, text: 'Visit Kafka Museam', done: true},
        { id: 1, text: 'watch a puppet show', done: false},
        { id: 2, text: 'Lennon Wall pic ', done: false},
    ];
const TaskApp = () => {
    const [tasks, dispatch] = useReducer(taskReducer, initialState);

    const handleAddTask=(text)=>{
        dispatch({
            type: 'ADDED',
            id: nextId++,
            text: text,
        });
    }

    const handleChangedTask =(task) => {
        dispatch({
            type: 'CHANGED',
            task: task,
        });
    }
    const handleDeletedTask =(taskId) => {
        dispatch({
            type: 'DELETED',
            id: taskId,
        });
    }
    return(
        <div>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangedTask}
                onDeleteTask={handleDeletedTask}
            />
        </div>
    )
}
export default TaskApp;