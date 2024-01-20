import React, {useEffect, useState} from 'react';

import {Text, useApp} from 'ink';
import fsExtra from 'fs-extra';

import {copyAndMoveDirContents} from '../node_functions/copyAndMoveDirContents.js';
import ExitApp from '../components/ExitApp.js';
import {getDirectoryContents} from '../node_functions/getDirContents.js';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import path from 'path';
import {downloadAndExtractTemplates} from '../node_functions/downloadAndExtractTemplates.js';
import SelectInput from 'ink-select-input';

type Technologies = {
	language: 'javascript' | 'typescript';
	framework: 'none' | 'react';
	buildTool: 'vite';
	cssFramework: 'tailwind' | 'styledComponents';
};

/**
 * Scaffolds a production ready react project using the desired technologies
 */
export default function ScaffoldProject() {
	const [error, setError] = useState('');
	const [isComplete, setIsComplete] = useState(false);
	const {exit} = useApp();

	// @ts-ignore
	const handleSelect = async item => {
		try {
			const outputPath = './templates.zip';
			const extractPath = getWorkingDirectory();
			const repoUrl =
				'https://github.com/DanielArzani/personal_cli/archive/refs/heads/main.zip';

			await downloadAndExtractTemplates(repoUrl, outputPath, extractPath);

			const templateDir = path.join(extractPath, item.value);

			if (!fsExtra.existsSync(templateDir)) {
				throw new Error(`Template directory not found: ${templateDir}`);
			}

			const templateFiles = getDirectoryContents(templateDir);
			copyAndMoveDirContents(templateFiles, templateDir, getWorkingDirectory());

			fsExtra.unlinkSync(outputPath);
			fsExtra.removeSync(path.join(extractPath, 'personal_cli-main'));

			setIsComplete(true);
		} catch (err) {
			// @ts-ignore
			setError(err.message);
		}
	};

	const items = [
		{
			label: 'JavaScript React Vite Styled-Components',
			value: 'javascript-templates/javascript-react-vite-styled-components',
		},
		{
			label: 'JavaScript React Vite Tailwind',
			value: 'javascript-templates/javascript-react-vite-tailwind',
		},
		{
			label: 'TypeScript React Vite Styled-Components',
			value: 'typescript-templates/typescript-react-vite-styled-components',
		},
		{
			label: 'TypeScript React Vite Tailwind',
			value: 'typescript-templates/typescript-react-vite-tailwind',
		},
	];

	if (isComplete) {
		return (
			<>
				<Text>Successfully created project template.</Text>
				<ExitApp />
			</>
		);
	}

	if (error) {
		return (
			<>
				<Text color="red">Error: {error}</Text>
				<ExitApp />
			</>
		);
	}

	return (
		<>
			<Text>Please select a project template to scaffold:</Text>
			<SelectInput items={items} onSelect={handleSelect} />
		</>
	);
}
