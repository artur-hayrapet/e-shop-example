import styled from 'styled-components';

export default {
	CartIcon: styled.div`
      position: relative;
      cursor: pointer;
      border-radius: 5px;
	  margin-left: 12px;
	  
	  & svg {
		width: 50px;
		height: 50px;
	  }
	`,
	Counter: styled.div`
      position: absolute;
	  top: 14px;
	  left: 17px;
	  font-size: 14px;
	  color: indigo;
	  font-weight: bolder;
	`
};
