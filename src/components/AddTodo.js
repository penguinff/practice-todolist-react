import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const AddTodo = ({ onAdd }) => {
  const [todo, setTodo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      onAdd(todo);
      setTodo('');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type='text' 
        id='todo' 
        placeholder='What to do?' 
        className='todo-input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>
        <FaPlusCircle className='fas' />
      </button>
    </form>
  );
}

export default AddTodo;