import { useState } from 'react';
import '../css/AllTodosAdd.css';
import '../css/AllTodosDelete.css';
import '../css/TodoForm.css';

function TodoForm({ addNewItem, deleteAllTodos }) {
	let [text, setText] = useState('');

	return (
		<form 
			className='row_space'
			onSubmit={function(event) {
				event.preventDefault();
				addNewItem(text);
				setText('');
			}}
		>
			<input 
				type='text' 
				className='input_space' 
				value={ text }
				onChange={function(event) {
					setText(event.target.value);
				}}
			></input>
			<button className='AllTodosAdd'>Add</button>
			<button onClick={deleteAllTodos} className='AllTodosDelete'>Delete</button>
		</form>
	)
}

export default TodoForm;