import actionTypes from '../constants/actionTypes';

export const updatePageIndex = (index) => ({
	type: actionTypes.UPDATE_PAGE_INDEX,
	payload: {
		index: index
	}
});
