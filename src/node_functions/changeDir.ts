import {chdir, cwd} from 'process';

/**
 * Moves the node process to a specified directory.
 * @param path - Path to a directory.
 */
export function changeDirectory(path: string): void {
	try {
		chdir(path);
		console.log(`New directory: ${cwd()}`);
	} catch (err) {
		console.error(`chdir: ${err}`);
	}
}
