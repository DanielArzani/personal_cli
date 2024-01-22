import React, {useEffect, useState} from 'react';

import {Text} from 'ink';
import os from 'os';
import path from 'path';

import {basicHtmlTemplate} from '../templates/basic-html/basicHtml.js';
import {createDirectory} from '../node_functions/createDir.js';
import {createFile} from '../node_functions/createFile.js';
import {generateRandomString} from '../utils/generateRandomString.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import ExitApp from '../components/ExitApp.js';

/**
 * Creates a folder with a html, css and js file located within it
 */
export default function CreateBasicPlayGround({}) {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		try {
			// Get the user's home directory
			const homeDirectory = os.homedir();
			const isWindows = os.platform() === 'win32';

			// Construct the path to the desktop
			let pathToDesktop;

			if (isWindows) {
				pathToDesktop = path.join(homeDirectory, 'OneDrive\\Desktop');
			} else {
				pathToDesktop = path.join(homeDirectory, 'Desktop');
			}

			const newDirectory = createDirectory(
				pathToDesktop,
				`pad-${generateRandomString()}`,
			);

			createFile(newDirectory, 'index.html', basicHtmlTemplate());
			createFile(newDirectory, 'styles.css', '');
			createFile(newDirectory, 'app.js', '');

			openFileWithApp(newDirectory);

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
				<Text>Successfully created new basic playground</Text>
				<ExitApp />
			</>
		);
	} else {
		return (
			<>
				{error && (
					<>
						<Text>{error}</Text>
						<ExitApp />
					</>
				)}
			</>
		);
	}
}
