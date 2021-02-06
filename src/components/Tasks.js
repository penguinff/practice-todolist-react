import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle, list }) => {
  const completedTasks = tasks.filter((task) => task.completed);
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  let displayList = [];

  switch (list) {
    case 'completed':
      displayList = completedTasks;
      break;
    case 'uncompleted':
      displayList = uncompletedTasks;
      break;
    default:
      displayList = tasks;
  }

  return (
    <ul className='todo-list'>
      {
        displayList.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onToggle={onToggle} 
          />
        ))
      }
    </ul>
  )
};

export default Tasks;