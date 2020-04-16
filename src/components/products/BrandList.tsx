import React from 'react';
import { connect } from 'react-redux';
import filetrProductsOnBrand from '../../actions/products/brandActions';

interface IBrandsList {
	brandsList: Array<any>;
}

class BrandList extends React.Component<any, IBrandsList> {
	constructor(props: any) {
		super(props);
		this.state = { brandsList: [] };
		this.handleSelectedBrand = this.handleSelectedBrand.bind(this);
	}

	handleSelectedBrand(brand: any) {
		this.props.filetrProductsOnBrand(brand);
	}

	renderBrandList() {
		return this.props.brandsList.map((brand: any, index: any) => {
			return (
				<li
					key={index}
					onClick={this.handleSelectedBrand.bind(this, brand)}
				>
					{brand}
				</li>
			);
		});
	}

	render() {
		return (
			<React.Fragment>
				<h2>Brands List</h2>
				<ul>{this.renderBrandList()} </ul>
			</React.Fragment>
		);
	}
}

function mapDispatchtoProps(dispatch: any) {
	return {
		filetrProductsOnBrand: (brand: any) =>
			dispatch(filetrProductsOnBrand(brand)),
	};
}
export default connect(null, mapDispatchtoProps)(BrandList);
