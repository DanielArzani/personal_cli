import React, {useState} from 'react';
import {AvailableScripts} from '../types/AvailableScriptsType.js';

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

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				setMessage({
					hasDots: [true, 3000],
					text: 'Creating a basic html,css,js template',
				});
				break;

			case 'sass':
				setMessage({
					hasDots: [true, 3000],
					text: 'Creating a basic sass template',
				});

				break;

			case 'change-dir':
				setMessage({
					hasDots: [true, 3000],
					text: 'Changing directory',
				});
				break;

			case 'create-react-project':
				setMessage({
					hasDots: [true, 3000],
					text: 'Creating new react project',
				});
				break;

			case 'create-react-component':
				setMessage({
					hasDots: [true, 3000],
					text: 'Creating new react component',
				});
				break;

			default:
				break;
		}
	};

	return {handleSelect, message};
};
