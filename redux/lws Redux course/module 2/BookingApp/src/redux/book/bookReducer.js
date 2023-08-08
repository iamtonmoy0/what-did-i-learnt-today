import  {ADD,DELETE } from './actionTypes.js';

const initialState=[];

const bookReducer=(state=initialState,action)=>{
	const copiedState = [...state]
    const { type, payload, id } = action
	switch (type) {
		case ADD:
			// add book
			const lastBookId = copiedState[copiedState.length - 1]?.id
			const newBook = { ...payload, id: lastBookId ? (lastBookId + 1) : 1 }
			copiedState.push(newBook)
		
		case DELETE:
		const updatedState = copiedState.filter(item => item.id !== id)
        return updatedState
	
		default:
			return state;
	}


}

export default bookReducer