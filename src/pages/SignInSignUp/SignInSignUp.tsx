import React, {ComponentProps, FC, useEffect} from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import s from './styles';
import {NavLink, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUserData} from '../../store/userSlice';

interface SignInSignUpProps extends ComponentProps<any> {
	page: 'signIn' | 'signUp';
}

const SignInSignUp: FC<SignInSignUpProps> = ({page}) => {
	const navigate = useNavigate();
	const {me} = useSelector(getUserData);

	useEffect(() => {
		if (me) {
			navigate('/');
		}
	}, [me])

	return (
		<s.AuthPages>
			<s.Wrapper>
				<s.PageTitle>Welcome {page === 'signIn' ? 'back' : ''}</s.PageTitle>
				{page === 'signIn' ? <SignIn/> : <SignUp/>}

				<s.Switcher>
					<NavLink to={'/login'}>sign in</NavLink>
					<NavLink to={'/register'}>sign up</NavLink>
				</s.Switcher>
			</s.Wrapper>
		</s.AuthPages>
	)
}

export default SignInSignUp
