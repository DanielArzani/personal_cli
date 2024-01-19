import React, {useEffect, useState} from 'react';

import {Text} from 'ink';

import {copyAndMoveDirContents} from '../node_functions/copyAndMoveDirContents.js';
import {getDirectoryContents} from '../node_functions/getDirContents.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import ExitApp from '../components/ExitApp.js';

type Technologies = {
	language: 'javascript' | 'typescript';
	javascriptFramework: 'none' | 'react' | 'next';
	buildTool: 'vite' | 'snowpack' | 'gulp';
	cssFramework: 'none' | 'bootstrap' | 'tailwind' | 'styledComponents' | 'scss';
	stateManagement: 'none' | 'redux';
	testingFramework: 'none' | 'jest' | 'vitest';
	routing: 'none' | 'react-router';
	formHandling: 'none';
	dataBase: 'none';
};

/**
 * Scaffolds a production ready react project using the desired technologies
 */
export default function CreateReactTemplate() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		try {
			// get path to the template
			const templateDir =
				'/Users/danielarzanipour/Documents/Coding/automation-scripts/react-ink-scripts/my-ink-cli/src/templates/react-template';

			// get path to current directory
			const currentDir = getWorkingDirectory();

			// copy all the contents of the react-template folder
			const templateFiles = getDirectoryContents(templateDir);

			const newProjectDir = copyAndMoveDirContents(
				templateFiles,
				templateDir,
				currentDir,
			);

			openFileWithApp(newProjectDir);

			setSuccess(true);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
		}
	}, []);

	if (success) {
		return (
			<>
				<Text>Successfully created react template</Text>;
				<ExitApp />
			</>
		);
	}

	return <>{error && <Text>{error}</Text>}</>;
}
