export const indexTemplate = (chosenComponentName) => {
  return `    
export * from "./${chosenComponentName}";
export { default } from "./${chosenComponentName}";
`.trim();
};
