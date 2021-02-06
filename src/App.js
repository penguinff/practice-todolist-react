import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ChooseList from './components/ChooseList';
import Button from './components/Button';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const initialTask = JSON.parse(localStorage.getItem('storedTasks')) || [];
  const [tasks, setTasks] = useState(initialTask);
  const [list, setList] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, 
      {
        id: `${new Date().getTime()}`,
        content: newTask,
        completed: false
      }
    ])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  }

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  }

  useEffect(() => {
    localStorage.setItem('storedTasks', JSON.stringify(tasks));
  }, [tasks])

  const selectList = (choseList) => {
    setList(choseList);
  }

  return (
    <div>
      <div className="form-and-list">
        <Header />
        <AddTodo onAdd={addTask}/>
      </div>
      <div className='select-and-remove'>
        <ChooseList onSelect={selectList}/>
        <Button 
          type='remove-btn' 
          content='Remove all completed todos'
          onDeleteCompleted={deleteCompletedTasks}
        />
      </div>
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleComplete}
          list={list}
        />
    </div>
  );
}

export default App;
