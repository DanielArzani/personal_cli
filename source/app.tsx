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

const startingIntro = `
****************************
	STARTING CLI...
****************************
`;

type AppProps = {
	start: string | undefined;
};

/**
 * A cli builder, it will execute scripts that will do various things that I don't want to do myself such as creating a new react component or scaffolding projects or changing into deep directories
 * @param start The text that will appear at the very start, an introduction.
 */
export default function App({start = startingIntro}: AppProps) {
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
				<Text bold color="cyan">
					{start}
				</Text>
			</Box>

			<Box>
				<Text color="yellow">Which script would you like to run?</Text>
			</Box>

			<Box marginY={1}>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>

			<Box marginY={1}>
				<Text color="green">{message}</Text>
			</Box>
		</>
	);
}
