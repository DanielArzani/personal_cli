import React, {useState} from 'react';

import {AvailableScripts} from '../types/AvailableScriptsType.js';

/**
 * When an option from the SelectInput is chosen, this component will return a string matching that value and that can be used to call the correct script from ScriptAction
 *
 */
export const useHandleScripts = () => {
	const [script, setScript] = useState<AvailableScripts | undefined>();

	const handleSelect = (item: {label: string; value: AvailableScripts}) => {
		switch (item.value) {
			case 'basic-html':
				setScript(() => 'basic-html');
				break;

			case 'change-dir':
				setScript('change-dir');
				break;

			case 'create-react-project':
				setScript('create-react-project');
				break;

			case 'create-react-component':
				setScript('create-react-component');
				break;

			case 'create-new-context':
				setScript('create-new-context');
				break;

			case 'close':
				setScript('close');
				break;

			default:
				throw new Error('An unknown script has been selected');
		}
	};

	return {handleSelect, script};
};
