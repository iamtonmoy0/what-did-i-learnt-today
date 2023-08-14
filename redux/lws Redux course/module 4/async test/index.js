const { createStore, applyMiddleware } = require("redux");
const {delayAction ,fetchData} = require("./middleware");

// initial state
const initialState = {
	todos:[]
}
// reducer 
const reducer =(state=initialState,action)=>{
 switch(action.type){
	case 'todo/todoAdded':
		return {
			...state,
			todos:[
				...state.todos,
				{
					title:action.payload
				}
			]
		}
	case 'todo/todoLoaded':
		return{
			...state,
			todos:[...state.todos,...action.payload]
		}
	default:
		break;		
 }
}
// store
const store = createStore(reducer,applyMiddleware(delayAction,fetchData));
// subscribe to state changes
store.subscribe(()=>{
	console.log(store.getState())
})

// creating a action 
// store.dispatch({
// 	type:'todo/todoAdded',
// 	payload:'iam payload'
// })
store.dispatch({
	type:"todo/fetchTodo"
})