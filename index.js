const nodeRules = [
    "./rules/node",
    "./rules/plugins/node",
    "./rules/plugins/mocha",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(nodeRules),
};
