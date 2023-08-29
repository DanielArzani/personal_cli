import React from 'react';

import {Box, Text} from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import Dots from './Dots.js';

/**
 * Displays the beginning introduction when the app is first started
 */
export default function Title() {
	return (
		<Box>
			<Gradient name="summer">
				<BigText text={'ALL-IN-ONE-CLI-BUILDER'} font="chrome" align="center" />
				<Text>
					STARTING CLI BUILDER...
					{/* <Dots time={2500} /> */}
				</Text>
			</Gradient>
		</Box>
	);
}
