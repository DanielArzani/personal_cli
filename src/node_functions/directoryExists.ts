import fs from 'fs-extra';

/**
 * Checks if a directory exists.
 * @param path - The path to the directory.
 * @returns An object containing the path and a boolean indicating if the directory exists.
 */
export function directoryExists(path: string): {exists: boolean; path: string} {
	const exists = fs.existsSync(path);
	return {path, exists};
}
