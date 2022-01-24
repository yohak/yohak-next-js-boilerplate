module.exports = {
  stories: ["../src/components/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "storybook-addon-next-router",
  ],
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
};
