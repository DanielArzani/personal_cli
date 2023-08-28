import fs from 'fs-extra';

/**
 * Deletes a file.
 * @param path - Path to the file that should be deleted.
 */
export function deleteFile(path: string): void {
	fs.rmSync(path);
}
