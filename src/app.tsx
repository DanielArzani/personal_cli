import React, {useState} from 'react';

import pkg from 'usehooks-ts';
const {useTimeout} = pkg;

import Title from './components/Title.js';
import ScriptsList from './components/ScriptsList.js';
import CreateBasicPlayGround from './scripts/CreateBasicPlayground.js';
import ScriptAction from './components/ScriptAction.js';
import {useHandleScripts} from './hooks/useHandleScripts.js';
import {Text} from 'ink';
import {useStdout} from 'ink';

type AppProps = {
	start: string | undefined;
};

/**
 * A cli builder, it will execute scripts that will do various things that I don't want to do myself such as creating a new react component or scaffolding projects or changing into deep directories.
 *
 */
export default function App({}: AppProps) {
	// Have scripts be hidden until 3 seconds later so that it looks like its actually loading them
	const [showScriptPrompt, setShowScriptPrompt] = useState(true);
	// useTimeout(() => setShowScriptPrompt(true), 3000);
	const [script, setScript] = useState<string | undefined>();
	const {write} = useStdout();

	return (
		<>
			<Title />
			<ScriptsList setScript={setScript} />
			<Text>From app.tsx: {script}</Text>
		</>
	);
}
