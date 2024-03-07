import React, { ElementType } from 'react';

interface InputTextProps {
	title: string;
	width: string;
	icon: ElementType;
}

export function InputText({ title, width, icon: Icon }: InputTextProps) {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<input
				type='text'
				placeholder={title}
				style={{
					width: width,
					paddingRight: '20px',
					height: '20px',
					lineHeight: '20px',
				}}
			/>
			{Icon && <Icon style={{ fontSize: '15px', marginLeft: '-30px' }} />}
		</div>
	);
}

export default InputText;
