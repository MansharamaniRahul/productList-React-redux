import Constants from '../../constants/constants';

export default function filetrProductsOnBrand(brand: any) {
	return { type: Constants.FILTER_PRODUCTS_ON_BRAND, payload: brand };
}
