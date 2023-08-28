import path from 'path';
import fs from 'fs-extra';

/**
 * Copies all the contents of a folder recursively to a specified directory.
 * @param dirContents - The contents of the directory.
 * @param sourceDir - Path to the directory from which to copy the contents.
 * @param destinationDir - Path to the directory to which the contents should be moved.
 * @returns The path to the destination directory.
 */
export function copyAndMoveDirContents(
	dirContents: string[],
	sourceDir: string,
	destinationDir: string,
): string {
	dirContents.forEach(file => {
		const sourceFile = path.join(sourceDir, file);
		const destinationFile = path.join(destinationDir, file);
		fs.copySync(sourceFile, destinationFile);
	});
	return destinationDir;
}
