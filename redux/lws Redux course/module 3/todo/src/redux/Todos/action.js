import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETE, TOGGLE } from "./actionTypes"
// add todo
export const added = (todoText)=>{
	return{
		type:ADDED,
		payload:todoText
	}
}
// toggle todo
export const toggled = (todoId)=>{
	return{
		type:TOGGLE,
		payload:todoId
	}
}
// color selected todo
export const colorSelected = (todoId,color)=>{
	return{
		type:COLORSELECTED,
		payload:{
			todoId:todoId,
			color:color
		}
	}
}
// delete todo
export const deleted = (todoId)=>{
	return{
		type:DELETE,
		payload:todoId
	}
}
// all completed
export const allCompleted = ()=>{
	return{
		type:ALLCOMPLETED,
	}
}
// clear completed
export const clearCompleted = ()=>{
	return{
		type:CLEARCOMPLETED,
	}
}