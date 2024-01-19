import React from 'react';

import {Box, Text} from 'ink';
import SelectInput from 'ink-select-input';

import {
	AvailableScripts,
	GeneralScript,
	ReactScript,
} from '../types/AvailableScriptsType.js';
import ScriptAction from './ScriptAction.js';
import {useHandleScripts} from '../hooks/useHandleScripts.js';

/**
 * These are essentially the options for the select element, it has to take a slightly different form for react-ink apps though
 */
const scripts: {label: string; value: AvailableScripts}[] = [
	{label: 'Create a basic html playground', value: 'basic-html'},
	{label: 'Change directory', value: 'change-dir'},
	{label: 'Create a new react project', value: 'create-react-project'},
	{label: 'Create a new react component', value: 'create-react-component'},
	{label: 'Create new context file', value: 'create-new-context'},
	{label: 'Close the application', value: 'close'},
];

const generalScripts: {label: string; value: GeneralScript}[] = [
	{label: 'Create a basic html playground', value: 'basic-html'},
	{label: 'Change directory', value: 'change-dir'},
	{label: 'Close the application', value: 'close'},
];

const reactScripts: {label: string; value: ReactScript}[] = [
	{label: 'Create a new react project', value: 'create-react-project'},
	{label: 'Create a new react component', value: 'create-react-component'},
	{label: 'Create new context file', value: 'create-new-context'},
];

type ScriptsListProps = {
	activeTab: string;
};

/**
 * Displays the list of scripts that the user can choose from. A visual component, does not perform any actions on a chosen script
 */

export default function ScriptsList({activeTab}: ScriptsListProps) {
	const scriptsToShow = activeTab === 'react' ? reactScripts : generalScripts;
	const {handleSelect, script} = useHandleScripts();

	return (
		<>
			<ScriptsListTitle />
			{/* If both selects are rendered at the same time then clicking on the arrow keys would control both of them together */}
			<Box marginY={1}>
				{!script && (
					<SelectInput items={scriptsToShow} onSelect={handleSelect} />
				)}
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
