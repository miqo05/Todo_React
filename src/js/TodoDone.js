import '../css/TodoDone.css';

function TodoDone({ todo, doneTodo }) {
	const onClickDone = () => {
		const newTodo = { ...todo, isDone: !todo.isDone };
		doneTodo(newTodo);
	};

	return (
		<button onClick={onClickDone} className='material-symbols-outlined'>
			{todo.isDone ? 'undo' : 'done'}
		</button>
	);
}

export default TodoDone;
