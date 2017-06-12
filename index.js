const nodeRules = [
    "./rules/node",
    "./rules/plugins/node",
].map(require.resolve);

module.exports = {
    "extends": ["videoamp"].concat(nodeRules),
};
