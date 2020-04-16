import Constants from '../../constants/constants';

export default function getProductList() {
	return function (dispatch: any) {
		return fetch('http://demo4603548.mockable.io/products')
			.then((response) => response.json())
			.then((json) => {
				dispatch({ type: Constants.GET_PRODUCTS, payload: json });
			});
	};
}
