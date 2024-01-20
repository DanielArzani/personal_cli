import fs from 'fs-extra';

/**
 * Reads the contents of a directory.
 * @param path - Path to the directory.
 * @returns An array of strings representing the contents of the directory.
 */
export function getDirectoryContents(path: string): string[] {
	if (!fs.existsSync(path)) {
		throw new Error(`Directory not found: ${path}`);
	}
	return fs.readdirSync(path);
}
