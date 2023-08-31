import React, {useState} from 'react';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import {directoryExists} from '../node_functions/directoryExists.js';
import {createDirectory} from '../node_functions/createDir.js';
import {indexTemplate} from '../templates/react-new-component/indexTemplate.js';
import {newComponentTemplate} from '../templates/react-new-component/newComponentTemplate.js';
import {createFile} from '../node_functions/createFile.js';
import {Box, Text} from 'ink';
import TextInput from 'ink-text-input';
import Input from '../components/Input.js';

/**
 * Component to create a new React component in the src/components directory.
 * It first checks if the src/components directory exists, and if not, displays an error.
 * If the directory exists, it prompts the user for a component name.
 * After the user provides a name and presses Enter, it creates the new component.
 */
export default function CreateReactComponent() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);
	const [nameInput, setNameInput] = useState<string>('');

	/**
	 * Function to create the new React component.
	 * It checks the existence of the src/components directory, creates the new component directory,
	 * and then creates the index.tsx and component.tsx files.
	 */
	const createComponent = () => {
		try {
			const currentDir = getWorkingDirectory();
			const componentDir = `${currentDir}/src/components`;

			const componentsFolder = directoryExists(componentDir);

			if (componentsFolder.exists === false) {
				setError(
					"There's no components folder found within the src directory in your project\n",
				);
				return;
			}

			const chosenComponentName = nameInput;

			const newDirectory = createDirectory(componentDir, chosenComponentName);
			const indexContent = indexTemplate(chosenComponentName);
			const componentContent = newComponentTemplate(chosenComponentName);

			const newIndexFile = createFile(newDirectory, 'index.tsx', indexContent);
			const newComponentFile = createFile(
				newDirectory,
				`${chosenComponentName}.tsx`,
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
				label="Enter the component name:"
				value={nameInput}
				onChange={setNameInput}
				onSubmit={createComponent}
			/>

			<Box>
				{success && <Text>Successfully created react template</Text>}
				{error && <Text>{error}</Text>}
			</Box>
		</>
	);
}
