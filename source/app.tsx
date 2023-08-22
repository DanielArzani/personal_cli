import React, {useState} from 'react';
import {Text, Box} from 'ink';
import SelectInput from 'ink-select-input';
import {AvailableScripts} from './types/AvailableScriptsType.js';

const scripts: {label: string; value: AvailableScripts}[] = [
	{label: 'basic-html', value: 'basic-html'},
	{label: 'sass', value: 'sass'},
	{label: 'change-dir', value: 'change-dir'},
	{label: 'create-react-project', value: 'create-react-project'},
	{label: 'create-react-component', value: 'create-react-component'},
];

type AppProps = {
	start: string | undefined;
};

export default function App({start = 'Starting CLI...'}: AppProps) {
	const [message, setMessage] = useState<string | null>(null);

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				// Perform action for basic-html
				setMessage('Creating a basic html,css,js template...');

				break;
			case 'sass':
				// Perform action for sass
				setMessage('Creating a basic sass template...');
				break;
			case 'change-dir':
				// Perform action for change-dir
				setMessage('Changing directory...');
				break;
			case 'create-react-project':
				// Perform action for create-react-project
				setMessage('Creating new react project...');

				break;
			case 'create-react-component':
				// Perform action for create-react-component
				setMessage('Creating new react component...');

				break;
			default:
				setMessage('Unknown script selected');
		}
	};

	return (
		<>
			<Box>
				<Text>{start}</Text>
			</Box>

			<Box margin={0}>
				<Text>Which script would you like to run?</Text>
			</Box>

			<Box>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>

			<Box>
				<Text>{message}</Text>
			</Box>
		</>
	);
}
