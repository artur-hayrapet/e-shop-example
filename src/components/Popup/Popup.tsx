import React, {FC, ReactNode, useState} from 'react';
import s from './styles';

type PopupProps = {
	children: ReactNode;
	ActionButtons?: ReactNode;
	showCloseButton?: boolean;
	open: boolean;
	onClose: () => void;
}

const Popup: FC<PopupProps> = ({children, ActionButtons, showCloseButton = true, open, onClose}) => {
	const clickAway = (e) => {
		if (e.target.classList.contains('Popup')) {
			onClose();
		}
	}

	if (!open) return null
	return <s.Box className="Popup" onClick={clickAway}>
		<s.ContentWrapper>
			<s.Content>
				<s.PopupTop>
					{showCloseButton && <s.CloseButton onClick={onClose}>x</s.CloseButton>}
				</s.PopupTop>
				{children}
				{ActionButtons && (
					<s.ActionsWrapper>
						{ActionButtons}
					</s.ActionsWrapper>
				)}
			</s.Content>
		</s.ContentWrapper>

	</s.Box>
}

export default Popup;
