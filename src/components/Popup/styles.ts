import styled from 'styled-components';

export default {
	Box: styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(102, 95, 98, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
	`,
	ContentWrapper: styled.div`
      display: flex;
      background: #fff;
      padding: 20px 12px 0;
      position: relative;
      z-index: 5;
	`,
	Content: styled.div`
      display: flex;
      flex-direction: column;
	`,
	PopupTop: styled.div`
      height: 20px;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
	`,
	CloseButton: styled.button`
      padding: 1px 4px;
      border: none;
      background: #ff12;
      font-size: 16px;
      border-radius: 100%;

      &:hover {
        background: antiquewhite;
        cursor: pointer;
      }
	`,
	ActionsWrapper: styled.div`
      padding: 16px;
      border-top: 2px solid #d2d2d2;
	`
}
