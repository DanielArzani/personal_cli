import fs from 'fs-extra';

/**
 * Removes a directory.
 * @param dir - Path to the directory that should be removed.
 */
export function removeDirectory(dir: string): void {
	fs.rmdirSync(dir);
}
