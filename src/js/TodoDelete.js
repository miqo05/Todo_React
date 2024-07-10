import '../css/TodoDelete.css';

function TodoDelete({ todo, deleteTodo }) {
	return (
		<button
			className='material-symbols-outlined'
			onClick={() => deleteTodo(todo)}
		>
			delete
		</button>
	);
}

export default TodoDelete;
