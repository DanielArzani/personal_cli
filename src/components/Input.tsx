import React from 'react';
import {Box, Text} from 'ink';
import TextInput from 'ink-text-input';

type InputProps = {
	label: string;
	value: string;
	onChange: (value: string) => void;
	onSubmit: () => void;
};

/**
 * A reusable input component for the Ink library.
 *
 * @param {string} label - The label displayed before the input.
 * @param {string} value - The current value of the input.
 * @param {function} onChange - The function to call when the input value changes.
 * @param {function} onSubmit - The function to call when the Enter key is pressed.
 */
const Input = ({label, value, onChange, onSubmit}: InputProps) => {
	return (
		<Box marginBottom={1}>
			<Box marginRight={1}>
				<Text>{label}</Text>
			</Box>
			<TextInput value={value} onChange={onChange} onSubmit={onSubmit} />
		</Box>
	);
};

export default Input;
