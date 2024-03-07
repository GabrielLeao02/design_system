import React, { ElementType } from 'react';
interface AppBarProps {
	background: string;
	logo: ElementType;
}
function AppBar({ background = '#ccc', logo: Logo }: AppBarProps) {
	return (
		<div
			style={{
				height: '40px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around',
				width: '100vw',
				background: background,
				position: 'fixed',
				top: 0,
				left: 0,
			}}
		>
			{Logo && <Logo></Logo>}
		</div>
	);
}
export default AppBar;
