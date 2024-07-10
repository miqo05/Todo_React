import { useState } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	const addNewItem = (text) => {
		if (text === '') return;

		setTodos([
			...todos,
			{
				id: Math.random(),
				text: text,
				isDone: false,
			},
		]);
	};

	function deleteAllTodos  () {
		setTodos([]);
	};

	const doneTodo = (todo) => {
		const updatedTodos = todos.map((item) =>
			item.id === todo.id ? todo : item
		);
		setTodos(updatedTodos);
	};

	const deleteTodo = (todo) => {
		setTodos(todos.filter((to) => to.id !== todo.id));
	};

	return (
		<div className='container'>
			<TodoForm addNewItem={addNewItem} deleteAllTodos={deleteAllTodos} />
			<TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
