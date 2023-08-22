import React from 'react';
import {Text, Box} from 'ink';
import SelectInput from 'ink-select-input';
import {AvailableScripts} from './types/AvailableScriptsType.js';

const items: {label: string; value: AvailableScripts}[] = [
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
	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		console.log(item.value);
	};

	return (
		<>
			<Box>
				<Text>{start}</Text>
			</Box>
			<Box margin={0}>
				<Text>Which script would you like to run?</Text>
			</Box>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
}
