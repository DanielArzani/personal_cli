import React from 'react';

import {Text} from 'ink';
import CreateBasicPlayGround from '../scripts/CreateBasicPlayground.js';
import {AvailableScripts} from '../types/AvailableScriptsType.js';
import CreateReactTemplate from '../scripts/CreateReactTemplate.js';

type ScriptActionProps = {
	script: AvailableScripts;
};

/**
 * Will run the various scripts
 * @param script The type of script to run
 */
export default function ScriptAction({script}: ScriptActionProps) {
	if (script === 'basic-html') {
		return (
			<>
				<CreateBasicPlayGround />
			</>
		);
	} else if (script === 'sass') {
		return (
			<>
				<Text>Sass will be removed, please choose another script...</Text>
			</>
		);
	} else if (script === 'change-dir') {
		return (
			<>
				<Text>COMING SOON...</Text>
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
				<Text>COMING SOON...</Text>
			</>
		);
	} else {
		return <Text>NOTHING CREATED</Text>;
	}
}
