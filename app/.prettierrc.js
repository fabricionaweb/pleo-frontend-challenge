const { prettierConfig } = require('poetic')

module.exports = {
  ...prettierConfig,
  // Add custom rules here
  printWidth: 80,
  semi: false,
}
