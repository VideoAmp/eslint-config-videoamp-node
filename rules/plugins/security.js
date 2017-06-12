module.exports = {
    plugins: ["security"],
    rules: {
        "security/detect-unsafe-regex": "error",
        "security/detect-buffer-noassert": "error",
        "security/detect-child-process": "error",
        "security/detect-disable-mustache-escape": "error",
        "security/detect-eval-with-expression": "error",
        "security/detect-no-csrf-before-method-override": "error",
        "security/detect-non-literal-fs-filename": "error",
        "security/detect-non-literal-regexp": "error",
        "security/detect-non-literal-require": "error",
        "security/detect-object-injection": "off",
        "security/detect-possible-timing-attacks": "off",
        "security/detect-pseudoRandomBytes": "error",
        "security/detect-new-buffer": "off", // Handled by unicorn
    },
};