stringified-json-diff
=====================

Diff tool for stringified jsons.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/stringified-json-diff.svg)](https://npmjs.org/package/stringified-json-diff)
[![Downloads/week](https://img.shields.io/npm/dw/stringified-json-diff.svg)](https://npmjs.org/package/stringified-json-diff)
[![License](https://img.shields.io/npm/l/stringified-json-diff.svg)](https://github.com/toiroakr/stringified-json-diff/blob/master/package.json)

<!-- toc -->
# Usage
<!-- usage -->
```
$ npm install -g stringified-json-diff
$ sjd "{\"foo\": \"bar\"}" "{\"foo\": \"baz\"}"
 {
-  foo: "bar"
+  foo: "baz"
 }
```

or 

```
$ npx stringified-json-diff "{\"foo\": \"bar\"}" "{\"foo\": \"baz\"}"
 {
-  foo: "bar"
+  foo: "baz"
 }
```
