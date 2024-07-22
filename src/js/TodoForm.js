import { useState } from 'react';
import '../css/SearchButtons.css';
import '../css/TodoForm.css';

function TodoForm({ 
	addNewItem, 
	deleteAllTodos, 
	handleSearchClick, 
	handleAllClick, 
	handleDoneClick,
	handleUndoneClick}) {
	let [text, setText] = useState('');

	return (

<div className='row_space'>

	<input 
		type='text' 
		className='input_space' 
		value={ text }
		placeholder='Input yor text...'

		onChange={function(event) {
			setText(event.target.value);
		}}
		
		onKeyPress={(event) => {
			if(event.key === 'Enter') {
				addNewItem(text, setText)
			}
		}}
	></input>

	<div className='ButtonsSpace'>
		{/* button for adding new todo */}
		<button 
			onClick={() => addNewItem(text, setText)} 
			className='AllTodosAdd'
		>
			Add
		</button>

		{/* button for deleting todo list */}
		<button 
			onClick={deleteAllTodos} 
			className='AllTodosDelete'
		>
			Delete
		</button>

		{/* button for searching */}
		<button 
			className='todosSearch'
			onClick={() => handleSearchClick(text, setText)}
		>
			Search
		</button>

		{/* button for returnin into old state */}
		<button 
			className='todosUndo'
			onClick={handleAllClick}
		>
			All
		</button>

		{/* button for searching done todos */}
		<button 
			className='todosDone'
			onClick={() => handleDoneClick(setText)}
		>
			Done
		</button>

		{/* button for searching undone todos */}
		<button 
			className='todosUndone'
			onClick={() => handleUndoneClick(setText)}
		>
			Undone
		</button>
	</div>
</div>
	)
}

export default TodoForm;