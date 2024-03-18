import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../../../../components/Button';

export default {
	Card: styled.div`
      width: 330px;
	  padding: 8px;
	  border: 2px solid blue;
	  border-radius: 8px;
	  margin: 16px;
	`,
	Img: styled.img`
      width: 100%;
      height: 180px;
	  object-fit: cover;
	  border-radius: 6px;
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
	`,
	AddButton: styled(Button)`
      border: none;
      background: #3b6acc;
      text-transform: capitalize;
      font-style: italic;
      padding: 6px 24px;
      border-radius: 8px;
      font-weight: bold;
      color: #fff;
	  margin-left: 12px;
	  text-decoration: none;

      &:hover {
        opacity: .8;
        cursor: pointer;
      }
	`
}
