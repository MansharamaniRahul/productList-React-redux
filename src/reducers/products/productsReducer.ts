import Constants from '../../constants/constants';

const inititalState = {
	brandsList: [],
	defaultProductsList: [],
	filteredProductsListObj: {},
};
function productReducer(state = inititalState, action: any) {
	switch (action.type) {
		case Constants.GET_PRODUCTS: {
			return Object.assign({}, state, {
				defaultProductsList: state.defaultProductsList.concat(
					action.payload?.products
				),
			});
		}
		case Constants.FILTER_PRODUCTS_ON_BRAND: {
			if (state.defaultProductsList.length > 0) {
				const newState = JSON.parse(
					JSON.stringify(state.filteredProductsListObj)
				);
				for (
					let index = 0;
					index < state.defaultProductsList.length;
					index++
				) {
					let currProoduct: any = state.defaultProductsList[index];
					if (
						!newState[currProoduct['productId']] &&
						currProoduct['brand'] == action.payload
					) {
						newState[currProoduct['productId']] = currProoduct;
					} else if (
						newState[currProoduct['productId']] &&
						currProoduct['brand'] == action.payload
					)
						delete newState[currProoduct['productId']];
				}
				return Object.assign({}, state, {
					filteredProductsListObj: newState,
				});
			}
			return state;
		}

		default: {
			return state;
		}
	}
}

export default productReducer;
