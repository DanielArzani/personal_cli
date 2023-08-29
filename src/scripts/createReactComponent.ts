import {directoryExists} from '../node_functions/directoryExists.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';

/**
 * Creates a react component within the src/components folder. If an error comes up such as a specific folder not existing then an error string gets returned. Display this error string how ever you want.
 */
export default function createReactComponent(): string | undefined {
	let error: string;

	// Get the current directory
	const currentDir = getWorkingDirectory();
	const componentDir = `${currentDir}/src/components`;

	const componentsFolder = directoryExists(componentDir);

	if (componentsFolder.exists === false) {
		error =
			"There's no components folder found within the src directory in your project\n";

		return error;
	}

	return;
}
