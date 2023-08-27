import React from 'react';

import {Box, Text} from 'ink';

import SelectInput from 'ink-select-input';
import {AvailableScripts} from './types/AvailableScriptsType.js';

type ScriptsListProps = {
	scripts: {label: string; value: AvailableScripts}[]; // Updated type
	handleSelect: (item: {label: string; value: AvailableScripts}) => void;
	message: string;
};

/**
 * Displays the list of scripts that the user can choose from. A visual component, does not perform any actions on a chosen script
 * @param scripts The list of available scripts
 * @param handleSelect The callback for handling what happens when a script is chosen
 * @param message What message to show when a script is selected
 */
export default function ScriptsList({
	handleSelect,
	message,
	scripts,
}: ScriptsListProps) {
	return (
		<>
			<Title />

			<Box marginY={1}>
				<SelectInput items={scripts} onSelect={handleSelect} />
			</Box>

			<ResultMessage message={message} />
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

/**
 * The message that appears as a result of the chosen script
 * @param message The message that should be displayed
 */
function ResultMessage({message}: {message: string}) {
	return (
		<Box marginY={1}>
			<Text color="green">{message}</Text>
		</Box>
	);
}
