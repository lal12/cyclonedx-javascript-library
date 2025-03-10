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

const assert = require('node:assert')

const { suite, test } = require('mocha')

const { OptPlugError } = require('../../../dist.node/_optPlug.node/errors')
const { default: xmlStringify } = require('../../../dist.node/_optPlug.node/xmlStringify')

suite('functional: internals: OpPlug.node.xmlStringify auto', () => {
  if (xmlStringify.fails) {
    test('call should fail/throw', () => {
      assert.throws(
        () => { xmlStringify() },
        (err) => {
          assert.ok(err instanceof OptPlugError)
          assert.match(err.message, /no XmlStringifier available/i)
          return true
        }
      )
    })
    return
  }

  const dummyElem = Object.freeze({
    type: 'element',
    name: 'foo'
  })
  const dummyElemStringifiedRE = /<foo(:?\/>|><\/foo>)/

  test('call should pass', () => {
    const stringified = xmlStringify(dummyElem)
    assert.match(stringified, dummyElemStringifiedRE)
  })
})
