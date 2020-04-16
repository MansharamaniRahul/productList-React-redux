import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductComponent from './products/productComponent';

class AppsComponent extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" exact component={ProductComponent} />
				</Switch>
			</Router>
		);
	}
}

export default AppsComponent;
