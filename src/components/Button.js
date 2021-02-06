const Button = ({ type, content, onDeleteCompleted }) => {
  return (
    <button className={type} onClick={onDeleteCompleted}>
      {content}
    </button>
  );
}

export default Button;