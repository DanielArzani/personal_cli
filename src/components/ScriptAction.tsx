import React from 'react';

import {Text} from 'ink';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import CreateBasicPlayGround from '../scripts/CreateBasicPlayground.js';
import CreateReactComponent from '../scripts/CreateReactComponent.js';
import CreateReactTemplate from '../scripts/CreateReactTemplate.js';
import ChangeDirectory from '../scripts/ChangeDirectory.js';
import CreateContext from '../scripts/CreateContext.js';

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
	} else if (script === 'create-new-context') {
		return (
			<>
				<CreateContext />
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
