import React, {useState} from 'react';

import os from 'os';

import {AvailableDirectories} from '../types/AvailableDirectories.js';
import {Box, Text} from 'ink';
import {changeDirectory} from '../node_functions/changeDir.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import SelectInput from 'ink-select-input';
import ExitApp from '../components/ExitApp.js';

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

			// open in file system or vs code depending on the operating system and the above script
			let appToOpenWith: string = '';
			const isWindows = os.platform() === 'win32';
			console.log('isWindows', isWindows);

			if (selectedDir?.appToOpenWith === 'code') {
				appToOpenWith = 'code';
			} else if (isWindows) {
				appToOpenWith = 'explorer';
			} else {
				appToOpenWith = 'open';
			}

			if (selectedDir) {
				changeDirectory(selectedDir.path);
				openFileWithApp(selectedDir.path, appToOpenWith);
				setSuccess(true);
			}
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			}
		}
	};

	if (success) {
		return (
			<>
				<Text>Successfully changed directories</Text>
				<ExitApp />
			</>
		);
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
