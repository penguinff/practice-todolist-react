const ChooseList = ( {onSelect} ) => {

  return (
    <select 
      name='choose-list' 
      className='choose-list' 
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value='all'>All</option>
      <option value='uncompleted'>Uncompleted</option>
      <option value='completed'>Completed</option>
    </select>
  );
}

export default ChooseList;