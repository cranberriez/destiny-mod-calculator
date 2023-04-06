import React, { useState } from 'react';
import './css/popup.css';

function Popup({ popupStatus, setPopupStatus, children }) {
	return (
		<div className={`popup-container ${popupStatus ? '' : 'hidden'}`} onClick={() => (setPopupStatus(false))}>
			<div className={`class-picker-popup`} onClick={(e) => (e.stopPropagation())}>
				<div className={'close-popup'} onClick={() => (setPopupStatus(false))}>
					x
				</div>

				{ children }
			</div>
		</div>
	)
}

export default Popup;