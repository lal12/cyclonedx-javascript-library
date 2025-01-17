/*!
This file is part of CycloneDX JavaScript Library.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
Copyright (c) OWASP Foundation. All Rights Reserved.
*/

/* eslint-disable jsdoc/valid-types */

/**
 * @type {import('eslint').Linter.Config}
 * @see {@link https://eslint.org/}
 */
module.exports = {
  root: true,
  extends: [
    /* see https://github.com/standard/ts-standard */
    'standard-with-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    /* see https://github.com/lydell/eslint-plugin-simple-import-sort#readme */
    'simple-import-sort',
    /* see https://github.com/Stuk/eslint-plugin-header#readme */
    'header',
    /* see https://github.com/microsoft/tsdoc */
    'eslint-plugin-tsdoc'
  ],
  env: {
    commonjs: true,
    browser: true,
    node: true
  },
  overrides: [
    {
      files: [
        '*.spec.*',
        '*.test.*'
      ],
      env: {
        mocha: true,
        commonjs: true,
        node: true,
        browser: false // change, when mocha is enabled for browser
      }
    },
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      plugins: [
        /* see https://github.com/gajus/eslint-plugin-jsdoc/ */
        'jsdoc'
      ],
      extends: [
        /* see https://github.com/gajus/eslint-plugin-jsdoc */
        'plugin:jsdoc/recommended'
      ],
      rules: {
        // region docs
        'tsdoc/syntax': 0,
        /* see https://github.com/gajus/eslint-plugin-jsdoc */
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/check-tag-names': 0,
        'jsdoc/check-types': 'error',
        'jsdoc/require-hyphen-before-param-description': ['error', 'always'],
        'jsdoc/require-jsdoc': 0,
        'jsdoc/require-param': 0,
        'jsdoc/require-param-description': 0,
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-property': 0,
        'jsdoc/require-property-description': 0,
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-property-type': 'error',
        'jsdoc/require-returns': 0,
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 0,
        'jsdoc/require-returns-type': 'error',
        'jsdoc/require-throws': 'error',
        'jsdoc/require-yields': 0,
        'jsdoc/require-yields-check': 'error',
        'jsdoc/sort-tags': 'warn'
        // region docs
      },
      settings: {
        jsdoc: {
          /* see https://github.com/gajus/eslint-plugin-jsdoc */
          mode: 'jsdoc'
        }
      }
    }
  ],
  rules: {
    // region override rules from plugin 'standard-with-typescript'
    /* @see https://typescript-eslint.io/rules/consistent-type-imports/ */
    '@typescript-eslint/consistent-type-imports': ['error', {
      /* we need our generated declaration files backward compatible to TS3.8
       * see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html
       */
      fixStyle: 'separate-type-imports'
    }],
    // endregion override rules from plugin 'standard-with-typescript'
    // region sort imports/exports
    /* disable other sorters in favour of `simple-import-sort` */
    'import/order': 0,
    'sort-imports': 0,
    /* see https://github.com/lydell/eslint-plugin-simple-import-sort/ */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // endregion sort imports/exports
    // region docs
    /* see https://github.com/microsoft/tsdoc */
    'tsdoc/syntax': 'error',
    // endregion docs
    // region license-header
    /* see https://github.com/Stuk/eslint-plugin-header#readme */
    'header/header': ['error', '.license-header.js']
    // endregion license-header
  }
}
