import { useState } from 'react';
import '../css/App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function App() {
	const [todos, setTodos] = useState([])

	return (
		<div className='container'>
			<TodoForm 
				addNewItem={function(text) {
					if(text === '') return;

					setTodos([
						...todos,
						{
							id: Math.random(),
							text: text,
						}
					])
				}}

				DeleteAllTodos={function() {
					setTodos([]);
				}}
			/>
			<TodoList 
				todos={ todos }

				deleteTodo={function(todo) {
					setTodos(todos.filter(function(to) {
						return to.id !== todo.id;
					}))
				}}
			/>
		</div>
	)
}

export default App;