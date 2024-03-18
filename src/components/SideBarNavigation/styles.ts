import styled from 'styled-components';

export default {
	Nav: styled.div`
      display: flex;
	  flex-wrap: wrap;
      flex-direction: column;
      width: 200px;
      height: 100%;
	  border-right: 1px solid #d2d2d2;
	`,
	LinkWrapper: styled.div`
      padding: 12px 8px;
	  border-bottom: 1px solid #d1d1d1;
	  
	  &:hover {
        background: #d1d1d1;
		cursor: pointer;
	  }
	`,
}
