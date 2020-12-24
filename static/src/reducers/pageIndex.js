import actionTypes from '../constants/actionTypes';


export default (state = '', action) => {
	let payload = action.payload;

  switch (action.type) {

    case actionTypes.UPDATE_PAGE_INDEX:
    	return payload.index;
      
    default:
      return state;
  }
}