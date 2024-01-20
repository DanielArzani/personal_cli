import fetch from 'node-fetch';
import fs from 'fs';
import unzipper from 'unzipper';

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
): Promise<void> => {
	try {
		const response = await fetch(repoUrl);
		const fileStream = fs.createWriteStream(outputPath);

		// Wait for the ZIP file to be fully written to outputPath
		await new Promise<void>((resolve, reject) => {
			response.body?.pipe(fileStream);
			response.body?.on('error', error => {
				console.error('Error downloading the ZIP file:', error);
				reject(error);
			});
			fileStream.on('finish', resolve);
		});

		// Wait for the ZIP file to be fully extracted
		await new Promise<void>((resolve, reject) => {
			fs.createReadStream(outputPath)
				.pipe(unzipper.Extract({path: extractPath}))
				.on('close', resolve)
				.on('error', error => {
					console.error('Error extracting the ZIP file:', error);
					reject(error);
				});
		});
	} catch (error) {
		console.error('Error in downloadAndExtractTemplates:', error);
		throw error; // Re-throw the error to handle it in the calling function
	}
};
