import { useState } from "react";
import './CreateTask.scss'

function CreateTask({onCreate}) {
	const [inputValue, setInputValue] = useState('');

	function changeValue(e) {
		setInputValue(e.target.value);
	}

	function createTask(e) {
		e.preventDefault()

		const task = {
			id: Math.random().toString(36).substring(2, 9),
			task: inputValue,
			status: false
		}

		onCreate(task);

		setInputValue('');
	}
	
	return(
		<>
			<form className="task-form" action="">
				<input onChange={changeValue} className="task-input" type="text" value={inputValue}/>
				<button onClick={createTask} className="task-btn btn">Add Task</button>
			</form>
		</>
	)
}

export default CreateTask;