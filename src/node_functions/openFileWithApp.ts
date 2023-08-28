import {spawn} from 'child_process';

/**
 * Opens a file or directory using a given application.
 * @param path - The path to the directory or file to open.
 * @param applicationName - The application used to open the file, defaults to VS code.
 * @example openFileWithApp("./someFile", "open") -> Opens a file using finder.
 * @example openFileWithApp("./someFile", "explorer") -> Opens a file using explorer.
 */
export default function openFileWithApp(
	path: string,
	applicationName: string = 'code',
): void {
	const child = spawn(applicationName, [path]);

	child.on('error', err => {
		console.error(err);
	});

	child.on('exit', (code, signal) => {
		console.log(`Opening ${path}`);
		console.log(`Child process exited with code ${code} and signal ${signal}`);
	});
}
