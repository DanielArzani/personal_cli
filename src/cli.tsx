#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ my-ink-cli

	Options
		--name  Your name

	Examples
	  $ my-ink-cli --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			start: {
				type: 'string',
			},
		},
	},
);

render(<App start={cli.flags.start} />, {
	// will make it so that react ink will stop intercepting console.logs
	patchConsole: false, //! doesn't work
});
