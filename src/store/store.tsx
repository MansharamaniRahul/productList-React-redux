import { createStore, applyMiddleware, compose } from 'redux';
import productReducer from '../reducers/products/productsReducer';
import thunk from 'redux-thunk';

const appStore = createStore(productReducer, compose(applyMiddleware(thunk)));
export default appStore;
