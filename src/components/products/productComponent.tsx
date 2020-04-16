import React from 'react';
import { connect } from 'react-redux';

import ProductList from './productListComponent';
import BrandList from './BrandList';
import getProductList from '../../actions/products/productActions';

interface IProductList {
	brandsList: Array<any>;
}
class ProductComponent extends React.Component<any, IProductList> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		this.props.getProductList();
	}
	getBrands() {
		let brandsList = [];
		for (
			let index = 0;
			index < this.props.defaultProductsList.length;
			index++
		) {
			if (
				brandsList.indexOf(
					this.props.defaultProductsList[index]['brand']
				) < 0
			)
				brandsList.push(this.props.defaultProductsList[index]['brand']);
		}
		return brandsList;
	}
	render() {
		let brandsList = [];
		if (this.props.defaultProductsList) brandsList = this.getBrands();
		const consolidatedUI = (
			<div>
				<BrandList brandsList={brandsList} />
				<ProductList productsList={this.props.defaultProductsList} />
			</div>
		);
		return (
			<React.Fragment>
				<h3>Welcome</h3>
				{this.props.defaultProductsList.length > 0 && consolidatedUI}
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: any) {
	return { defaultProductsList: state.defaultProductsList };
}
export default connect(mapStateToProps, { getProductList })(ProductComponent);
