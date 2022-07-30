import './Todo.scss';

function Todo({todo, onUpdate, onDelete}){
	const task = todo.task; 
	const id = todo.id;
	const status = todo.status ? 'done' : 'in-progress';

	function changeValue() {
		const newTask = {
			id: id,
			task: task,
			status: !todo.status
		}

		onUpdate(id, newTask);
	}

	return (
		<li className={`todos-item ${status}`}>
			<p className={`todos-item-text ${status}`}>{task}</p>
			<div className="buttons">
				<button onClick={changeValue} className={`btn ${status}`}>Change Status</button>
				<button onClick={() => onDelete(id)} className={`btn ${status}`}>Delete</button>
			</div>
		</li>
	)
}

export default Todo;