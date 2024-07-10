import '../css/TodoList.css';
import TodoDelete from './TodoDelete';
import TodoDone from './TodoDone';

function TodoList({ todos, deleteTodo }) {
	return (
		todos.map(function(todo) {
			return (
				<div className='note' key={ todo.id }>
					<span>{ todo.text }</span>
					<div>
						<TodoDone />
						<TodoDelete todo={ todo } deleteTodo={deleteTodo}/>
					</div>
				</div>
			)
		})
	)
}

export default TodoList;