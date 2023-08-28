import fs from 'fs-extra';

/**
 * Appends data to the end of a file.
 * @param path - The path to the file.
 * @param data - The data that should be appended to the file.
 * @returns The path to the file that was used.
 */
export function appendToFile(path: string, data: string): string {
	fs.appendFileSync(path, data);
	return path;
}
