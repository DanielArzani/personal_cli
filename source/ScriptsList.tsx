import React from 'react';

import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

import {AvailableScripts} from './types/AvailableScriptsType.js';
import {handleSelect} from './HandleScripts.js';

const scripts: {label: string; value: AvailableScripts}[] = [
	{label: 'basic-html', value: 'basic-html'},
	{label: 'sass', value: 'sass'},
	{label: 'change-dir', value: 'change-dir'},
	{label: 'create-react-project', value: 'create-react-project'},
	{label: 'create-react-component', value: 'create-react-component'},
];

type ScriptsListProps = {};

/**
 * Displays the list of scripts that the user can choose from. A visual component, does not perform any actions on a chosen script
 * @param handleSelect The handler for what happens when an option is chosen
 */
export default function ScriptsList({}: ScriptsListProps) {
	return (
		<>
			<Title />

			<Box marginY={1}>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>
		</>
	);
}

/**
 * The title that appears before the list of scripts are given
 */
function Title() {
	return (
		<Box marginY={1}>
			<Text color="yellow">Which script would you like to run?</Text>
		</Box>
	);
}
