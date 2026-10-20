module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    // Props aren't declared with PropTypes in this project
    'react/prop-types': 'off',
    // react-three-fiber elements (<mesh>, <skinnedMesh>, …) take three.js props, not DOM attributes
    'react/no-unknown-property': ['error', {
      ignore: ['args', 'dispose', 'geometry', 'intensity', 'map', 'material', 'morphTargetDictionary', 'morphTargetInfluences', 'object', 'position', 'skeleton'],
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
