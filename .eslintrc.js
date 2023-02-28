module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'react-app', 'prettier'],
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
