import { COLORSCHANGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (color,changeType)=>{
	return {
			type:COLORSCHANGED,
			payload:{
			color,
			changeType
			}
	}

}
export const statusChanged= (status)=>{
	return{
		type : STATUSCHANGED,
		payload:{ 
			status
		}
	}
}