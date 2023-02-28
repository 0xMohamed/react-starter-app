module.exports = {
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'react-app',
		'react-app/jest',
		'prettier',
		'eslint:recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['prettier', 'react'],
	rules: {
		'no-console': 'warn',
		'no-unused-vars': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
};
