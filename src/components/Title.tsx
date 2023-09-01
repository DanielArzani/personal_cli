import React from 'react';

import BigText from 'ink-big-text';
import {Box, Text} from 'ink';
import Gradient from 'ink-gradient';

/**
 * Displays the beginning introduction when the app is first started
 */
export default function Title() {
	return (
		<Box>
			<Gradient name="summer">
				<BigText text={'ALL-IN-ONE-CLI-BUILDER'} font="chrome" align="center" />
				<Text>STARTING CLI BUILDER...</Text>
			</Gradient>
		</Box>
	);
}
