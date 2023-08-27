import React, {useState} from 'react';

import pkg from 'usehooks-ts';
const {useTimeout} = pkg;

import {Text, Box} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

import {AvailableScripts} from './types/AvailableScriptsType.js';
import Title from './Title.js';
import ScriptsList from './ScriptsList.js';
import ScriptMessage from './ScriptMessage.js';

const scripts: {label: string; value: AvailableScripts}[] = [
	{label: 'basic-html', value: 'basic-html'},
	{label: 'sass', value: 'sass'},
	{label: 'change-dir', value: 'change-dir'},
	{label: 'create-react-project', value: 'create-react-project'},
	{label: 'create-react-component', value: 'create-react-component'},
];

type AppProps = {
	start: string | undefined;
};

/**
 * A cli builder, it will execute scripts that will do various things that I don't want to do myself such as creating a new react component or scaffolding projects or changing into deep directories.
 *
 */
export default function App({}: AppProps) {
	const [message, setMessage] = useState<string>('');
	const [showScriptPrompt, setShowScriptPrompt] = useState(false);
	const [scriptMessageComponent, setScriptMessageComponent] =
		useState<JSX.Element | null>(null); // I want to render a component within handleSelect, thats what this is for

	useTimeout(() => setShowScriptPrompt(true), 3000); // Show scripts after 3 seconds

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				// Perform action for basic-html
				setScriptMessageComponent(
					<ScriptMessage
						text="Creating a basic html,css,js template"
						hasDots={[true, 3000]}
					/>,
				);

				break;

			case 'sass':
				// Perform action for sass
				setScriptMessageComponent(
					<ScriptMessage
						text="Creating a basic sass template"
						hasDots={[true, 3000]}
					/>,
				);

				break;

			case 'change-dir':
				// Perform action for change-dir
				setScriptMessageComponent(
					<ScriptMessage text="Changing directory" hasDots={[true, 3000]} />,
				);

				break;

			case 'create-react-project':
				// Perform action for create-react-project
				setScriptMessageComponent(
					<ScriptMessage
						text="Creating new react project"
						hasDots={[true, 3000]}
					/>,
				);

				break;

			case 'create-react-component':
				// Perform action for create-react-component
				setScriptMessageComponent(
					<ScriptMessage
						text="Creating new react component"
						hasDots={[true, 3000]}
					/>,
				);

				break;
			default:
				setMessage('Unknown script selected');
		}
	};

	return (
		<>
			<Title />
			{showScriptPrompt && (
				<ScriptsList
					handleSelect={handleSelect}
					scripts={scripts}
					message={message}
				/>
			)}
			<Text>{scriptMessageComponent}</Text>
		</>
	);
}
