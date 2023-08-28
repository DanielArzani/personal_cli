import React, {useState} from 'react';

import {AvailableScripts} from './types/AvailableScriptsType.js';
import ScriptMessage from './ScriptMessage.js';

/**
 * Handles what happens after a script is selected
 */
export default function HandleScripts() {
	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				// Perform action for basic-html

				return (
					<ScriptMessage
						text="Creating a basic html,css,js template"
						hasDots={[true, 3000]}
					/>
				);

			case 'sass':
				// Perform action for sass

				return (
					<ScriptMessage
						text="Creating a basic sass template"
						hasDots={[true, 3000]}
					/>
				);

			case 'change-dir':
				// Perform action for change-dir

				return (
					<ScriptMessage text="Changing directory" hasDots={[true, 3000]} />
				);

			case 'create-react-project':
				// Perform action for create-react-project

				return (
					<ScriptMessage
						text="Creating new react project"
						hasDots={[true, 3000]}
					/>
				);

			case 'create-react-component':
				// Perform action for create-react-component

				return (
					<ScriptMessage
						text="Creating new react component"
						hasDots={[true, 3000]}
					/>
				);

			default:
				return <ScriptMessage text="Unknown script selected" />;
		}
	};

	return handleSelect;
}

export const handleSelect = (item: {
	label: string;
	value: AvailableScripts;
}) => {
	switch (item.value) {
		case 'basic-html':
			// Perform action for basic-html

			return 'Creating a basic html,css,js template';

			return (
				<ScriptMessage
					text="Creating a basic html,css,js template"
					hasDots={[true, 3000]}
				/>
			);

		case 'sass':
			// Perform action for sass

			return (
				<ScriptMessage
					text="Creating a basic sass template"
					hasDots={[true, 3000]}
				/>
			);

		case 'change-dir':
			// Perform action for change-dir

			return <ScriptMessage text="Changing directory" hasDots={[true, 3000]} />;

		case 'create-react-project':
			// Perform action for create-react-project

			return (
				<ScriptMessage
					text="Creating new react project"
					hasDots={[true, 3000]}
				/>
			);

		case 'create-react-component':
			// Perform action for create-react-component

			return (
				<ScriptMessage
					text="Creating new react component"
					hasDots={[true, 3000]}
				/>
			);

		default:
			return <ScriptMessage text="Unknown script selected" />;
	}
};
