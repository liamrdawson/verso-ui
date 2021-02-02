const path = require('path')

// TODO: ensure that this file is well documented, so that the purposes of these rules are clear.

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']

    config.resolve.alias = {
      ...config.resolve.alias,
      '@aperture-ui/components': path.resolve(__dirname, '../src/components'),
      '@aperture-ui/theme': path.resolve(__dirname, '../src/themes')
    }

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  }
}
