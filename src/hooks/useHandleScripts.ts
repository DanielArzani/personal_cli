import React, {useEffect, useState} from 'react';

import {useApp} from 'ink';

import pkg from 'usehooks-ts';
const {useTimeout} = pkg;

import {AvailableScripts} from '../types/AvailableScriptsType.js';

import {useStdout} from 'ink';

/**
 * When an option from the SelectInput is chosen, this component will return a string matching that value and that can be used to call the correct script from ScriptAction
 *
 */
export const useHandleScripts = () => {
	const [script, setScript] = useState<AvailableScripts | undefined>();
	const [animationTime, setAnimationTime] = useState<number>(3000);
	const [shouldExit, setShouldExit] = useState<boolean>(false);
	const {exit} = useApp();
	const {write} = useStdout();

	// exit the application
	// useEffect(() => {
	// 	if (shouldExit) {
	// 		exit();
	// 	}
	// }, [shouldExit]);

	// this controls the time that the animations (dots/spinner) is active
	// useTimeout(() => setShouldExit(true), animationTime + 5000);

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				setScript(() => 'basic-html');
				break;

			// TODO: Delete this since I don't really use sass anymore
			case 'sass':
				setScript('sass');
				break;

			case 'change-dir':
				setScript('change-dir');
				break;

			case 'create-react-project':
				setScript('create-react-project');
				break;

			case 'create-react-component':
				setScript('create-react-component');
				break;

			default:
				throw new Error('An unknown script has been selected');
		}
	};

	return {handleSelect, script};
};
