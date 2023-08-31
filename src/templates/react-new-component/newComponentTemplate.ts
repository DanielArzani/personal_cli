/**
 * The template what the new react component file should look like
 * @param chosenComponentName Will be the name of the component as well as the file
 */
export const newComponentTemplate: (
	chosenComponentName: string,
) => string = chosenComponentName => {
	return `    
  import React from "react";

  function ${chosenComponentName}() {
    return <div>${chosenComponentName} component</div>;
  }

  export default ${chosenComponentName};
  `.trim();
};
