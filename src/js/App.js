import { useReducer, useState } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function reducer(state, action) {
	switch(action.type) {
		case 'add': 
			return [
				...state, 
				action.payload
			]
		
		case 'delete_all': 
			return []

		case 'done':
			return [
				...action.payload
			]

		case 'delete_todo': 
			return [
				...action.payload
			]

		case 'search': 
			return [
				...action.payload
			]

			case 'all':
				return [
					...action.payload
				]

			case 'filter_done_todos':
				return [
					...action.payload
				]

			case 'filter_undone_todos':
				return [
					...action.payload
				]
	}

}

function App() {
	const [todos, dispatch] = useReducer(reducer, []);
	const [oldTodods, setOldTodos] = useState([]);

	//for adding new todo
	const addNewItem = (text, setText) => {
		if (text === '') return;

		dispatch({
			type: 'add',
			payload: {
				text,
				id: Math.random(),
				isDone: false,
			}
		})
		
		setOldTodos(todos)
		setText('');
	};

	//for deleting all todos
	const deleteAllTodos = () => {
		dispatch({
			type: 'delete_all',
		})
		setOldTodos([]);
	};

	//for changing todo state into done 
	const doneTodo = (todo) => {
		setOldTodos(todos)
		const updatedTodos = todos.map((item) =>
			item.id === todo.id ? todo : item
		);
		dispatch({
			type: 'done',
			payload: updatedTodos
		})
	};

	//for deleting todo
	const deleteTodo = (todo) => {
		dispatch({
			type: 'delete_todo',
			payload: todos.filter((to) => to.id !== todo.id)
		})
		setOldTodos(todos)
	};

// for searching 
	const handleSearchClick = (text, setText) => {
		const filteredTodos = todos.filter(todo => {
			if(todo.text.toLowerCase().includes(text.toLowerCase())) {
				return todo;
			}
		})
		dispatch({
			type: 'search',
			payload: filteredTodos
		})
		setText('');
	}

	//for returning old state 
	const handleAllClick = () => {
		dispatch({
			type: 'all',
			payload: oldTodods
		})
	}

//for searching done todos 
	const handleDoneClick = () => {
		const doneTodos = todos.filter(todo => {
			return todo.isDone === true;
		})
		dispatch({
			type: 'filter_done_todos',
			payload: doneTodos
		})
	}

//for searching undone todos
	const handleUndoneClick = () => {
		const undoneTodos = todos.filter(todo => {
			return todo.isDone === false;
		})
		dispatch({
			type: 'filter_undone_todos',
			payload: undoneTodos
		})

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
