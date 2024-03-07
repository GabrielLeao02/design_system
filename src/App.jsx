import './App.css';
import InputText from './app/components/inputText';
import { widthDesignSystem } from './app/components/widthDesignSystem';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

function App() {
	return (
		<>
			<InputText
				width={widthDesignSystem.large}
				title='Design System'
				icon={EmojiEmotionsOutlinedIcon}
			></InputText>
		</>
	);
}

export default App;
