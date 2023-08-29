import React from 'react';

import {createDirectory} from '../node_functions/createDir.js';
import {createFile} from '../node_functions/createFile.js';
import openFileWithApp from '../node_functions/openFileWithApp.js';
import {generateRandomString} from '../utils/generateRandomString.js';
import {basicHtmlTemplate} from '../templates/basic-html/basicHtml.js';

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
