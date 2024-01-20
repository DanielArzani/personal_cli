import React, {useEffect, useState} from 'react';

import {Text} from 'ink';
import fs from 'fs';
import {rimraf} from 'rimraf';

import {copyAndMoveDirContents} from '../node_functions/copyAndMoveDirContents.js';
import ExitApp from '../components/ExitApp.js';
import {getDirectoryContents} from '../node_functions/getDirContents.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import path from 'path';
import {downloadAndExtractTemplates} from '../node_functions/downloadAndExtractTemplates.js';

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
		const init = async () => {
			try {
				const repoUrl =
					'https://github.com/DanielArzani/personal_cli/archive/refs/heads/main.zip';
				const outputPath = './templates.zip';
				const extractPath = getWorkingDirectory();

				await downloadAndExtractTemplates(repoUrl, outputPath, extractPath);

				const pathToTemplate = 'personal_cli-main/src/templates/react-template';
				const templateDir = path.join(extractPath, pathToTemplate);

				if (!fs.existsSync(templateDir)) {
					throw new Error(`Directory not found: ${templateDir}`);
				}

				const templateFiles = getDirectoryContents(templateDir);
				copyAndMoveDirContents(
					templateFiles,
					templateDir,
					getWorkingDirectory(),
				);

				// Cleanup: Delete the downloaded ZIP file and extracted directory
				fs.unlinkSync(outputPath);
				rimraf.sync(path.join(extractPath, 'personal_cli-main'));

				setSuccess(true);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				}
			}
		};

		init();
	}, []);

	if (success) {
		return (
			<>
				<Text>Successfully created react template</Text>
				<ExitApp />
			</>
		);
	}

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
