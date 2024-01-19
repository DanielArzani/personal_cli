import React, {useState} from 'react';
import {Box, Text} from 'ink'; // Import Text from ink
import {Tabs, Tab} from 'ink-tab';

type TabListProps = {
	onTabChange: (tabName: string) => void;
};

/**
 * A React component that renders a set of tabs using `ink-tab`.
 * It displays different content based on the active tab.
 * @param onTabChange - Function to call when the tab changes
 */
export const TabList = ({onTabChange}: TabListProps) => {
	const [activeTabName, setActiveTabName] = useState<string | null>(null);

	/**
	 * Handles changing the active tab.
	 * @param name - The name of the selected tab.
	 */
	const handleTabChange = (name: string) => {
		onTabChange(name);
	};

	return (
		<Box flexDirection="column">
			<Box>
				{/* the values that appear depending on the tab */}
				<Text>
					{activeTabName === 'general-use' && 'Selected tab is "general-use"'}
					{activeTabName === 'react' && 'Selected tab is "react"'}
					{/* {activeTabName === 'baz' && 'Selected tab is "baz"'} */}
				</Text>
			</Box>

			{/* The displayed tab names */}
			<Tabs onChange={handleTabChange}>
				<Tab name="general-use">General Use</Tab>
				<Tab name="react">React</Tab>
				{/* <Tab name="baz">3</Tab> */}
			</Tabs>
		</Box>
	);
};
