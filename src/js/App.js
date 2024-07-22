import { useState } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
	const [todos, setTodos] = useState([]);
	const [oldTodods, setOldTodos] = useState([]);

	//for adding new todo
	const addNewItem = (text, setText) => {
		if (text === '') return;

		setTodos([
			...todos,
			{
				id: Math.random(),
				text: text,
				isDone: false,
			},
		]);
		
		setOldTodos(todos)
		setText('');
	};

	//for deleting all todos
	const deleteAllTodos = () => {
		setTodos([]);
		setOldTodos([]);
	};

	//for changing todo state into done 
	const doneTodo = (todo) => {
		setOldTodos(todos)
		const updatedTodos = todos.map((item) =>
			item.id === todo.id ? todo : item
		);
		setTodos(updatedTodos);
	};

	//for deleting todo
	const deleteTodo = (todo) => {
		setTodos(todos.filter((to) => to.id !== todo.id));
		setOldTodos(todos)
	};

	//for searching 
	const handleSearchClick = (text, setText) => {
		setOldTodos([...todos]);
		const filteredTodos = todos.filter(todo => {
			if(todo.text.toLowerCase().includes(text.toLowerCase())) {
				return todo;
			}
		})
		setTodos(filteredTodos);
		setText('');
	}

	//for returning old state 
	const handleAllClick = () => {
		setTodos([...oldTodods]);
	}

	//for searching done todos 
	const handleDoneClick = () => {
		setOldTodos([...todos]);
		const doneTodos = todos.filter(todo => {
			return todo.isDone === true;
		})
		setTodos([...doneTodos]);
	}

	//for searching undone todos
	const handleUndoneClick = () => {
		setOldTodos([...todos]);
		const undoneTodos = todos.filter(todo => {
			return todo.isDone === false;
		})
		setTodos([...undoneTodos]);
	}

	return (
		<div className='container'>
			<TodoForm 
				addNewItem={addNewItem} 
				deleteAllTodos={deleteAllTodos} 
				handleSearchClick ={handleSearchClick}
				handleAllClick ={handleAllClick} 
				handleDoneClick={handleDoneClick}
				handleUndoneClick={handleUndoneClick}
				/>

			<TodoList todos={todos} doneTodo={doneTodo} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
