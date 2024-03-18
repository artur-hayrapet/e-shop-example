import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../../../../components/Button';

export default {
	Wrapper: styled.div`
      width: 100%;
      padding: 8px;
      border: 2px solid blue;
      display: flex;
      justify-content: space-between;
	  margin: 12px 0;
	`,
	Card: styled.div`
      padding: 8px;
	`,
	Img: styled.img`
      width: 120px;
      height: 80px;
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
      height: 30px;
      align-self: center;
	`,
	Count: styled.div`
      width: 50px;
      margin-left: 8px;
      background-color: blanchedalmond;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
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
