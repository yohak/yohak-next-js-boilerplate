import { initialize as initMsw, mswDecorator } from "msw-storybook-addon";
import { RecoilRoot } from "recoil";
import { EmotionGlobalStyles } from "../src/styles/EmotionGlobalStyles";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { addDecorator, addParameters } from "@storybook/react";

//
initMsw();
//
export const decorators = [
  mswDecorator,
  (Story) => (
    <RecoilRoot>
      <EmotionGlobalStyles />
      <Story />
    </RecoilRoot>
  ),
];

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
});
