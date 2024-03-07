import React, { ElementType } from 'react';

interface InputTextProps {
	title: string;
	width: string;
	icon: ElementType;
}

export function InputText({ title, width, icon: Icon }: InputTextProps) {
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
				<input
					type='text'
					placeholder={title}
					style={{ width: width }}
				/>
				{Icon ? <Icon></Icon> : ''}
			</div>
		</>
	);
}

export default InputText;
