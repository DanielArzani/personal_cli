import React from 'react';

import {Text, useApp} from 'ink';

import {AvailableScripts} from '../types/AvailableScriptsType.js';
import CreateBasicPlayGround from '../scripts/CreateBasicPlayground.js';
import CreateReactComponent from '../scripts/CreateReactComponent.js';
import ChangeDirectory from '../scripts/ChangeDirectory.js';
import CreateContext from '../scripts/CreateContext.js';
import ExitApp from './ExitApp.js';
import ScaffoldProject from '../scripts/ScaffoldProject.js';

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
	} else if (script === 'scaffold-project') {
		return (
			<>
				<ScaffoldProject />
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
				<ExitApp />
			</>
		);
	} else {
		return (
			<>
				<Text>NOTHING CREATED</Text>;
				<ExitApp />
			</>
		);
	}
}
