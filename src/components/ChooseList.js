// import { useState } from 'react';

const ChooseList = ( {onSelect} ) => {
  // const [list, setList] = useState('All');

  return (
    <select 
      name='choose-list' 
      className='choose-list' 
      // value={e.target.value} 
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value='all'>All</option>
      <option value='uncompleted'>Uncompleted</option>
      <option value='completed'>Completed</option>
    </select>
  );
}

export default ChooseList;