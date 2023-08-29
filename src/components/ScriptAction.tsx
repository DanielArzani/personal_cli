import React from 'react';

import {Text} from 'ink';
import CreateBasicPlayGround from '../scripts/CreateBasicPlayground.js';
import {AvailableScripts} from '../types/AvailableScriptsType.js';

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
	} else {
		return <Text>NOTHING CREATED</Text>;
	}
}
