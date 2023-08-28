import path from 'path';
import fs from 'fs-extra';

/**
 * Creates a new file at the certain location and appends data to it.
 * @param dirPath - The path to directory where the file should be created.
 * @param newFileName - The new file's name.
 * @param data - The data (e.g. text) that should be appended to the new file.
 * @returns The path to the newly created file.
 */
export function createFile(
	dirPath: string,
	newFileName: string,
	data: string = '',
): string {
	const newFilePath = path.join(dirPath, newFileName);
	fs.writeFileSync(newFilePath, data);
	return newFilePath;
}
