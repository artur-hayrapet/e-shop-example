import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default {
	AuthPages: styled.div`
      padding-top: 50px;
	`,
	PageTitle: styled.h1`
      text-align: center;
      padding: 8px;
	`,
	Wrapper: styled.div`
      width: 500px;
      margin: auto;
      padding: 8px;
      border-radius: 5px;
      border: 2px solid lightgreen;
      background-color: lightblue;
	`,
	FormWrapper: styled.div`
      display: flex;
      align-items: flex-end;
      padding: 24px;
	  
	  & form {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	  }
	  & button {
		margin-left: 24px;
	  }
	`,
	FormRow: styled.div`
      display: flex;
      padding-top: 12px;
	`,
	Switcher: styled.div`
      text-align: center;
      padding: 24px;

      & a {
        padding-right: 16px;
      }

      & a.active {
        text-decoration: none;
        pointer-events: none;
      }
	`,
}
