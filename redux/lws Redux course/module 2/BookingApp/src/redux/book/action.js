import { ADD, DELETE } from "./actionTypes"

export const add =(value)=>{
	return {
		type:ADD,
		payload:value
	}
}
export const del =(id)=>{
	return {
		type:DELETE,
		payload:id
	}
}