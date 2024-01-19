import {useApp} from 'ink';

type usableNumbers = 0 | 1;

/**
 * Exits the application using process.exit()
 * @param number - Should be a 0 if the operation is a success, 1 if there is an error
 */
export default function exitApp(number: usableNumbers) {
	process.exit(number);
	useApp();
}
