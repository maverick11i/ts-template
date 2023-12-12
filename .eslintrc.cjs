module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    overrides: [
        {
            parserOptions: {
                parser: "@typescript-eslint/parser",
                sourceType: "module",
            },
        },
    ],
    rules: {
        "no-global-assign": ["error", { exceptions: ["Object"] }],
    },
};
