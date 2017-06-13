module.exports = {
    plugins: ["unicorn"],
    env: {
        es6: true,
    },
    rules: {
        "unicorn/no-process-exit": "error",
        "unicorn/no-new-buffer": "error",
    },
};
