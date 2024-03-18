import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default {
	Header: styled.nav`
      border-bottom: #0b30e8;
      box-shadow: 2px 2px 2px 1px rgb(10 50 230 / 20%);
	`,
	Nav: styled.div`
      display: flex;
      align-items: center;
      width: 100%;
      height: 70px;
	`,
	NavItems: styled.div`
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-end;
	`,
	LogoWrapper: styled(NavLink)`
      width: 200px;
      height: 50px;
      border-radius: 10px;
      background: antiquewhite;
      display: flex;
      align-items: center;
      justify-content: center;
	  text-decoration: none;
	`,
	NavItem: styled.div`
      padding: 12px 8px;
      display: inline-flex;

      &:hover {
        background: #d1d1d1;
        cursor: pointer;
      }
	`,
	CartLink: styled.div`
      padding: 12px 8px;
      display: inline-flex;

      &:hover {
        background: #d1d1d1;
        cursor: pointer;
      }
	`,
}
