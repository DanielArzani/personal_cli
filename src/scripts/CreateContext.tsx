import React, {useState} from 'react';

import {Box, Text} from 'ink';

import {createFile} from '../node_functions/createFile.js';
import {directoryExists} from '../node_functions/directoryExists.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import Input from '../components/Input.js';
import newContextTemplate from '../templates/context-template/newContext.js';
import ExitApp from '../components/ExitApp.js';

/**
 * Creates a new context file with the boiler plate and a simple example that should be edited for the current context. Also sets up the useReducer hook.
 */
export default function CreateContext() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);
	const [nameInput, setNameInput] = useState<string>('');

	const createContextFile = () => {
		try {
			// get the current directory
			const currentDir = getWorkingDirectory();

			// check if a contexts folder exists
			const contextsDir = directoryExists(`${currentDir}/src/contexts`);

			if (contextsDir.exists === false) {
				throw new Error(`No contexts folder exists. ${contextsDir.path}`);
			}

			const chosenFileName = `${nameInput}.ts`;

			const componentContent = newContextTemplate();

			// create a new file and append the new context template to it
			const newContextFile = createFile(
				contextsDir.path,
				chosenFileName,
				componentContent,
			);

			setSuccess(true);
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
		}
	};

	return (
		<>
			<Input
				label="Enter the context file name:"
				value={nameInput}
				onChange={setNameInput}
				onSubmit={createContextFile}
			/>

			<Box>
				{success && <Text>Successfully created new context file</Text>}
				{error && <Text>{error}</Text>}
			</Box>

			<ExitApp />
		</>
	);
}
