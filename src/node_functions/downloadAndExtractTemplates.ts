import fetch from 'node-fetch';
import fs from 'fs';
import unzipper from 'unzipper';
import sleep from '../utils/sleep.js';

//! Not working, it successfully gets the zip file from a repo and moves it to the given destination and unzips it but there are files missing.

/**
 * Asynchronously downloads a ZIP file from a given URL and extracts its contents to a specified directory.
 *
 * @remarks
 * This function performs the following steps:
 * 1. Fetches a ZIP file from the provided repository URL using `node-fetch`.
 * 2. Saves the ZIP file to a local path.
 * 3. Extracts the contents of the ZIP file to a specified directory using `unzipper`.
 *
 * @param repoUrl - The URL of the GitHub repository ZIP file to download.
 * @param outputPath - The local file path where the ZIP file will be saved.
 * @param extractPath - The local directory path where the contents of the ZIP file will be extracted.
 * @example
const repoUrl =
	'https://github.com/yourusername/your-template-repo/archive/refs/heads/main.zip';
const outputPath = './templates.zip';
const extractPath = 'path/to/extract';

downloadAndExtractTemplates(repoUrl, outputPath, extractPath);
 */
export const downloadAndExtractTemplates = async (
	repoUrl: string,
	outputPath: string,
	extractPath: string,
) => {
	let _ = outputPath; // to avoid linter warning about output path not being used
	try {
		const response = await fetch(repoUrl);

		if (!response.ok) {
			throw new Error(`Unexpected response ${response.statusText}`);
		}

		// Pipe the response stream directly to the unzipper
		await new Promise((resolve, reject) => {
			if (response.body === null) {
				throw new Error('Response body is null');
			}
			response.body
				.pipe(unzipper.Extract({path: extractPath}))
				.on('close', resolve)
				.on('error', reject);
		});

		console.log('Templates extracted successfully.');
	} catch (error) {
		console.error('Error in downloadAndExtractTemplates:', error);
		throw error; // Re-throw the error to handle it in the calling function
	}
};
