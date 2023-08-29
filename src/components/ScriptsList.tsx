import React from 'react';

import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import {useHandleScripts} from '../hooks/useHandleScripts.js';
import ScriptAction from './ScriptAction.js';

/**
 * These are essentially the options for the select element, it has to take a slightly different form for react-ink apps though
 */
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
