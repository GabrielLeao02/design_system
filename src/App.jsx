import './App.css';
import InputText from './app/components/inputText';
import { widthDesignSystem } from './app/components/widthDesignSystem';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'start',
				gap: '10px',
				flexDirection: 'column',
			}}
		>
			<InputText
				width={widthDesignSystem.small}
				title='Design System'
				icon={EmojiEmotionsOutlinedIcon}
			></InputText>

			<InputText
				width={widthDesignSystem.medium}
				title='Design System'
			></InputText>
			<InputText
				width={widthDesignSystem.large}
				title='Design System'
				icon={EmojiEmotionsOutlinedIcon}
			></InputText>
		</div>
	);
}

export default App;
