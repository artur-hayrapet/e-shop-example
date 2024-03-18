import React, {FC} from 'react';
import s from './styles';
import SideBarNavigation from '../../components/SideBarNavigation';
import Routes from '../../app/Routes';
import Header from '../../components/Header/Headr';

const PageContainer: FC = () => {
	return <>
		<Header />
		<s.Page>
			<Routes />
		</s.Page>
		<s.Mobile>
			<h1>mobile screen not supported</h1>
		</s.Mobile>
	</>
}

export default PageContainer;
