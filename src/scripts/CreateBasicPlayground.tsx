import React, {useEffect, useState} from 'react';

import {Text} from 'ink';

import {basicHtmlTemplate} from '../templates/basic-html/basicHtml.js';
import {createDirectory} from '../node_functions/createDir.js';
import {createFile} from '../node_functions/createFile.js';
import {generateRandomString} from '../utils/generateRandomString.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';

/**
 * Creates a folder with a html, css and js file located within it
 */
export default function CreateBasicPlayGround({}) {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<boolean>(false);

	useEffect(() => {
		try {
			const pathToDesktop = '/Users/danielarzanipour/Desktop';

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
		return <Text>Successfully created new basic playground</Text>;
	} else {
		return <>{error && <Text>{error}</Text>}</>;
	}
}
