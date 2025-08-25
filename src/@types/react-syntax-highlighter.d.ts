declare module 'react-syntax-highlighter' {
  import * as React from 'react';
  export const Prism: any;
  export const Light: any;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    const styles: any;
    export { styles as dracula };
}