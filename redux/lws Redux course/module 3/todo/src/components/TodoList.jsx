import Todo from "./Todo";
import {useSelector} from 'react-redux'

const TodoList = () => {
	const todos = useSelector(state=>state.todos);
	const filters = useSelector(state=>state.filters);
	const filterByStatus = (todo)=>{
		const {status} =filters;
		switch(status){
			case 'Complete':
				return todo.completed;
			case 'Incomplete':
				return !todo.completed;
			default:
				return true	;	
		}
	}
	const filterByColor=(todo)=>{
		const {colors}= filters;
		if(colors.length>0){
			return colors.includes(todo?.color)
		}
		return true
	}

	return (
		<>
			{/* <!-- todo list --> */}
			<div
                    className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
                >
                    {todos
					.filter(filterByStatus)
					.filter(filterByColor)
					.map(todo=><Todo todo={todo} key={todo.id} />)}
                </div>
		</>
	);
}

export default TodoList;
