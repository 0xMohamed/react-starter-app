module.exports = {
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react'],
	rules: {
		'no-console': 'error',
	},
};
