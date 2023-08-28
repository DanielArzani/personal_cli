import {cwd} from 'process';

/**
 * Retrieves the current working directory of the node process.
 * @returns The current working directory.
 */
export function getWorkingDirectory(): string {
	return cwd();
}
