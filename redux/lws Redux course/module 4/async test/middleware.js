const delayAction = (store)=>(next)=>(action)=>{
	if(action.type === 'todo/todoAdded'){
		console.log('hello')
		setTimeout(()=>{
			next(action)
		},2000)
		return
	}
	next(action)

}
const fetchData =(store)=>(next)=>async(action)=>{
	if(action.type === 'todo/fetchTodo'){
		const result = await fetch( "https://jsonplaceholder.typicode.com/todos?_limit=5")
		const todos= await result.json();
		store.dispatch({
			type:'todo/todoLoaded',
			payload:todos
		})
		console.log(`number : ${store.getState().todos.length}`)

		return
	}
	
	return next(action);
}
module.exports={delayAction,
fetchData
};