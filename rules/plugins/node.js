module.exports = {
    "plugins": ["node"],
    "parserOptions": {
        "ecmaVersion": 8,
    },
    "env": {
        "es6": true,
        "node": true,
    },
    "rules": {
        "node/no-extraneous-import": "off",
        "node/no-extraneous-require": "error",
        "node/no-missing-import": "off",
        "node/no-missing-require": "error",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
        "node/no-unsupported-features": ["error", { version: 8 }],
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
        "node/no-deprecated-api": "error",
        "node/exports-style": "off",
    },
};
