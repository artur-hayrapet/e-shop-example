import styled from 'styled-components';
import {Field} from 'formik';

export default {
	Wr: styled.label`
      padding-right: 12px;
      font-weight: 600;
	`,
	Label: styled.div`
      padding-bottom: 8px;
	`,
	Input: styled(Field)`
      padding: 4px;
      width: 100%;
      border: 2px solid indigo;
      border-radius: 5px;
	`,
	ErrorWrapper: styled.div`
      position: relative;
	`,
	Error: styled.div`
      position: absolute;
      top: 8px;
      right: 0;
      color: #f45454;
	`
};
