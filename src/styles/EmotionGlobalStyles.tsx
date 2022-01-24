import { css, Global } from "@emotion/react";
import React, { FC } from "react";

type Props = {};

export const EmotionGlobalStyles: FC<Props> = () => {
  return <Global styles={styles} />;
};

const styles = css`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font-size: 100%;
    outline: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;
