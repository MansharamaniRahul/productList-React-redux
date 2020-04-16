import React from 'react';
import { connect } from 'react-redux';

interface IProductList {
	productList: Array<any>;
}
class ProductList extends React.Component<any, IProductList> {
	constructor(props: any) {
		super(props);
		this.state = { productList: [] };
	}

	renderProductDetails(product: any, index: any) {
		const { productId, productName, rating, ratingCount } = product;

		return (
			<tr key={productId}>
				<td>{productId}</td>
				<td>{productName}</td>
				<td>{rating}</td>
				<td>{ratingCount}</td>
			</tr>
		);
	}
	selectAndRenderProducts() {
		if (Object.keys(this.props.filteredProductsListObj).length > 0) {
			return Object.values(this.props.filteredProductsListObj).map(
				(product: any, index: any) => {
					const {
						productId,
						productName,
						rating,
						ratingCount,
					} = product;

					return (
						<tr key={productId}>
							<td>{productId}</td>
							<td>{productName}</td>
							<td>{rating}</td>
							<td>{ratingCount}</td>
						</tr>
					);
				}
			);
		} else {
			return this.props.productsList.map(this.renderProductDetails);
		}
	}

	render() {
		return (
			<React.Fragment>
				<h1>Product List</h1>{' '}
				{(this.props.productsList.length > 0 ||
					this.props.filteredProductsListObj > 0) && (
					<table id="products">
						<tbody>{this.selectAndRenderProducts()}</tbody>
					</table>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { filteredProductsListObj: state.filteredProductsListObj };
};
export default connect(mapStateToProps)(ProductList);
