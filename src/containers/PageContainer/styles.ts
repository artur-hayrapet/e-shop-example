import styled from 'styled-components';

export default {
	Page: styled.div`
      display: none;
      //flex-direction: row;
      min-height: calc(100vh - 70px);
      @media only screen and (min-width: 768px) {
        display: block;
      }
	`,
	Mobile: styled.div`
      padding: 20px 24px;
	  display: none;
      @media only screen and (max-width: 768px) {
        display: flex;
      }
	`,
}
