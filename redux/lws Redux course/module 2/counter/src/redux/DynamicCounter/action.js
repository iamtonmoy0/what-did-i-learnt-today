import * as actionType from './actionTypes'

export const increment = (value)=>{
	return{
		type:actionType.DINCREMENT,
		payload:value
	}
}


export const decrement = (value)=>{
	return{
		type:actionType.DDECREMENT,
		payload:value
	}
}