export const newComponentTemplate = (chosenComponentName) => {
  return `    
  import React from "react";

  function ${chosenComponentName}() {
    return <div />;
  }

  export default ${chosenComponentName};
  `.trim();
};
