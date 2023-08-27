import {Text} from 'ink';
import React, {useState} from 'react';

import pkg from 'usehooks-ts';
const {useTimeout, useInterval} = pkg;

type DotsProps = {
	time: number;
};

/**
 * A component that only renders dots that count from 1 dot to 3 continuously
 * @param time The amount of time the dots should animate for, in milliseconds
 * @example
 * STARTING CLI BUILDER.
 * STARTING CLI BUILDER..
 * STARTING CLI BUILDER...
 * STARTING CLI BUILDER.
 */
export default function Dots({time}: DotsProps) {
	const [dots, setDots] = useState<string>('.');
	const [shouldStop, setShouldStop] = useState<boolean>(false);

	useTimeout(() => setShouldStop(true), time);

	// add one dot each 500ms so that I get an effect that looks similar to a loading state
	useInterval(() => {
		if (shouldStop === true) return;

		if (dots.length < 3) {
			setDots(dots + '.');
		} else {
			setDots('.');
		}
	}, 500);

	return <Text>{dots}</Text>;
}
