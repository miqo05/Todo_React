import '../css/TodoList.css';
import TodoDelete from './TodoDelete';
import TodoDone from './TodoDone';

function TodoList({ todos, deleteTodo, doneTodo }) {
	return (
		todos.map(todo => {
			return (
        <div
          className={`note ${todo.isDone ? 'note-done' : 'note-notDone'}`}
          key={todo.id}
        >
          <span>{todo.text}</span>
          <div>
            <TodoDone
              todo={todo}
              doneTodo={todo => {
                doneTodo(todo);
              }}
            />
            <TodoDelete todo={todo} deleteTodo={deleteTodo} />
          </div>
        </div>
      );
		})
	)
}

export default TodoList;
