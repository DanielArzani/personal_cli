import fs from 'fs-extra';

/**
 * Reads the contents of a directory.
 * @param path - Path to the directory.
 * @returns An array of strings representing the contents of the directory.
 */
export function getDirectoryContents(path: string): string[] {
	return fs.readdirSync(path);
}
