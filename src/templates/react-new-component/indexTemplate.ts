/**
 * The index file that will go along with the component template into the same folder, used for exporting that component
 * @param chosenComponentName The name of the component that should be exported
 */
export const indexTemplate: (
	chosenComponentName: string,
) => string = chosenComponentName => {
	return `    
export * from "./${chosenComponentName}";
export { default } from "./${chosenComponentName}";
`.trim();
};
