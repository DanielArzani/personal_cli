import React, {useEffect, useState} from 'react';

import {useApp} from 'ink';

import pkg from 'usehooks-ts';
const {useTimeout} = pkg;

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import createBasicPlayGround from '../scripts/createBasicPlayground.js';
import createReactTemplate from '../scripts/createReactTemplate.js';

type Message = {
	hasDots: [boolean, number];
	text: string;
};

/**
 * This hook contains the data that should be given as a result of choosing a script as well as the action that will be performed when the script is chosen.
 *
 * This hook returns
 * - message: An object containing the message that should be shown after a script is chosen and a tuple for whether the message should have dots and how long they should animate for
 * - handleSelect: The onSelect event handler for the Select element
 */
export const useHandleScripts = () => {
	const [message, setMessage] = useState<Message>();
	const [animationTime, setAnimationTime] = useState<number>(3000);
	const [shouldExit, setShouldExit] = useState<boolean>(false);
	const {exit} = useApp();

	// exit the application
	useEffect(() => {
		if (shouldExit) {
			exit();
		}
	}, [shouldExit]);

	useTimeout(() => setShouldExit(true), animationTime + 5000);

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				setMessage({
					hasDots: [false, animationTime],
					text: 'Creating a basic html,css,js template',
				});

				createBasicPlayGround();
				break;

			// TODO: Delete this since I don't really use sass anymore
			case 'sass':
				setMessage({
					hasDots: [false, animationTime],
					text: 'Creating a basic sass template',
				});

				break;

			case 'change-dir':
				setMessage({
					hasDots: [false, animationTime],
					text: 'Changing directory',
				});

				break;

			case 'create-react-project':
				setMessage({
					hasDots: [false, animationTime],
					text: 'Creating new react project',
				});

				createReactTemplate();
				break;

			case 'create-react-component':
				setMessage({
					hasDots: [false, animationTime],
					text: 'Creating new react component',
				});

				break;

			default:
				break;
		}
	};

	return {handleSelect, message};
};
