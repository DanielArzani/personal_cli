import React, {useEffect} from 'react';

import pkg from 'usehooks-ts';
import {Text} from 'ink';
import {useApp} from 'ink';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import CreateBasicPlayGround from '../scripts/CreateBasicPlayground.js';
import CreateReactComponent from '../scripts/CreateReactComponent.js';
import CreateReactTemplate from '../scripts/CreateReactTemplate.js';
import ChangeDirectory from '../scripts/ChangeDirectory.js';

const {useTimeout} = pkg;

type ScriptActionProps = {
	script: AvailableScripts;
};

/**
 * Will run the various scripts
 * @param script The type of script to run
 */
export default function ScriptAction({script}: ScriptActionProps) {
	const {exit} = useApp();

	useEffect(() => {
		if (script === 'close') {
			exit();
		}
	}, [script]);

	if (script === 'basic-html') {
		useTimeout(() => {
			exit();
		}, 1000);
		return (
			<>
				<CreateBasicPlayGround />
			</>
		);
	} else if (script === 'change-dir') {
		return (
			<>
				<ChangeDirectory />
			</>
		);
	} else if (script === 'create-react-project') {
		return (
			<>
				<CreateReactTemplate />
			</>
		);
	} else if (script === 'create-react-component') {
		return (
			<>
				<CreateReactComponent />
			</>
		);
	} else if (script === 'close') {
		return (
			<>
				<Text>Closing Application...</Text>
			</>
		);
	} else {
		return <Text>NOTHING CREATED</Text>;
	}
}
