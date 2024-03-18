import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default {
	Card: styled.div`
      width: 330px;
	  padding: 8px;
	  border: 2px solid blue;
	  border-radius: 8px;
	`,
	Img: styled.img`
      width: 500px;
	  border-radius: 6px;
	`,
	H2: styled('h1')`
      padding: 24px 0;
      width: 100%;
	`,
	Row: styled('div')`
      padding: 12px 0;
      display: grid;
      width: 100%;
	`,

	Call: styled.div`
	  padding-bottom: 12px;
	`,
	Actions: styled.div`
      display: flex;
	`,
	ActionButton: styled(Link)`
      border: none;
	  background: chartreuse;
	  text-transform: capitalize;
	  font-style: italic;
	  padding: 6px 24px;
	  border-radius: 8px;
	  font-weight: bold;
	  color: indigo;
	  text-decoration: navajowhite;
	  &:hover {
		background: rgba(6, 220, 10, .1);
		cursor: pointer;
	  }
	`
}
