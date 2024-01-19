import {useApp} from 'ink';
import {useEffect} from 'react';

/**
 * Component used to exit the application
 * @returns null
 */
export default function ExitApp() {
	const {exit} = useApp();
	useEffect(() => {
		exit();
	});

	return null;
}
