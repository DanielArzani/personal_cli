import React, {useState} from 'react';

import {AvailableDirectories} from '../types/AvailableDirectories.js';
import {Box, Text} from 'ink';
import {changeDirectory} from '../node_functions/changeDir.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import SelectInput from 'ink-select-input';

const directories: AvailableDirectories = [
	{
		dirName: 'FEM Projects',
		path: '/Users/danielarzanipour/Documents/coding/Front-End-Mentor-Projects',
		appToOpenWith: 'open',
	},

	{
		dirName: 'WebDev Portfolio',
		path: '/Users/danielarzanipour/Documents/Coding/portfolio/portfolios/web-dev',
		appToOpenWith: 'open',
	},

	{
		dirName: 'My Ink CLI',
		path: '/Users/danielarzanipour/Documents/Coding/automation-scripts/react-ink-scripts/my-ink-cli',
		appToOpenWith: 'code',
	},
	{
		dirName: 'Jonas React',
		path: '/Users/danielarzanipour/Documents/Coding/Online Courses/udemy-courses/jonas-react',
		appToOpenWith: 'open',
	},

	{
		dirName: 'Shell Scripts (can only open from root directory)',
		path: '.zshrc',
		appToOpenWith: 'code',
	},
];

/**
 * Will allow a quick change to a commonly used directory.
 */
export default function ChangeDirectory() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);

	const handleSelect = (item: {label: string; value: string}) => {
		try {
			const selectedDir = directories.find(d => d.dirName === item.value);
			if (selectedDir) {
				changeDirectory(selectedDir.path);
				openFileWithApp(selectedDir.path, selectedDir.appToOpenWith);
				setSuccess(true);
			}
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		}
	};

	if (success) {
		return <Text>Successfully changed directories</Text>;
	}

	if (error) {
		return <Text>{error}</Text>;
	}

	return (
		<Box>
			<Text>Select a directory to change to:</Text>
			<SelectInput
				items={directories.map(d => ({label: d.dirName, value: d.dirName}))}
				onSelect={handleSelect}
			/>
		</Box>
	);
}
