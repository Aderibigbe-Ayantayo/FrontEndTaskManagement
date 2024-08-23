
import React from 'react';
import TaskForm from './TaskForm';
import './TaskItem.css';

function TaskItem({ task, isEditing, onEdit, onDelete, onSave }) {
    console.error('Task in TaskItem:', task);

    if (!task) {
        console.error('Task prop is missing or undefined');
        return null;
    }

    console.log('Rendering TaskItem with task:', task);

    return (
        <li className="task-item">
            {isEditing ? (
                <TaskForm taskId={task._id} onSave={onSave} />
            ) : (
                <>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                    <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
                    <p>Priority: {task.priority}</p>
                    <button onClick={() => onEdit(task._id)}>Edit</button>
                    <button onClick={() => onDelete(task._id)}>Delete</button>
                </>
            )}
        </li>
    );
}

export default TaskItem;




// import React from 'react';
// import TaskForm from './TaskForm';
// import './TaskItem.css';

// function TaskItem({ task, isEditing, onEdit, onDelete, onSave }) {
//     console.error('Task in TaskItem:', task); // Log the task prop received

//     if (!task) {
//         console.error('Task prop is missing or undefined');
//         return null;
//     }

//     return (
//         <li className="task-item">
//             {isEditing ? (
//                 <TaskForm taskId={task._id} onSave={onSave} />
//             ) : (
//                 <>
//                     <h2>{task.title}</h2>
//                     <p>{task.description}</p>
//                     <p>Status: {task.status}</p>
//                     <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
//                     <p>Priority: {task.priority}</p>
//                     <button onClick={() => onEdit(task._id)}>Edit</button>
//                     <button onClick={() => onDelete(task._id)}>Delete</button>
//                 </>
//             )}
//         </li>
//     );
// }

// export default TaskItem;








// import React from 'react';
// import TaskForm from './TaskForm';
// import './TaskItem.css';

// function TaskItem({ task, isEditing, onEdit, onDelete, onSave }) {
//     console.error(task);
//     if (!task) {
//         console.error('Task prop is missing or undefined');
//         return null;
//     }

//     return (
//         <li className="task-item">
//             {isEditing ? (
//                 <TaskForm taskId={task._id} onSave={onSave} />
//             ) : (
//                 <>
//                     <h2>{task.title}</h2>
//                     <p>{task.description}</p>
//                     <p>Status: {task.status}</p>
//                     <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
//                     <p>Priority: {task.priority}</p>
//                     <button onClick={() => onEdit(task._id)}>Edit</button>
//                     <button onClick={() => onDelete(task._id)}>Delete</button>
//                 </>
//             )}
//         </li>
//     );
// }

// export default TaskItem;
