import {copyAndMoveDirContents} from '../node_functions/copyAndMoveDirContents.js';
import {getDirectoryContents} from '../node_functions/getDirContents.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';

/**
 * CREATES A COMPLETE PRODUCTION READY REACT TEMPLATE WITH TYPESCRIPT, TYPEDOCS, TAILWIND AND VITE
 */
export default function createReactTemplate() {
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
}
