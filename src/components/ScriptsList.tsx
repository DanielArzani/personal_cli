import React from 'react';

import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import ScriptAction from './ScriptAction.js';
import {useHandleScripts} from '../hooks/useHandleScripts.js';

/**
 * These are essentially the options for the select element, it has to take a slightly different form for react-ink apps though
 */
const scripts: {label: string; value: AvailableScripts}[] = [
	{label: 'Create a basic html playground', value: 'basic-html'},
	{label: 'Create a sass template', value: 'sass'},
	{label: 'Change directory', value: 'change-dir'},
	{label: 'Create a new react project', value: 'create-react-project'},
	{label: 'Create a new react component', value: 'create-react-component'},
	{label: 'Close the application', value: 'close'},
];

type ScriptsListProps = {};

/**
 * Displays the list of scripts that the user can choose from. A visual component, does not perform any actions on a chosen script
 */
export default function ScriptsList({}: ScriptsListProps) {
	const {handleSelect, script} = useHandleScripts();

	return (
		<>
			<ScriptsListTitle />

			<Box marginY={1}>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>
			{script && <ScriptAction script={script} />}
		</>
	);
}

/**
 * The title that appears before the list of scripts are given
 */
function ScriptsListTitle() {
	return (
		<Box marginY={1}>
			<Text color="yellow">Which script would you like to run?</Text>
		</Box>
	);
}
