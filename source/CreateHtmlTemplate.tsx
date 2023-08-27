import React, {useEffect} from 'react';
import {useApp} from 'ink';

import fs from 'fs';
import path from 'path';

/**
 * Creates a basic html template. This component doesn't render anything visually in the CLI
 */
const CreateHTMLTemplate = () => {
	const {exit} = useApp();

	useEffect(() => {
		const htmlContent = basicHtmlTemplate();

		const desktopPath = path.join(
			process.env['HOME'] || process.env['USERPROFILE'] || '',
			'Desktop',
		);

		const folderPath = path.join(desktopPath, 'basic-html-template');
		const filePath = path.join(folderPath, 'index.html');

		// Ensure the folder exists
		if (!fs.existsSync(folderPath)) {
			fs.mkdirSync(folderPath);
		}

		// Write the HTML content to the file
		fs.writeFileSync(filePath, htmlContent, 'utf8');

		// Exit the app after creating the file
		exit();
	}, []);

	return null;
};

export default CreateHTMLTemplate;

/**
 * A basic html template created using emmet
 */
const basicHtmlTemplate = () => {
	return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
      Set your name and a brief description.
      Used by search engines.
    -->
    <meta name="author" content="Your name">
    <meta name="description" content="Brief description">
    <!--
      'og' stands for Open Graph, which is a protocol for how your
      website appears when linked to from another site. These tags
      are critical to ensuring your site gains an appropriate card
      when sharing on social media.
    -->
    <meta property="og:title" content="Your Page Title">
    <meta property="og:description" content="Brief description">
    <meta property="og:image" content="/some-image.png">
    <meta property="og:url" content="/this-page.html">
    <meta property="og:site_name" content="Your Site Name">
    <!--
      'twitter' is similar to Open Graph, but specific to Twitter.
      There are multiple card types you can choose from.
      Learn more on Twitter's documentation:
      https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started
    -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image:alt" content="Image description">
  
    <!-- GOOGLE FONTS -->
  
  
    <!-- CSS -->
    <link href="styles.css" rel="stylesheet">
    
  
    <!-- JAVASCRIPT -->
    <script src="app.js" defer></script>
  
  
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <title>Your Page Title</title>
  </head>
  <body>
    <h1>Your content here!</h1>
    
  </body>
  </html>
  `;
};
