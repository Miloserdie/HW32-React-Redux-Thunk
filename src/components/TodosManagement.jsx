import TodosList from './todo/TodosList';
import CreateTask from './todo/CreateTask';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTodosReqAction, addTaskReqAction, deleteTaskReqAction, updateTaskReqAction } from '../store/actions';

function TodosManagement() {
	const dispatch = useDispatch(); 

	useEffect(() => {
		dispatch(getTodosReqAction())
	}, []);

	async function deleteTask(id) {
		dispatch(deleteTaskReqAction(id))
	}

	function addTask(task) {
		dispatch(addTaskReqAction(task))
	}

	async function updateTask(id, task) {
		dispatch(updateTaskReqAction(id, task))
	}

	return (
		<>
			<CreateTask onCreate={addTask}></CreateTask>
			<TodosList onUpdate={updateTask} onDelete={deleteTask}></TodosList>
		</>
	)
}

export default TodosManagement;