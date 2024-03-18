import React, {FC} from 'react';
import {BrowserRouter, } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../store';
import Routes from './Routes';
import SideBarNavigation from '../components/SideBarNavigation';
import PageContainer from '../containers/PageContainer';

const App: FC = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PageContainer />
			</Provider>
		</BrowserRouter>
	);
};
export default App;

