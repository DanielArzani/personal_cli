import React from 'react';

import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import {useHandleScripts} from '../hooks/useHandleScripts.js';
import ScriptMessage from './ScriptMessage.js';
import ScriptAction from './ScriptAction.js';
import {useStdout} from 'ink';

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

type ScriptsListProps = {
	setScript: React.Dispatch<React.SetStateAction<string | undefined>>;
};

/**
 * Displays the list of scripts that the user can choose from. A visual component, does not perform any actions on a chosen script
 * @param handleSelect The handler for what happens when an option is chosen
 */
export default function ScriptsList({setScript}: ScriptsListProps) {
	const {handleSelect, script} = useHandleScripts();

	if (script !== undefined) setScript(script);
	return (
		<>
			<ScriptsListTitle />

			<Box marginY={1}>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>
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
