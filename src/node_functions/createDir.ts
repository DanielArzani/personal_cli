import path from 'path';
import fs from 'fs-extra';

/**
 * Creates a new folder at the specified location.
 * @param dir - The directory in which the new folder should be made.
 * @param newDirName - The name of the new folder which should be created.
 * @param isRecursive - Whether the folder structure should be created if it doesn't already exist.
 * @returns The path of the newly created directory.
 */
export function createDirectory(
	dir: string,
	newDirName: string,
	isRecursive: boolean = false,
): string {
	const newDirPath = path.join(dir, newDirName);
	fs.mkdirSync(newDirPath, {recursive: isRecursive});
	return newDirPath;
}
