import '../css/TodoDelete.css';

function TodoDelete({ todo, deleteTodo }) {
	return (
		<button 
			className='material-symbols-outlined'
			onClick={function() {
				deleteTodo(todo);
			}}
		>delete</button>
	)
}

export default TodoDelete;