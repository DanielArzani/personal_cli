import {createDirectory} from '../node_functions/createDir.js';
import {createFile} from '../node_functions/createFile.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import {generateRandomString} from '../utils/generateRandomString.js';
import {basicHtmlTemplate} from '../templates/basic-html/basicHtml.js';

/**
 * Creates a folder with a html, css and js file located within it
 */
export default function createBasicPlayGround() {
	try {
		const pathToDesktop = '/Users/danielarzanipour/Desktop';

		const newDirectory = createDirectory(
			pathToDesktop,
			`pad-${generateRandomString()}`,
		);

		const newHtmlFile = createFile(
			newDirectory,
			'index.html',
			basicHtmlTemplate(),
		);
		const newCssFile = createFile(newDirectory, 'styles.css', '');
		const newJsFile = createFile(newDirectory, 'app.js', '');

		openFileWithApp(newDirectory);
	} catch (error) {
		console.log(error);
	}
}
