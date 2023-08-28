import React, {useState} from 'react';

import pkg from 'usehooks-ts';
const {useTimeout} = pkg;

import {Text, Box} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

import Title from './Title.js';
import ScriptsList from './ScriptsList.js';

type AppProps = {
	start: string | undefined;
};

/**
 * A cli builder, it will execute scripts that will do various things that I don't want to do myself such as creating a new react component or scaffolding projects or changing into deep directories.
 *
 */
export default function App({}: AppProps) {
	// Have scripts be hidden until 3 seconds later so that it looks like its actually loading them
	const [showScriptPrompt, setShowScriptPrompt] = useState(false);
	useTimeout(() => setShowScriptPrompt(true), 3000);

	return (
		<>
			<Title />
			{showScriptPrompt && <ScriptsList />}
		</>
	);
}
