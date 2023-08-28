import {Text} from 'ink';
import React from 'react';
import Dots from './Dots.js';

type ScriptMessageProps = {
	text: string;
	hasDots?: [boolean, number];
};

/**
 * The message that should be shown as a result of the chosen script.
 * @param text The text that should be displayed
 * @param hasDots Should there be animating dots at the end of the text? This will be an tuple with the first position as a boolean and the second being the amount of time the dots should run for
 */
export default function ScriptMessage({hasDots, text}: ScriptMessageProps) {
	let dots, time;
	if (hasDots != null) {
		dots = hasDots[0];
		time = hasDots[1];
	}

	return (
		<>
			{hasDots && (
				<Text>
					{text}
					<Dots time={time ? time : 0} />
				</Text>
			)}
			{!hasDots && <Text>{text}</Text>}
		</>
	);
}
