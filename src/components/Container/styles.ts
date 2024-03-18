import styled, {css} from 'styled-components';

export default {
	Container: styled('div')(
		({$fluid}) => css`
          padding-left: 24px;
          padding-right: 24px;
          max-width: 1440px;
          margin: auto;

          ${$fluid && css`
            max-width: 100%;
          `}
		`
	)
};
