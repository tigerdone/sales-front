//const rewireMobX = require('react-app-rewire-mobx');
const {
    override,
    addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
    addDecoratorsLegacy()
);