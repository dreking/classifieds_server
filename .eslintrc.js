module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    parserOptions: { ecmaVersion: 12 },
    rules: {
        'no-console': 'warn',
        'no-empty-function': 'error',
        'no-lone-blocks': 'error',
        'no-unused-labels': 'error',
        'require-await': 'error',
    },
};
