import { FaCheckCircle, FaUndoAlt, FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className='list-item-content'>
        {task.content}
      </div>
      <div className='list-item-btn'>
        <button className='check-btn' onClick={() => onToggle(task.id)}>
          {task.completed ?
            <FaUndoAlt className='fas' /> : <FaCheckCircle className='fas' />
          } 
        </button>
        <button className='trash-btn' onClick={() => onDelete(task.id)}>
          <FaTrashAlt className='fas' />
        </button>
      </div>
    </li>
  );
}

export default Task;