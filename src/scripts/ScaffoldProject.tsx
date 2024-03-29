import React, {useState} from 'react';
import {Text, useApp} from 'ink';
import fsExtra from 'fs-extra';
import {exec} from 'child_process';
import fs from 'fs';
import {copyAndMoveDirContents} from '../node_functions/copyAndMoveDirContents.js';
import ExitApp from '../components/ExitApp.js';
import {getDirectoryContents} from '../node_functions/getDirContents.js';
import path from 'path';
import SelectInput from 'ink-select-input';
import {getWorkingDirectory} from '../node_functions/getWorkingDir.js';
import AdmZip from 'adm-zip';

type Technologies = {
	language: 'javascript' | 'typescript';
	framework: 'none' | 'react';
	buildTool: 'vite';
	cssFramework: 'tailwind' | 'styledComponents';
};

/**
 * Component for scaffolding projects, it will extract a zip file from my templates in my repo and download and unzip the chosen one
 */
export default function ScaffoldProject() {
	const [error, setError] = useState<string>('');
	const [isComplete, setIsComplete] = useState<boolean>(false);
	const {exit} = useApp();

	const handleSelect = async (item: {value: string}) => {
		try {
			const outputPath = './templates.zip';
			const extractPath = process.cwd();
			const repoUrl =
				'https://github.com/DanielArzani/personal_cli/archive/refs/heads/main.zip';

			// Download the ZIP file
			const downloadCommand = `curl -L ${repoUrl} -o ${outputPath}`;

			exec(downloadCommand, async (downloadError: Error | null) => {
				if (downloadError) {
					throw downloadError;
				}

				// Extract the ZIP file using adm-zip
				try {
					const zip = new AdmZip(outputPath);
					zip.extractAllTo(extractPath, true);

					const templateDir = path.join(extractPath, item.value);

					if (!fs.existsSync(templateDir)) {
						throw new Error(`Template directory not found: ${templateDir}`);
					}

					const templateFiles = getDirectoryContents(templateDir);
					copyAndMoveDirContents(
						templateFiles,
						templateDir,
						getWorkingDirectory(),
					);

					// Remove the extracted template directory and the ZIP file
					fsExtra.removeSync(path.join(extractPath, 'personal_cli-main'));
					fs.unlinkSync(outputPath);

					setIsComplete(true);
				} catch (extractError) {
					throw extractError;
				}
			});
		} catch (err: any) {
			setError(err.message);
		}
	};

	const items = [
		{
			label: 'JavaScript React Vite Styled-Components',
			value:
				'personal_cli-main/src/templates/javascript-templates/javascript-react-vite-styled-components',
		},
		{
			label: 'JavaScript React Vite Tailwind',
			value:
				'personal_cli-main/src/templates/javascript-templates/javascript-react-vite-tailwind',
		},
		{
			label: 'TypeScript React Vite Styled-Components',
			value:
				'personal_cli-main/src/templates/typescript-templates/typescript-react-vite-styled-components',
		},
		{
			label: 'TypeScript React Vite Tailwind',
			value:
				'personal_cli-main/src/templates/typescript-templates/typescript-react-vite-tailwind',
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
