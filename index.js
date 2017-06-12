const nodeRules = [
    "./rules/node",
    "./rules/plugins/node",
    "./rules/plugins/security",
    "./rules/plugins/mocha",
    "./rules/plugins/unicorn",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(nodeRules),
};
